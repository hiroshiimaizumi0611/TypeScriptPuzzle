class Foo {
    constructor (a: string, b: number, c: boolean) {}
}
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

type C = MyConstructorParameters<typeof Foo>
// [a: string, b: number, c: boolean]