async function main( ) {
    console.log("🔥 executing main function")

    // loading and compiling the webassembly module
    const wasm= await WebAssembly.instantiateStreaming(
        fetch("./main.wasm"),

            // details about imports done by the WASM virtual machine
            {
                "js": {
                    "print":
                        x => console.log("print function called from WASM virtual machine with argument", x)
                }
            }
        )

    console.log(wasm)

    // invoking WASM function from javascript
    wasm.instance.exports.add( )
}

main( )
    .catch(error => console.error(error))