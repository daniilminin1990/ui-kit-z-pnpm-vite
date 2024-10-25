import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { SelectUI } from './Select';
const meta = {
    component: SelectUI,
    decorators: [
        (Story) => (_jsx("div", { style: { padding: '20px' }, children: _jsx(Story, {}) }))
    ],
    tags: ['autodocs'],
    title: 'Components/SelectUI'
};
export default meta;
const Template = (args) => {
    const [value, setValue] = useState(args.value ?? ""); // Указываем тип для value
    return (_jsx(SelectUI, { ...args, onValueChange: (newValue) => {
            setValue(newValue);
        }, value: value }));
};
export const Default = {
    args: {
        selectOptions: [
            { text: 'Apple', value: 'apple' },
            { text: 'Banana', value: 'banana' },
            { text: 'Smetana', value: 'smetana' },
            { text: 'Nirvana', value: 'nirvana' }
        ],
        value: 'apple'
    },
    render: (args) => _jsx(Template, { ...args })
};
