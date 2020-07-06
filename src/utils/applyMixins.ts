/* eslint-disable @typescript-eslint/no-explicit-any */
export default function applyMixins(
  derivedConstructor: { [key: string]: any },
  baseConstructors: Array<{ [key: string]: any }>,
): void {
  function copyProperties(
    target: { [key: string]: unknown },
    base: { [key: string]: unknown },
  ) {
    for (const name of Reflect.ownKeys(base)) {
      if (name !== 'constructor' && name !== 'prototype' && name !== 'name') {
        const desc = Object.getOwnPropertyDescriptor(base, name);
        if (desc) {
          Object.defineProperty(target, name, desc);
        }
      }
    }
  }
  baseConstructors.forEach((baseConstructor) => {
    copyProperties(derivedConstructor, baseConstructor);
    copyProperties(derivedConstructor.prototype, baseConstructor.prototype);
  });
}
