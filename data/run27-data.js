// Run #27 — Multi-User Profile System
// Prefix: usr-
//
// Wraps localStorage so each user's progress (la_* keys) is namespaced under
// u_<userId>_la_*. Runs before app.js — must intercept all reads/writes.
// System keys starting with _la_ (users list, active user, migration flag)
// stay un-namespaced.

const USER_AVATARS = ['👤','🧑','👨','👩','🧒','👧','🧓','👴','👵','🦊','🐻','🦁','🐯','🐸','🐵','🐧','🐢','🦖','🌟','🍋','🌹','⚽','🎸','🎨','🚀','🔥'];

const USER_DEFAULTS = {
  goal: 20,
  sessionSize: 20,
  theme: null
};

(function setupUserNamespace(){
  if(typeof localStorage === 'undefined') return;
  const USERS_KEY  = '_la_users';
  const ACTIVE_KEY = '_la_active_user';
  const MIGRATED_KEY = '_la_migrated_v1';

  // Capture originals before we wrap
  const origGet = localStorage.getItem.bind(localStorage);
  const origSet = localStorage.setItem.bind(localStorage);
  const origRem = localStorage.removeItem.bind(localStorage);

  // Initialize users list — create Default if missing
  let users = [];
  try { users = JSON.parse(origGet(USERS_KEY) || '[]'); } catch(e) { users = []; }
  if(!Array.isArray(users) || users.length === 0){
    users = [{ id:'default', name:'Default', avatar:'👤', created: Date.now(), lastActive: Date.now() }];
    origSet(USERS_KEY, JSON.stringify(users));
  }

  // Active user
  let active = origGet(ACTIVE_KEY);
  if(!active || !users.find(u => u.id === active)){
    active = users[0].id;
    origSet(ACTIVE_KEY, active);
  }

  // One-time migration: existing 'la_*' keys → 'u_default_la_*'
  if(!origGet(MIGRATED_KEY)){
    const toMigrate = [];
    for(let i = 0; i < localStorage.length; i++){
      const k = localStorage.key(i);
      if(k && k.startsWith('la_')) toMigrate.push(k);
    }
    for(const k of toMigrate){
      const v = origGet(k);
      if(v !== null) origSet('u_default_' + k, v);
    }
    origSet(MIGRATED_KEY, '1');
  }

  function nskey(k){
    if(typeof k !== 'string') return k;
    // System keys (start with _la_) and non-la keys: leave alone
    if(k.startsWith('_la_') || !k.startsWith('la_')) return k;
    const a = origGet(ACTIVE_KEY) || 'default';
    return 'u_' + a + '_' + k;
  }

  // Wrap localStorage methods
  localStorage.getItem    = function(k){ return origGet(nskey(k)); };
  localStorage.setItem    = function(k, v){ return origSet(nskey(k), v); };
  localStorage.removeItem = function(k){ return origRem(nskey(k)); };

  // Public manager — used by app.js UI code
  window._userMgr = {
    USERS_KEY, ACTIVE_KEY, MIGRATED_KEY,
    list: function(){ try { return JSON.parse(origGet(USERS_KEY) || '[]'); } catch(e){ return []; } },
    save: function(arr){ origSet(USERS_KEY, JSON.stringify(arr)); },
    activeId: function(){ return origGet(ACTIVE_KEY) || 'default'; },
    setActiveId: function(id){ origSet(ACTIVE_KEY, id); },
    rawGet: origGet,
    rawSet: origSet,
    rawRemove: origRem,
    nskey: nskey,
    // Snapshot all keys belonging to one user (for export/copy/delete)
    keysOf: function(uid){
      const out = [];
      for(let i = 0; i < localStorage.length; i++){
        const k = localStorage.key(i);
        if(k && k.startsWith('u_' + uid + '_')) out.push(k);
      }
      return out;
    },
    // Export user as JSON object {meta, data:{key→value}}
    exportUser: function(uid){
      const user = (this.list().find(u => u.id === uid)) || null;
      if(!user) return null;
      const data = {};
      for(const k of this.keysOf(uid)){
        data[k.slice(('u_' + uid + '_').length)] = origGet(k);
      }
      return { user, data, exportedAt: Date.now(), version: 1 };
    },
    // Import — merges or replaces a user's data
    importUser: function(payload, opts){
      opts = opts || {};
      if(!payload || !payload.user) return false;
      const users = this.list();
      let target = payload.user;
      if(opts.newId){
        target = Object.assign({}, target, { id: opts.newId, name: opts.newName || target.name });
      }
      // Avoid id collision
      if(users.find(u => u.id === target.id) && !opts.overwrite){
        target.id = target.id + '_' + Date.now().toString(36);
      }
      if(!users.find(u => u.id === target.id)){
        users.push(target);
        this.save(users);
      }
      const prefix = 'u_' + target.id + '_';
      for(const k of Object.keys(payload.data || {})){
        origSet(prefix + k, payload.data[k]);
      }
      return target.id;
    },
    deleteUser: function(uid){
      if(uid === 'default') return false; // protect default
      const users = this.list().filter(u => u.id !== uid);
      this.save(users);
      for(const k of this.keysOf(uid)) origRem(k);
      if(this.activeId() === uid){
        this.setActiveId(users[0] ? users[0].id : 'default');
      }
      return true;
    },
    createUser: function(name, avatar){
      const users = this.list();
      const slug = (name || 'user').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0,16) || 'user';
      let id = slug, n = 1;
      while(users.find(u => u.id === id)) id = slug + n++;
      const u = { id, name: name || 'User', avatar: avatar || '👤', created: Date.now(), lastActive: Date.now() };
      users.push(u); this.save(users);
      return id;
    },
    renameUser: function(uid, name, avatar){
      const users = this.list();
      const u = users.find(x => x.id === uid); if(!u) return false;
      if(name) u.name = name;
      if(avatar) u.avatar = avatar;
      this.save(users); return true;
    }
  };
})();
