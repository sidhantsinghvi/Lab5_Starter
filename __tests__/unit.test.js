// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2 
test('valid phone numbers should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone numbers should return false', () => {
  expect(isPhoneNumber('9899$99')).toBe(false);
  expect(isPhoneNumber('abc-ghij')).toBe(false);
});

test('valid emails should return true', () => {
  expect(isEmail('true@example.com')).toBe(true);
  expect(isEmail('user12@mail.com')).toBe(true);
});

test('invalid emails should return false', () => {
  expect(isEmail('just_something')).toBe(false);
  expect(isEmail('no@')).toBe(false);
});

test('strong passwords should return true', () => {
  expect(isStrongPassword('A12345')).toBe(true);
  expect(isStrongPassword('kvjfnvvkfnk')).toBe(true);
});

test('weak passwords should return false', () => {
  expect(isStrongPassword('12345')).toBe(false);
  expect(isStrongPassword('')).toBe(false);
});

test('valid dates should return true', () => {
  expect(isDate('12/12/2005')).toBe(true);
  expect(isDate('01/01/2000')).toBe(true);
});

test('invalid dates should return false', () => {
  expect(isDate('7-06-2010')).toBe(false);
  expect(isDate('3/00/000')).toBe(false);
});


test('valid hex colors should return true', () => {
  expect(isHexColor('#abc')).toBe(true);
  expect(isHexColor('#123456')).toBe(true);
});

test('invalid hex colors should return false', () => {
  expect(isHexColor('#something')).toBe(false);
  expect(isHexColor('#227s')).toBe(false);
});
