import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from 'clsx';
import s from './Wrapper.module.scss';
export const Wrapper = (props) => {
    const { children, className, variant = 'boxContent' } = props;
    return _jsx("div", { className: clsx(s[variant], className), children: children });
};
