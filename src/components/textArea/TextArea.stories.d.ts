import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        callback?: (text: string) => void;
        classNameTextAreaSize?: string;
        counterValue?: string;
        currentValue?: string;
        error?: string | undefined;
        label?: string;
        resize?: boolean;
    } & Omit<import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: Story;
export declare const NotResize: Story;
export declare const Disable: Story;
