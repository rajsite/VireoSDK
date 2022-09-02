(async function () {
    'use strict';
    const {readFile} = require('node:fs/promises');
    const {WASI} = require('wasi');
    const path = require('node:path');
    const {argv} = require('node:process');
    const wasm = await WebAssembly.compile(
        await readFile(path.join(__dirname, '../dist/wasm32-wasi/release/vireo.wasm'))
    );
    const wasi = new WASI({
        args: argv.slice(1),
        preopens: {
            '/': path.join(__dirname, 'ViaTests')
        }
    });
    const importObject = {wasi_snapshot_preview1: wasi.wasiImport};
    const instance = await WebAssembly.instantiate(wasm, importObject);
    wasi.start(instance);
}());
