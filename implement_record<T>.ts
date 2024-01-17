type Key = 'a' | 'b' | 'c'

type MyRecord<K extends keyof any, V> = {
    [P in K]: V;
};

const record: Record<Key, string> = {
    a: 'foo',
    b: 'foo',
    c: 'foo',

}
record.a = 'bar' // OK
// record.b = 123 // Error
// record.d = 'foo' // Error

// type Foo = MyRecord<{a: string}, string> // Error