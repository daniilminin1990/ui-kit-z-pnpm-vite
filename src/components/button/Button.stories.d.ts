import type { StoryObj } from '@storybook/react';
declare const meta: {
    argTypes: {
        variant: {
            control: {
                type: "radio";
            };
            options: string[];
        };
    };
    component: <T extends import("react").ElementType = "button">(props: {
        ref?: import("react").ForwardedRef<import("react").ElementRef<T>>;
    } & import("./Button").ButtonProps<T> & Omit<import("react").ComponentPropsWithoutRef<T>, keyof import("./Button").ButtonProps<T>>) => ReturnType<typeof import("./Button").ButtonPolymorph>;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const FullWidth: Story;
export declare const AsLink: Story;
