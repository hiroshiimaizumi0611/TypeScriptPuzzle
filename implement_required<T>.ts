type Foo = {
    a?: string
    b?: number
    c?: boolean
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

// const a: MyRequired<Foo> = {}
// Error

// const b: MyRequired<Foo> = {
//     a: 'foo'
// }
// Error

// const c: MyRequired<Foo> = {
//     b: 123
// }
// Error

// const d: MyRequired<Foo> = {
//     b: 123,
//     c: true
// }
// Error

const e: MyRequired<Foo> = {
    a: 'foo',
    b: 123,
    c: true
}
// valid