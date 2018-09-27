import vireoHelpers from 'https://www.unpkg.com/vireo?module';


(async function () {
    var vireo = await vireoHelpers.createInstance(
        {
            wasmUrl: 'https://www.unpkg.com/vireo/dist/wasm32-unknown-emscripten/release/vireo.core.wasm'
        }
    );

    var viaCode = document.getElementById('viacode').textContent;
    vireo.eggShell.loadVia(viaCode);
    await vireo.eggShell.executeSlicesUntilClumpsFinished();
    console.log('finished :D');
}());
