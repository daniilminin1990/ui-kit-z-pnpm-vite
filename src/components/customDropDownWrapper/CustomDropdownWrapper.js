import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { clsx } from 'clsx';
import s from './CustomDropDownWrapper.module.scss';
import { Typography } from '../typography/Typography';
/**
 * Компонент `CustomDropdownWrapper` — настраиваемый выпадающий список, который может содержать
 * различные элементы, такие как кнопки или другие интерактивные элементы.
 *
 * @param {'center' | 'end' | 'start'} align - Выравнивание выпадающего меню по горизонтали.
 * @param {ReactNode} children - Дочерние элементы, которые будут отображаться в выпадающем меню.
 * @param {string} className - Дополнительные классы для стилизации контейнера выпадающего меню.
 * @param {string} classNameTriggerActive - Классы для стилизации триггера, когда меню открыто.
 * @param {boolean} isArrow - Определяет, будет ли стрелка отображаться на выпадающем меню (по умолчанию `true`).
 * @param {'bottom' | 'left' | 'right' | 'top'} side - Сторона, с которой открывается выпадающее меню.
 * @param {number} sideOffset - Отступ между триггером и выпадающим меню (по умолчанию `8`).
 * @param {boolean} stayOpen - Если `true`, меню остается открытым после клика по элементам (по умолчанию `false`).
 * @param {CSSProperties} style - Дополнительные стили для выпадающего меню.
 * @param {ReactNode} trigger - Элемент триггера, по которому открывается выпадающее меню.
 * @param {ReactNode} triggerActive - Элемент триггера, отображаемый, когда меню открыто. ДЛЯ ТЕХ СЛУЧАЕВ, КОГДА ИКОНКА ДОЛЖНА ОТЛИЧАТЬСЯ ОТ ТРИГГЕРА В ЗАКРЫТОМ СОСТОЯНИИ.
 */
export const CustomDropdownWrapper = forwardRef(({ align = 'center', children, className, classNameTriggerActive, isArrow = false, side = 'bottom', sideOffset = 8, stayOpen = false, style, trigger, triggerActive }, ref) => {
    const [open, setOpen] = useState(false);
    // const triggerCondition = !triggerActive ? trigger : open ? triggerActive : trigger;
    const triggerCondition = () => {
        if (!triggerActive) {
            return trigger;
        }
        else {
            return open ? triggerActive : trigger;
        }
    };
    const classNames = {
        arrow: clsx(s.arrow),
        arrowWrap: clsx(s.arrowWrap),
        content: clsx(s.dropdownMenuContent, className),
        itemsWrap: clsx(s.itemsWrap)
    };
    return (_jsxs(DropdownMenu.Root, { onOpenChange: setOpen, open: open, children: [_jsx(DropdownMenu.Trigger, { className: clsx(s.trigger, open && classNameTriggerActive), ref: ref, asChild: true, children: triggerCondition() }), _jsx(DropdownMenu.Portal, { children: _jsxs(DropdownMenu.Content, { onClick: (event) => {
                        event.stopPropagation();
                        stayOpen ? setOpen(true) : setOpen(false);
                    }, align: align, className: clsx(s.dropdownMenuContent, className), side: side, sideOffset: sideOffset, style: style, children: [isArrow && _jsx(DropdownMenu.Arrow, { className: classNames.arrowWrap }), _jsxs("div", { className: classNames.itemsWrap, children: [children, " "] })] }) })] }));
});
/**
 * Компонент `CustomDropdownItem` — элемент выпадающего меню, представляющий отдельный пункт.
 *
 * @param {ReactNode} children - Дочерние элементы, которые будут отображаться в пункте меню.
 * @param {string} className - Дополнительные классы для стилизации элемента меню.
 * @param {boolean} disabled - Определяет, доступен ли элемент для взаимодействия (по умолчанию `false`).
 * @param {CSSProperties} style - Дополнительные стили для элемента меню.
 */
export const CustomDropdownItem = ({ children, className, disabled, onSelect, style, ...restProps }) => {
    const classNames = {
        item: clsx(s.dropdownMenuItem, className)
    };
    return (_jsx(DropdownMenu.Item, { className: classNames.item, disabled: disabled, onSelect: onSelect, style: style, ...restProps, children: children }));
};
/**
 * Компонент `CustomDropdownItemWithIcon` — элемент выпадающего меню с иконкой и заголовком.
 *
 * @param {string} className - Дополнительные классы для стилизации элемента меню.
 * @param {boolean} disabled - Определяет, доступен ли элемент для взаимодействия (по умолчанию `false`).
 * @param {ReactNode} icon - Иконка, отображаемая рядом с заголовком пункта меню.
 * @param {function} onSelect - Обработчик события выбора пункта меню.
 * @param {CSSProperties} style - Дополнительные стили для элемента меню.
 * @param {string} title - Заголовок, отображаемый в пункте меню.
 * @param {TypographyVariant} variant - Вариант стилизации текста заголовка.
 */
export const CustomDropdownItemWithIcon = ({ className, disabled, icon, onSelect, style, title, variant, ...rest }) => {
    const classNames = {
        icon: clsx(s.itemIcon),
        item: clsx(s.dropdownMenuItem, className)
    };
    return (_jsxs(DropdownMenu.Item, { className: classNames.item, disabled: disabled, onClick: (event) => { event.stopPropagation(); }, onSelect: onSelect, style: style, ...rest, children: [_jsx("div", { className: classNames.icon, children: icon }), _jsx(Typography, { variant: variant ?? 'large', children: title })] }));
};
