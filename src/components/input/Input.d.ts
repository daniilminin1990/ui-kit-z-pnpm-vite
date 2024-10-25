import { ComponentPropsWithoutRef } from 'react';
export type InputProps = {
    callback?: (text: string) => void;
    currentValue?: string;
    error?: string | undefined;
    label?: string;
} & ComponentPropsWithoutRef<'input'>;
/**
 * Компонент `Input` — настраиваемое поле ввода, поддерживающее различные типы ввода
 * и функционал, включая отображение ошибок, очистку поля и обработку кликов по иконкам.
 *
 * @param {function} callback - Функция обратного вызова, вызываемая при изменении значения поля ввода.
 * @param {string} currentValue - Текущее значение поля ввода (по умолчанию пустая строка).
 * @param {string | undefined} error - Сообщение об ошибке, которое отображается под полем ввода (если есть).
 * @param {string} label - Метка, отображаемая над полем ввода.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} restProps - Остальные атрибуты для элемента <input>,
 * которые могут быть переданы, включая `type`, `placeholder` и т.д.
 */
export declare const Input: import("react").ForwardRefExoticComponent<{
    callback?: (text: string) => void;
    currentValue?: string;
    error?: string | undefined;
    label?: string;
} & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
