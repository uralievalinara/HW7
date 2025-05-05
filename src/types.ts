// Тип функции, которая принимает строку и возвращает строку
export type StringFunction = (str: string) => string;

// Тип функции, которая принимает строку и возвращает boolean
export type StringBooleanFunction = (str: string) => boolean;

// Тип функции для repeat, которая принимает строку и число, и возвращает строку
export type RepeatFunction = (str: string, count: number) => string;

// Тип функции для truncate, которая принимает строку и число, и возвращает строку
export type TruncateFunction = (str: string, length: number) => string;

// Тип функции для startsWith и endsWith, которая принимает две строки и возвращает boolean
export type StartsWithFunction = (str: string, searchString: string) => boolean;
export type EndsWithFunction = (str: string, searchString: string) => boolean;

// Тип функции для replaceAll, которая принимает строку, строку для замены и новую строку
export type ReplaceAllFunction = (str: string, search: string, replace: string) => string;

// Интерфейс, описывающий объект с набором утилит для строк
export interface StringUtils {
  capitalize: StringFunction;
  trim: StringFunction;
  repeat: RepeatFunction;
  toSnakeCase: StringFunction;
  toUpperCase: StringFunction;
  toLowerCase: StringFunction;
  isEmpty: StringBooleanFunction;
  reverseString: StringFunction;
  truncate: TruncateFunction;
  removeSpaces: StringFunction;
  countWords: (str: string) => number;
  startsWith: StartsWithFunction;
  endsWith: EndsWithFunction;
  replaceAll: ReplaceAllFunction;
}
