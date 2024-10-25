import { TextArea } from './TextArea';
const meta = {
    component: TextArea,
    tags: ['autodocs'],
    title: 'Components/textArea'
};
export default meta;
export const Default = {
    args: {
        disabled: false,
        label: 'TextArea',
        placeholder: 'TextArea'
    }
};
export const Error = {
    args: {
        disabled: false,
        error: 'Error!',
        label: 'TextArea',
        placeholder: 'TextArea'
    }
};
export const NotResize = {
    args: {
        disabled: false,
        label: 'TextArea',
        placeholder: 'TextArea',
        resize: true
    }
};
export const Disable = {
    args: {
        disabled: true,
        label: 'TextArea',
        placeholder: 'TextArea'
    }
};
