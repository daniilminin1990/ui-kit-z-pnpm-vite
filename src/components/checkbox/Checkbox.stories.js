import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { Checkbox } from './Checkbox';
const meta = {
    argTypes: {
        onCheckedChange: { action: 'checked' }
    },
    component: Checkbox,
    tags: ['autodocs'],
    title: 'COMPONENTS/Checkbox'
};
export default meta;
export const Checked = {
    args: {
        checked: true,
        disabled: false,
        id: 'checked-checkbox',
        label: 'Click me'
    }
};
export const Unchecked = {
    args: {
        checked: false,
        disabled: false,
        id: 'unchecked-checkbox',
        label: 'Click me'
    }
};
export const DisabledChecked = {
    args: {
        checked: true,
        disabled: true,
        id: 'disabled-unchecked-checkbox',
        label: 'Click me'
    }
};
export const DisabledUnchecked = {
    args: {
        checked: false,
        disabled: true,
        id: 'disabled-checked-checkbox',
        label: 'Click me'
    }
};
export const Controlled = {
    args: {
        label: 'Click me'
    },
    render: (args) => {
        const [checked, setChecked] = useState(true);
        return _jsx(Checkbox, { ...args, checked: checked, onCheckedChange: () => { setChecked(!checked); } });
    }
};
