type Foo = {
    a: string
    b: number
    c: boolean
}

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

const a: MyPartial<Foo> = {}

const b: MyPartial<Foo> = {
    a: 'BFE.dev'
}

const c: MyPartial<Foo> = {
    b: 123
}

const d: MyPartial<Foo> = {
    b: 123,
    c: true
}

const e: MyPartial<Foo> = {
    a: 'BFE.dev',
    b: 123,
    c: true
}