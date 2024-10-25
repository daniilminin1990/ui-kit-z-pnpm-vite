import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useEffect, useId, useState } from 'react';
import { EyeOff, Close, Eye, Search, PinOutline } from '../../core/assets/svgComponents';
import { Typography } from '../typography/Typography';
import { Button } from '../button/Button';
import clsx from 'clsx';
import s from './Input.module.scss';
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
export const Input = forwardRef((props, ref) => {
    const { callback, className, currentValue, error, id, label, placeholder, type, ...restProps } = props;
    const generatedId = id || useId();
    const [isShow, setIsShow] = useState(false);
    const [inputValue, setInputValue] = useState(currentValue || '');
    function handleChange(e) {
        props.onChange?.(e);
        setInputValue(e.target.value);
    }
    const clearInput = () => {
        setInputValue('');
        if (callback) {
            callback('');
        }
    };
    // ! ЗАЧЕМ ЭТА ФУНКЦИЯ? Ощущение что она вообще не нужна, ведь фокусировка по умолчанию предусмотрена, при клике
    const focusOnInput = () => {
        const inputElement = document.getElementById(id ?? generatedId);
        inputElement?.focus();
    };
    // ! ДОБАВИЛ ЭТУ ФУНКЦИЮ ДЛЯ КЛИКА ПО LOCATION. ПОКА НИЧЕГО НЕ ДОБАВЛЕНО
    const handleLocationClick = () => {
        console.log('Location icon clicked');
    };
    useEffect(() => {
        props.currentValue === '' && setInputValue('');
    }, [props.currentValue]);
    const isShowChangeHandler = () => {
        setIsShow(!isShow);
    };
    const EyeIcon = isShow ? Eye : EyeOff;
    let classNameForInput = '';
    switch (type) {
        case 'search':
            classNameForInput = error ? clsx(s.boxInput, s.errorSearch) : clsx(s.boxInput, s.boxPadding);
            break;
        case 'email':
        case 'password':
        case 'text':
            classNameForInput = error
                ? clsx(s.boxInputForText, s.boxInput, s.errorTextAndPassword)
                : clsx(s.boxInputForText, s.boxInput, inputValue.length === 0 && s.placeholder);
            break;
        default:
            classNameForInput = s.boxInput;
    }
    const styleForType = isShow ? 'text' : 'password';
    return (_jsxs("div", { className: clsx(s.box, className), children: [_jsx(Typography, { as: 'label', className: s.label, htmlFor: id ?? generatedId, variant: 'regular_text_14', children: type !== 'search' && label }), _jsxs("div", { className: s.searchClose, children: [type === 'search' && (_jsx("div", { children: _jsx(Search, { className: s.Search, onClick: focusOnInput, viewBox: '0 0 24 24' }) })), _jsx("input", { ...restProps, className: classNameForInput, id: generatedId, onChange: handleChange, placeholder: placeholder, ref: ref, type: type === 'password' ? styleForType : type, value: inputValue }), type === 'password' && inputValue.length > 0 && (_jsx(Button, { className: s.Eye, onClick: isShowChangeHandler, type: 'button', variant: 'text', children: _jsx(EyeIcon, { viewBox: '0 0 24 24' }) })), type === 'search' && inputValue.length > 0 && (_jsx(Button, { className: s.Close, onClick: clearInput, children: _jsx(Close, { viewBox: '0 0 24 24' }) })), type === 'location' && (_jsx(Button, { className: s.Location, onClick: handleLocationClick, type: 'button', variant: 'text', children: _jsx(PinOutline, { viewBox: '0 0 24 24' }) }))] }), error && _jsx("div", { className: s.errorText, children: error })] }));
});
Input.displayName = 'Input';