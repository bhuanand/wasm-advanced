(module
    (import "env" "memory" (memory 1)) ;; atleast one page 16KB
    (import "env" "print" (func $print (param i32 i32)))
    (data (i32.const 0) "Hello World!")
    (func (export "printsHello")
          i32.const 0
          i32.const 12
          call $print
    )
)