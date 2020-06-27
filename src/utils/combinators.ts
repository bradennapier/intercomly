/**
 * Takes the next `n` results from a given AsyncGenerator
 *
 * @example
 *  for await (const result of takeAsync(3, gen)) {
 *    console.log('Result! ', result);
 *  }
 */
export async function* takeAsync<T>(
  n: number,
  gen: AsyncGenerator<T>,
): AsyncGenerator<T> {
  let idx = 0;
  for await (const result of gen) {
    yield result;
    idx += 1;
    if (idx >= n) {
      break;
    }
  }
}

/**
 * Takes the next `n` results from a given AsyncGenerator
 *
 * @example
 *  for (const result of take(3, gen)) {
 *    console.log('Result! ', result);
 *  }
 */
export function* take<T>(n: number, gen: Generator<T>): Generator<T> {
  let idx = 0;
  for (const result of gen) {
    yield result;
    idx += 1;
    if (idx >= n) {
      break;
    }
  }
}
