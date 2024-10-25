import { Button } from './Button';
const meta = {
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'secondary']
        }
    },
    component: Button,
    tags: ['autodocs'],
    title: 'Components/Button'
};
export default meta;
export const Primary = {
    args: {
        children: 'Primary',
        disabled: false,
        variant: 'primary'
    }
};
export const Secondary = {
    args: {
        children: 'Secondary',
        disabled: false,
        variant: 'secondary'
    }
};
export const FullWidth = {
    args: {
        children: 'Full Width Primary Button',
        disabled: false,
        fullWidth: true,
        variant: 'primary'
    }
};
export const AsLink = {
    args: {
        as: 'a',
        children: 'Link that looks like a button',
        variant: 'primary'
    }
};
