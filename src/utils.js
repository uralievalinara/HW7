"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtils = void 0;
exports.stringUtils = {
    // Делает первую букву заглавной
    capitalize: (str) => {
        if (!str || str.length === 0)
            return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    // Убирает пробелы по краям строки
    trim: (str) => {
        return str.trim();
    },
    // Повторяет строку указанное количество раз
    repeat: (str, count) => {
        return str.repeat(count);
    },
    // Преобразует строку в snake_case
    toSnakeCase: (str) => {
        return str
            .replace(/\s+/g, '_')
            .replace(/([a-z])([A-Z])/g, '$1_$2')
            .toLowerCase();
    },
    // Переводит строку в верхний регистр
    toUpperCase: (str) => {
        return str.toUpperCase();
    },
    // Переводит строку в нижний регистр
    toLowerCase: (str) => {
        return str.toLowerCase();
    },
    // Проверяет, пустая ли строка (включая строки только из пробелов)
    isEmpty: (str) => {
        return str.trim().length === 0;
    },
    // Разворачивает строку
    reverseString: (str) => {
        return str.split('').reverse().join('');
    },
    // Обрезает строку до длины и добавляет ...
    truncate: (str, length) => {
        if (str.length <= length)
            return str;
        return str.slice(0, length) + '...';
    },
    // Убирает все пробелы
    removeSpaces: (str) => {
        return str.replace(/\s+/g, '');
    },
    // Считает количество слов
    countWords: (str) => {
        if (!str.trim())
            return 0;
        return str.trim().split(/\s+/).length;
    },
    // Проверяет начало строки
    startsWith: (str, searchString) => {
        return str.startsWith(searchString);
    },
    // Проверяет конец строки
    endsWith: (str, searchString) => {
        return str.endsWith(searchString);
    },
    // Заменяет все вхождения
    replaceAll: (str, search, replace) => {
        return str.split(search).join(replace);
    }
};
