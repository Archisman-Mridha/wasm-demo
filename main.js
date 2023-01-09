async function main( ) {
    console.log("🔥 executing main function")

    // loading and compiling the webassembly module
    const wasm= await WebAssembly.instantiateStreaming(
        fetch("./main.wasm"))

    console.log(wasm)

    console.log(
        //* using the add function that we defined in the WASM module
        wasm.instance.exports.add(34, 35)
    )
}

main( )
    .catch(error => console.error(error))