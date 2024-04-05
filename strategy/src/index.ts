export function sum(...args: number[]) {
  return args.reduce(
    (subtotal, currentValue) => subtotal + currentValue,
    0
  );
}
