import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").ForwardRefExoticComponent<{
        callback?: (text: string) => void;
        currentValue?: string;
        error?: string | undefined;
        label?: string;
    } & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DefaultPassword: Story;
export declare const DefaultSearch: Story;
export declare const Error: Story;
export declare const ErrorPassword: Story;
export declare const ErrorSearch: Story;
export declare const Disable: Story;
export declare const DisablePassword: Story;
export declare const DisableSearch: Story;
export declare const DisableError: Story;
export declare const DisableErrorPassword: Story;
export declare const DisableErrorSearch: Story;
