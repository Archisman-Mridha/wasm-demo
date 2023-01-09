compile-rust-to-wasm:
	rustc --target wasm32-wasi ./main.rs

run:
	make compile-rust-to-wasm
	wasmtime ./main.wasm