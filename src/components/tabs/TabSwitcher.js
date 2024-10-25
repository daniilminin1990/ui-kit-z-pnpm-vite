import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '../typography/Typography';
import * as Tabs from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import s from './TabSwitcher.module.scss';
export const TabSwitcher = ({ className, onValueChange, tabs, value }) => {
    return (_jsx("div", { className: clsx(s.container, className), children: _jsx(Tabs.Root, { activationMode: 'automatic', className: s.root, onValueChange: onValueChange, value: value, children: _jsx(Tabs.List, { className: s.tabList, children: tabs.map((tab) => (_jsx(Tabs.Trigger, { className: clsx(s.trigger), disabled: tab.disabled, value: tab.value, children: _jsx(Typography, { className: s.tabName, variant: 'regular_text_16', children: tab.value }) }, tab.value))) }) }) }));
};
