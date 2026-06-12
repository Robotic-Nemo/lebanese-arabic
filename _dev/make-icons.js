#!/usr/bin/env node
// Generates the PWA icons (icons/icon-192.png, icons/icon-512.png, icons/apple-touch-icon.png).
// Zero-dependency PNG encoder (RGBA, filter 0, zlib deflate). Design: Lebanese-flag-inspired —
// red top/bottom bands, white field, green cedar (stacked triangles + trunk).
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const ROOT = path.resolve(__dirname, '..');

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function encodePNG(size, px) { // px: Uint8Array size*size*4
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0; // filter none
    px.copy ? px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4)
            : raw.set(px.subarray(y * size * 4, (y + 1) * size * 4), y * (size * 4 + 1) + 1);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const RED = [0xee, 0x16, 0x1f], WHITE = [0xff, 0xff, 0xff], GREEN = [0x00, 0x7a, 0x3d];
function draw(size) {
  const px = Buffer.alloc(size * size * 4);
  const s = size / 512;
  function set(x, y, c) {
    const i = (y * size + x) * 4;
    px[i] = c[0]; px[i + 1] = c[1]; px[i + 2] = c[2]; px[i + 3] = 255;
  }
  const bandH = Math.round(120 * s);
  // cedar tiers: [yTop, height, halfWidthAtBase]
  const tiers = [[150, 95, 72], [215, 105, 108], [285, 115, 145]];
  const trunk = { x0: 244, x1: 268, y0: 392, y1: 420 };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let c = WHITE;
      if (y < bandH || y >= size - bandH) c = RED;
      else {
        const X = x / s, Y = y / s, cx = 256;
        for (const [ty, th, hw] of tiers) {
          if (Y >= ty && Y <= ty + th && Math.abs(X - cx) <= (hw * (Y - ty)) / th) { c = GREEN; break; }
        }
        if (c === WHITE && X >= trunk.x0 && X <= trunk.x1 && Y >= trunk.y0 && Y <= trunk.y1) c = GREEN;
      }
      set(x, y, c);
    }
  }
  return px;
}

const outDir = path.join(ROOT, 'icons');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
for (const [name, size] of [['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]]) {
  const buf = encodePNG(size, draw(size));
  fs.writeFileSync(path.join(outDir, name), buf);
  console.log('wrote icons/' + name, buf.length, 'bytes');
}
