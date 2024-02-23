const { build } = require('esbuild');

build({
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: 'node',
    outfile: 'dist/index.js',
    target: 'node20',
}).catch(() => process.exit(1));
