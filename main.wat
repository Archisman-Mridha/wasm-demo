(module

    ;; importing a function from javascript into the wasm virtual machine
    (func $print (import "js" "print") (param i32))

    (func (export "add") (param i32) (param i32)

        local.get 0 ;; push first argument to the stack
        local.get 1

        i32.add ;; add those 2 arguments

        call $print
    )
)