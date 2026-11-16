/** Parse a decimal, including exponent notation, without floating-point scaling. */
function parseDecimal(value: string): { coefficient: bigint; scale: number } {
  const [mantissa, exponent = '0'] = value.toLowerCase().split('e');
  const fraction = mantissa.split('.')[1] || '';
  return {
    coefficient: BigInt(mantissa.replace('.', '')),
    scale: fraction.length - Number(exponent),
  };
}

function floorToIncrement(value: number, increment: string): number {
  if (!increment) {
    return value;
  }

  const decimalIncrement = increment.trim();
  const incrementNumber = Number(decimalIncrement);
  if (
    !/^\+?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(decimalIncrement) ||
    !Number.isFinite(incrementNumber) ||
    !Number.isFinite(value)
  ) {
    throw new RangeError(
      'Value must be finite and increment must be a nonnegative decimal',
    );
  }

  const step = parseDecimal(decimalIncrement);
  if (!Number.isSafeInteger(step.scale)) {
    throw new RangeError('Increment exponent is outside the supported range');
  }

  // A zero tick/step disables the corresponding exchange filter.
  if (step.coefficient === BigInt(0) || value === 0) {
    return value;
  }

  const amount = parseDecimal(String(value));
  const scale = Math.max(amount.scale, step.scale, 0);
  const amountInteger =
    amount.coefficient * BigInt('1' + '0'.repeat(scale - amount.scale));
  const stepInteger =
    step.coefficient * BigInt('1' + '0'.repeat(scale - step.scale));
  let steps = amountInteger / stepInteger;

  // BigInt division truncates toward zero; preserve mathematical floor for negatives.
  if (amountInteger < BigInt(0) && amountInteger % stepInteger !== BigInt(0)) {
    steps -= BigInt(1);
  }

  return Number(`${steps * stepInteger}e-${scale}`);
}

/**
 * Floors a price to a multiple of the tick size using decimal arithmetic.
 * Empty or zero tick sizes leave it unchanged; invalid sizes or non-finite prices throw RangeError.
 * Inputs and the returned number remain subject to JavaScript number precision limits.
 */
export function roundToTickSize(price: number, tickSize: string): number {
  return floorToIncrement(price, tickSize);
}

/**
 * Floors a quantity to a multiple of the step size using decimal arithmetic.
 * Empty or zero step sizes leave it unchanged; invalid sizes or non-finite quantities throw RangeError.
 * Inputs and the returned number remain subject to JavaScript number precision limits.
 */
export function roundToStepSize(quantity: number, stepSize: string): number {
  return floorToIncrement(quantity, stepSize);
}
