import { ComponentPropsWithoutRef } from 'react';
export type TextAreaProps = {
    callback?: (text: string) => void;
    classNameTextAreaSize?: string;
    counterValue?: string;
    currentValue?: string;
    error?: string | undefined;
    label?: string;
    resize?: boolean;
} & ComponentPropsWithoutRef<'textarea'>;
/**
 * Компонент `TextArea` — это расширяемое текстовое поле с поддержкой:
 * - кастомного размера через `classNameTextAreaSize`
 * - счетчика символов с помощью `counterValue`
 * - управления значением через `currentValue`
 * - отображения ошибки через `error`
 * - отображения заголовка через `label`
 * - настройки возможности изменения размера через `resize`
 *
 * @param {function} callback - Опциональная функция для обработки изменения текста.
 * @param {string} classNameTextAreaSize - Дополнительный класс для изменения размера textarea.
 * @param {string} counterValue - Значение для отображения счетчика символов.
 * @param {string} currentValue - Текущее значение textarea.
 * @param {string} error - Ошибка для отображения под textarea.
 * @param {string} label - Заголовок, отображаемый над textarea.
 * @param {boolean} resize - Включение/выключение возможности изменения размера textarea.
 * @param {ComponentPropsWithoutRef<'textarea'>} restProps - Остальные стандартные свойства элемента <textarea>.
 */
export declare const TextArea: import("react").ForwardRefExoticComponent<{
    callback?: (text: string) => void;
    classNameTextAreaSize?: string;
    counterValue?: string;
    currentValue?: string;
    error?: string | undefined;
    label?: string;
    resize?: boolean;
} & Omit<import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
