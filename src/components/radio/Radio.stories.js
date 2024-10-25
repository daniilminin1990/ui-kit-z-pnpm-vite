import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import { Radio } from './Radio';
const meta = {
    component: Radio,
    tags: ['autodocs'],
    title: 'Components/Radio'
};
export default meta;
export const Default = () => {
    return (_jsx(Radio.Root, { name: 'common', children: _jsx(Radio.Item, { value: '1 radio', children: "1 radio" }) }));
};
export const DefaultGroup = () => {
    return (_jsxs(Radio.Root, { name: 'grade', children: [_jsx(Radio.Item, { value: '1 radio', children: "1 radio" }), _jsx(Radio.Item, { value: '2 radio', children: "2 radio" }), _jsx(Radio.Item, { value: '3 radio', children: "3 radio" }), _jsx(Radio.Item, { value: '4 radio', children: "4 radio" }), _jsx(Radio.Item, { value: '5 radio', children: "5 radio" })] }));
};
export const Disabled = () => {
    return (_jsx(Radio.Root, { name: 'disabled', children: _jsx(Radio.Item, { value: '1 radio', disabled: true, children: "1 radio" }) }));
};
export const Controlled = () => {
    const { control } = useForm(); // Передаем тип данных формы
    return (_jsx("div", { children: _jsx("form", { children: _jsx(Controller, { render: ({ field }) => (_jsxs(Radio.Root, { onValueChange: (value) => {
                        field.onChange(value);
                    }, name: field.name, value: field.value, children: [_jsx(Radio.Item, { value: '1 radio', children: "1 radio" }), _jsx(Radio.Item, { value: '2 radio', children: "2 radio" }), _jsx(Radio.Item, { value: '3 radio', children: "3 radio" }), _jsx(Radio.Item, { value: '4 radio', children: "4 radio" }), _jsx(Radio.Item, { value: '5 radio', children: "5 radio" })] })), control: control, name: 'grade' }) }) }));
};
