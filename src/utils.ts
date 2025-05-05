import { StringUtils } from "./types";

export const stringUtils: StringUtils = {
  // Делает первую букву заглавной
  capitalize: (str: string): string => {
    if (!str || str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  // Убирает пробелы по краям строки
  trim: (str: string): string => {
    return str.trim();
  },

  // Повторяет строку указанное количество раз
  repeat: (str: string, count: number): string => {
    return str.repeat(count);
  },

  // Преобразует строку в snake_case
  toSnakeCase: (str: string): string => {
    return str
      .replace(/\s+/g, '_')
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .toLowerCase();
  },

  // Переводит строку в верхний регистр
  toUpperCase: (str: string): string => {
    return str.toUpperCase();
  },

  // Переводит строку в нижний регистр
  toLowerCase: (str: string): string => {
    return str.toLowerCase();
  },

  // Проверяет, пустая ли строка (включая строки только из пробелов)
  isEmpty: (str: string): boolean => {
    return str.trim().length === 0;
  },

  // Разворачивает строку
  reverseString: (str: string): string => {
    return str.split('').reverse().join('');
  },

  // Обрезает строку до длины и добавляет ...
  truncate: (str: string, length: number): string => {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
  },

  // Убирает все пробелы
  removeSpaces: (str: string): string => {
    return str.replace(/\s+/g, '');
  },

  // Считает количество слов
  countWords: (str: string): number => {
    if (!str.trim()) return 0;
    return str.trim().split(/\s+/).length;
  },

  // Проверяет начало строки
  startsWith: (str: string, searchString: string): boolean => {
    return str.startsWith(searchString);
  },

  // Проверяет конец строки
  endsWith: (str: string, searchString: string): boolean => {
    return str.endsWith(searchString);
  },

  // Заменяет все вхождения
  replaceAll: (str: string, search: string, replace: string): string => {
    return str.split(search).join(replace);
  }
};
