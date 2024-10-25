import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { TabSwitcher } from './TabSwitcher';
const meta = {
    component: TabSwitcher,
    tags: ['autodocs'],
    title: 'Components/Tab Switcher'
};
export default meta;
const tabsDefault = [
    { locale: 'Select1', text: 'Select1', value: 'Select1' },
    { locale: 'Select2', text: 'Select2', value: 'Select2' },
    { locale: 'Select3', text: 'Select3', value: 'Select3' },
    { locale: 'Select4', text: 'Select4', value: 'Select4' }
];
const tabsDisabled = [
    { disabled: true, locale: 'Select1', text: 'Select1', value: 'Select1' },
    { disabled: true, locale: 'Select2', text: 'Select2', value: 'Select2' },
    { disabled: true, locale: 'Select3', text: 'Select3', value: 'Select3' },
    { disabled: true, locale: 'Select4', text: 'Select4', value: 'Select4' }
];
const Template = (args) => {
    const [value, setValue] = useState('Select1');
    return _jsx(TabSwitcher, { ...args, onValueChange: (value) => { setValue(value); }, value: value });
};
export const Default = {
    args: {
        tabs: tabsDefault
    },
    render: (args) => _jsx(Template, { ...args })
};
export const Disabled = {
    args: {
        tabs: tabsDisabled
    },
    render: (args) => _jsx(Template, { ...args })
};
