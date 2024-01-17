type Foo = {
    a: string
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

const a:Foo = {
    a: 'foo',
}
a.a = 'bar'
// OK

const b:MyReadonly<Foo> = {
    a: 'foo'
}
// b.a = 'bar'
// Error