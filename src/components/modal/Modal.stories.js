import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { ImageOutline } from '../../core/assets/svgComponents';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Modal } from './Modal';
import { Checkbox } from '@radix-ui/react-checkbox';
import s from './Stories.module.scss';
const meta = {
    argTypes: {
        open: { control: { type: 'boolean' } },
        title: { control: { type: 'text' } }
    },
    component: Modal,
    tags: ['autodocs'],
    title: 'Components/Modal'
};
export default meta;
const ToggleModal = (args) => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => { setOpen(true); }, variant: 'primary', children: "Open Modal" }), _jsxs(Modal, { ...args, className: s.customClass, onOpenChange: () => { setOpen(false); }, open: open, title: 'Add New Deck', children: [_jsxs("div", { className: s.body, children: [_jsx(Input, { className: s.input, label: 'Name Pack', placeholder: 'Name' }), _jsxs(Button, { className: s.uploadImg, variant: 'secondary', fullWidth: true, children: [_jsx(ImageOutline, { className: s.icon }), " Upload Image"] }), _jsx(Checkbox, { checked: checked, className: s.checkbox, onCheckedChange: () => { setChecked(!checked); } })] }), _jsxs("div", { className: s.footer, children: [_jsx(Button, { onClick: () => { setOpen(false); }, variant: 'secondary', children: "Cancel" }), _jsx(Button, { onClick: () => { setOpen(false); }, variant: 'primary', children: "Add New Pack" })] })] })] }));
};
export { ToggleModal };
