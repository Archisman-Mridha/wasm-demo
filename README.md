# WASM Demo

Getting started with WASM !

## Tools

- *`wat2wasm`* for compiling wasm text files (wat) to wasm binary files.
    ```sh
    # installation command
    pnpm install -g wat2wasm
    ```

- rust -
    ```sh
    # installation command
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    ```

- `*wasm32-wasi*` - for compiling rust code to wasm binary which we can run on the server -
    ```sh
    # installation command
    rustup target add wasm32-wasi
    ```

- `*wasmtime*` - for running wasm binaries on the server
    ```sh
    #installation command
    curl https://wasmtime.dev/install.sh -sSf | bash
    ```

## Credits

All credit goes to [Alexey Kutepov](https://github.com/rexim). I watched his livestream https://youtu.be/2qV-1JhxWeE and coded along with him 😉
