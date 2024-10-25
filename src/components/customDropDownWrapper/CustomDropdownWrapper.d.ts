import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { TypographyVariant } from '../typography/Typography';
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
export declare const CustomDropdownWrapper: import("react").ForwardRefExoticComponent<{
    align?: "center" | "end" | "start";
    children?: ReactNode;
    className?: string;
    classNameTriggerActive?: string;
    isArrow?: boolean;
    side?: "bottom" | "left" | "right" | "top";
    sideOffset?: number;
    stayOpen?: boolean;
    style?: CSSProperties;
    trigger: ReactNode;
    triggerActive?: ReactNode;
} & DropdownMenu.DropdownMenuProps & import("react").RefAttributes<HTMLButtonElement>>;
type CustomDropdownItemProps = {
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    style?: CSSProperties;
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>;
/**
 * Компонент `CustomDropdownItem` — элемент выпадающего меню, представляющий отдельный пункт.
 *
 * @param {ReactNode} children - Дочерние элементы, которые будут отображаться в пункте меню.
 * @param {string} className - Дополнительные классы для стилизации элемента меню.
 * @param {boolean} disabled - Определяет, доступен ли элемент для взаимодействия (по умолчанию `false`).
 * @param {CSSProperties} style - Дополнительные стили для элемента меню.
 */
export declare const CustomDropdownItem: ({ children, className, disabled, onSelect, style, ...restProps }: CustomDropdownItemProps) => import("react/jsx-runtime").JSX.Element;
type CustomDropdownItemWithIconProps = {
    icon?: ReactNode;
    title: string;
    variant?: TypographyVariant;
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item> & Omit<CustomDropdownItemProps, 'children'>;
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
export declare const CustomDropdownItemWithIcon: ({ className, disabled, icon, onSelect, style, title, variant, ...rest }: CustomDropdownItemWithIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
