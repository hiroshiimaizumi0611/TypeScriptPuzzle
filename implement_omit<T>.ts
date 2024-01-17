type Foo = {
    a: string
    b: number
    c: boolean
}

type MyOmit<T, K extends keyof any> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

type A = MyOmit<Foo, 'a' | 'b'> // {c: boolean}
type B = MyOmit<Foo, 'c'> // {a: string, b: number}
type C = MyOmit<Foo, 'c' | 'd'>  // {a: string, b: number}