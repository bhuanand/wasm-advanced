const memory = new WebAssembly.Memory({initial: 1});

function logString(offset, length) {
    const bytes = new Uint8Array(memory.buffer, offset, length);
    const str = new TextDecoder("utf8").decode(bytes);
    console.log(str);
}

const importedEnv = {
    "env": {
        "memory": memory,
        "print": logString
    }
};

WebAssembly.instantiateStreaming(fetch("strings.wasm"), importedEnv)
    .then(({module, instance}) => {
        console.log(module);
        console.log(instance);
        instance.exports.printsHello();
    });