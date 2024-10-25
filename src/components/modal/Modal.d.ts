import { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
export type ModalProps = {
    backButton?: ReactNode;
    className?: string;
    classNameContent?: string;
    nextButton?: ReactNode;
    onOpenChange: (value: boolean) => void;
    open: boolean;
    showCloseButton?: boolean;
    style?: CSSProperties;
    title?: string;
} & Omit<ComponentPropsWithoutRef<typeof Dialog.Dialog>, 'onOpenChange' | 'open'>;
/**
 *
 * @param backButton - ReactNode. При передаче, слева от title отобразит компоненту (обычно для "Назад")
 * @param children - ReactNode
 * @param className - кастомная настройка стилей для Card компоненты (основа модалки)
 * @param classNameContent - кастомная настройка стилей для контента модалки
 * @param nextButton - ReactNode. При передаче, справа от title отобразит компоненту (обычно для "Вперед")
 * @param showCloseButton - дефолтно true - показывает кнопку Close
 * @param style - передача инлайновых стилей для Card компоненты (основа модалки)
 * @param title - заголовок
 * @param props
 * @constructor
 */
export declare const Modal: ({ backButton, children, className, classNameContent, nextButton, showCloseButton, style, title, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
