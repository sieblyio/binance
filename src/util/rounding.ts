/**
 * Floors a value to a multiple of the increment (tick or step size string, e.g. "0.05000000").
 * Works on scaled integers to avoid float noise. Empty or zero increments return the value unchanged.
 */
function floorToIncrement(value: number, increment: string): number {
  const incrementNum = parseFloat(increment);
  if (!increment || !incrementNum) {
    return value;
  }

  // Decimals from the increment string, ignoring trailing zeros (e.g. "0.05000000" → 2)
  const decimals = (increment.split('.')[1] || '').replace(/0+$/, '').length;
  const factor = 10 ** decimals;

  // toFixed trims float noise (0.29 * 100 = 28.999999999999996) before flooring
  const scaledValue = Math.floor(+(value * factor).toFixed(6));
  const scaledIncrement = Math.round(incrementNum * factor);
  const floored = Math.floor(scaledValue / scaledIncrement) * scaledIncrement;

  return +(floored / factor).toFixed(decimals);
}

/**
 * Rounds a price down to a multiple of the symbol's tick size
 */
export function roundToTickSize(price: number, tickSize: string): number {
  return floorToIncrement(price, tickSize);
}

/**
 * Rounds a quantity down to a multiple of the symbol's step size
 */
export function roundToStepSize(quantity: number, stepSize: string): number {
  return floorToIncrement(quantity, stepSize);
}
