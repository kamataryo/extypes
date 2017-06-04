import test from 'ava'
import $toCamelCase from 'String/$toCamelCase'

test('snake to lower camel case implicitly', t => t.deepEqual(
  'foo_bar_baz'[$toCamelCase](),
  'fooBarBaz'
))

test('snake to lower camel case explicitly', t => t.deepEqual(
  'foo_bar_baz'[$toCamelCase]('lower'),
  'FooBarBaz'
))

test('snake to Upper camel case', t => t.deepEqual(
  'foo_bar_baz'[$toCamelCase]('upper'),
  'FooBarBaz'
))

test('chain to lower camel case implicitly', t => t.deepEqual(
  'foo-bar-baz'[$toCamelCase](),
  'fooBarBaz'
))

test('chain to lower camel case explicitly', t => t.deepEqual(
  'foo-bar-baz'[$toCamelCase]('lower'),
  'FooBarBaz'
))

test('chain to Upper camel case', t => t.deepEqual(
  'foo-bar-baz'[$toCamelCase]('upper'),
  'FooBarBaz'
))

test('snake and chain to lower camel case implicitly', t => t.deepEqual(
  'foo-bar_baz'[$toCamelCase](),
  'fooBarBaz'
))

test('snake and chain to lower camel case explicitly', t => t.deepEqual(
  'foo-bar_baz'[$toCamelCase]('lower'),
  'FooBarBaz'
))

test('snake and chain to Upper camel case', t => t.deepEqual(
  'foo-bar_baz'[$toCamelCase]('upper'),
  'FooBarBaz'
))

test('nothing chage with camel cased string', t => t.deepEqual(
  'fooBarBaz'[$toCamelCase](),
  'fooBarBaz'
))

test('nothing chage with camel cased string', t => t.deepEqual(
  'fooBarBaz'[$toCamelCase]('upper'),
  'FooBarBaz'
))
