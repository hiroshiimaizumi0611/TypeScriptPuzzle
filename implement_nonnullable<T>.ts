type Foo = 'a' | 'b' | null | undefined

type MyNonNullable<T> = T extends null | undefined ? never : T;

type A = MyNonNullable<Foo> // 'a' | 'b'