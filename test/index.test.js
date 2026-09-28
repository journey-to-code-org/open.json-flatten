import test from "node:test";import assert from "node:assert/strict";import{flattenObject}from"../src/index.js";
test("flattens nested objects",()=>assert.deepEqual(flattenObject({a:{b:1},c:2}),{"a.b":1,c:2}));
test("flattens arrays",()=>assert.deepEqual(flattenObject({a:[1,2]}),{"a.0":1,"a.1":2}));
test("preserves empty values",()=>assert.deepEqual(flattenObject({a:{},b:[]}),{a:{},b:[]}));
