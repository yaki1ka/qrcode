const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const qrcodeBundle = fs.readFileSync('qrcode-bundle.js', 'utf8');
const jszipBundle = fs.readFileSync('node_modules/jszip/dist/jszip.min.js', 'utf8');

let result = html;

// Replace CDN qrcode script with inline bundle
result = result.replace(
  '<script src="https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js"></script>',
  '<script>\n' + qrcodeBundle + '\n</script>'
);

// Replace CDN jszip script with inline bundle
result = result.replace(
  '<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>',
  '<script>\n' + jszipBundle + '\n</script>'
);

fs.writeFileSync('index.html', result, 'utf8');
console.log('Done. Output size:', Buffer.byteLength(result, 'utf8'), 'bytes');
