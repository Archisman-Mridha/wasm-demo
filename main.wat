(module

    (func (export "add") (param i32) (param i32) (result i32)

        local.get 0 ;; push first argument to the stack
        local.get 1

        i32.add ;; add those 2 arguments
    )
)