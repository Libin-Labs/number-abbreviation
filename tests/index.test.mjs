import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('leaves small values unchanged', () => {
  assert.equal(api.abbreviateNumber(999), '999');
});
test('abbreviates thousands', () => {
  assert.equal(api.abbreviateNumber(1250), '1.3K');
});
test('abbreviates millions', () => {
  assert.equal(api.abbreviateNumber(1250000), '1.3M');
});
test('preserves negative sign', () => {
  assert.equal(api.abbreviateNumber(-2500000, 2), '-2.50M');
});
test('supports integer precision', () => {
  assert.equal(api.abbreviateNumber(1500, 0), '2K');
});
test('rejects invalid precision', () => {
  assert.throws(() => api.abbreviateNumber(2, 7), RangeError);
});
