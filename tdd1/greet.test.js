const greet = require('./greet');
test('Write a method greet(name)', () => {
    expect(greet('Bob'));
})
//Requirement 1
test('when name is "Bob", the method should return a string "Hello, Bob."', () => {
    expect(greet('Bob')).toBe("Hello, Bob.");
})
test('when name is "Took", the method should return a string "Hello, Took."', () => {
    expect(greet('Took')).toBe("Hello, Took.");
})

//Requirement 2
test('null, then the method should return the string "Hello, my friend."', () => {
    expect(greet(null)).toBe("Hello, my friend.");
})

//Requirement 3
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () => {
    expect(greet('JERRY')).toBe("Hello, JERRY!");
})

//Requirement 4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () => {
    expect(greet(Array.of("Jill","Jane"))).toBe("Hello, Jill and Jane.");
})

//Requirement 5
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () => {
    expect(greet(Array.of("Amy","Brian","Charlotte"))).toBe("Hello, Amy, Brian, and Charlotte.");
})

//Requirement 6
test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
    expect(greet(Array.of("Amy","BRIAN","Charlotte"))).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
})

//Requirement 7
test('when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne."', () => {
    expect(greet(Array.of("Bob","Charlie, Dianne"))).toBe("Hello, Bob, Charlie, and Dianne.");
})

//Requirement 8
test('when name is ["Bob", ""Charlie, Dianne""], then the method should return the string "Hello, Bob and Charlie, Dianne."', () => {
    expect(greet(Array.of("Bob","\"Charlie, Dianne\""))).toBe("Hello, Bob and Charlie, Dianne.");
})