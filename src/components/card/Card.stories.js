import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from './Card';
import s from './CardStories.module.scss';
const meta = {
    argTypes: {},
    component: Card,
    parameters: {
        layout: 'center'
    },
    tags: ['autodocs'],
    title: 'Components/Card'
};
export default meta;
export const Default = (_) => {
    return _jsx(Card, { style: { height: '100px', width: '420px' } });
};
export const WithContent = (_) => {
    return (_jsxs(Card, { style: {
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '35px 24px',
            width: '420px'
        }, children: [_jsx("h2", { children: "Card" }), _jsx("input", { className: s.input, type: 'text' }), _jsx("input", { className: s.input, type: 'search' }), _jsx("input", { className: s.input, type: 'password' })] }));
};
