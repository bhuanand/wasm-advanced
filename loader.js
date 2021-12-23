// async function loadWasm() {
//     const response = await fetch("test.wasm");
//     const wasmBuffer = await response.arrayBuffer();
//     const {instance} = await WebAssembly.instantiate(wasmBuffer);
//     console.log(instance);
//     console.log(instance.exports.add(2,3));
//     console.log(instance.exports.fibonacci(9));
// }

// loadWasm();


function fibonacciJS(a) {
    if (a <= 1) {
        return a;
    }
    return fibonacciJS(a-1) + fibonacciJS(a-2);
}

async function loadWasm() {
    const streamingResponse = await WebAssembly.instantiateStreaming(fetch("test.wasm"));
    const wasmInstance = streamingResponse.instance;
    
    console.time("fibonacci");
    console.log(wasmInstance.exports.fibonacci(40));
    console.timeEnd("fibonacci");

    console.time("fibonacciJS");
    console.log(fibonacciJS(40));
    console.timeEnd("fibonacciJS");
}

loadWasm();