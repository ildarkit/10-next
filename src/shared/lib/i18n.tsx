export type Translations<T extends string> = Record<T, Record<T, T>>;
export type GetTranslationFn<T extends Translations<string>> = (value: keyof T) => string;

export function createI18nModule<
  T extends Translations<string>,
>(translations: T) {
  return function (lang?: string) {
    const t: GetTranslationFn<T> = (key) => {
      const t = translations[key];
      return lang ? t?.[lang] : key as string;
    };
    return {
      t,
    };
  };
}
