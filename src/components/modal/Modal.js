import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseOutline } from '../../core/assets/svgComponents';
import { Typography } from '../typography/Typography';
import { Card } from '../card/Card';
import * as Dialog from '@radix-ui/react-dialog';
import { clsx } from 'clsx';
import s from './Modal.module.scss';
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
export const Modal = ({ backButton, children, className, classNameContent, nextButton, showCloseButton = true, style, title, ...props }) => (_jsx(Dialog.Root, { ...props, children: _jsxs(Dialog.Portal, { children: [_jsx(Dialog.Overlay, { className: s.DialogOverlay }), _jsx(Dialog.Title, {}), _jsx(Dialog.Description, {}), _jsxs(Dialog.Content, { className: clsx(s.DialogContent), children: [_jsx(Dialog.Title, {}), _jsx(Dialog.Description, {}), _jsxs(Card, { className: clsx(s.card, className), style: style, children: [_jsxs("div", { className: s.header, "data-header": 'header', children: [backButton, _jsx(Typography, { as: 'h1', variant: 'h1', children: title }), nextButton, _jsx(Dialog.Close, { asChild: true, children: _jsx("button", { "aria-label": 'Close', className: clsx(s.closeBtn, { [s.hidden]: !showCloseButton }), children: _jsx(CloseOutline, {}) }) })] }), _jsx("div", { className: clsx(s.content, classNameContent), "data-content": 'content', children: children })] })] })] }) }));
