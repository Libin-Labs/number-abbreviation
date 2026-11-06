export function abbreviateNumber(value: number, decimals = 1): string {
  if (!Number.isFinite(value)) throw new TypeError('Value must be finite');
  if (!Number.isInteger(decimals) || decimals < 0 || decimals > 6)
    throw new RangeError('Decimals must be between 0 and 6');
  const magnitude = Math.abs(value),
    units = [
      { limit: 1e12, suffix: 'T' },
      { limit: 1e9, suffix: 'B' },
      { limit: 1e6, suffix: 'M' },
      { limit: 1e3, suffix: 'K' },
    ],
    unit = units.find((item) => magnitude >= item.limit);
  return unit ? (value / unit.limit).toFixed(decimals) + unit.suffix : String(value);
}
