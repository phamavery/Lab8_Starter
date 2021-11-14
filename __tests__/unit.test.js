// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone 1', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('valid phone 2', () => {
    expect(functions.isPhoneNumber('626-654-4323')).toBe(true);
});

test('invalid phone 1', () => {
    expect(functions.isPhoneNumber('111-111-111')).toBe(false);
});

test('invalid phone 2', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid email 1', () => {
    expect(functions.isEmail('adp002@ucsd.edu')).toBe(true);
});

test('valid email 2', () => {
    expect(functions.isEmail('avery@gmail.com')).toBe(true);
});

test('invalid email 1', () => {
    expect(functions.isEmail('adp002')).toBe(false);
});

test('invalid email 2', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

test('strong pass 1', () => {
    expect(functions.isStrongPassword('hunter2')).toBe(true);
});
test('strong pass 2', () => {
    expect(functions.isStrongPassword('StrongPass123')).toBe(true);
});

test('not strong pass 1', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('not strong pass 2', () => {
    expect(functions.isStrongPassword('!@#$%^&*()')).toBe(false);
});

test('valid date 1', () => {
    expect(functions.isDate('01/01/2022')).toBe(true);
});

test('valid date 2', () => {
    expect(functions.isDate('1/1/2022')).toBe(true);
});

test('invalid date 1', () => {
    expect(functions.isDate('01/01/22')).toBe(false);
});

test('invalid date 2', () => {
    expect(functions.isDate('December 25th')).toBe(false);
});

test('valid hex 1', () => {
    expect(functions.isHexColor('#1a5276')).toBe(true);
});

test('valid hex 1', () => {
    expect(functions.isHexColor('#5b97be')).toBe(true);
});

test('invalid hex 1', () => {
    expect(functions.isHexColor('rainbow')).toBe(false);
});

test('invalid hex 2', () => {
    expect(functions.isHexColor('pretty colors')).toBe(false);
});