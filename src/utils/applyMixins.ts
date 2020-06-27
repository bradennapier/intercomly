export default function applyMixins(
  derivedConstructor: { [key: string]: any },
  baseConstructors: Array<{ [key: string]: any }>,
  allowOverwrites = false,
): void {
  baseConstructors.forEach((baseConstructor) => {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach((name) => {
      if (name === 'constructor') {
        return;
      }
      if (
        !allowOverwrites &&
        Object.hasOwnProperty.call(derivedConstructor.prototype, name)
      ) {
        throw new Error(
          `Mixin collision with property ${name} on ${baseConstructor.prototype.constructor.name}`,
        );
      }
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(
          baseConstructor.prototype,
          name,
        ) as PropertyDescriptor & ThisType<any>,
      );
    });
  });
}
