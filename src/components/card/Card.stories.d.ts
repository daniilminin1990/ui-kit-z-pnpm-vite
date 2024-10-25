import { StoryProps } from '@storybook/blocks';
import { StoryFn } from '@storybook/react';
declare const meta: {
    argTypes: {};
    component: <T extends import("react").ElementType = "div">(props: {
        ref?: import("react").ForwardedRef<import("react").ElementRef<T>>;
    } & import("./Card").CardProps<T> & Omit<import("react").ComponentPropsWithoutRef<T>, keyof import("./Card").CardProps<T>>) => ReturnType<(<T_1 extends import("react").ElementType = "div">(props: import("./Card").CardProps<T_1>, ref: any) => import("react/jsx-runtime").JSX.Element)>;
    parameters: {
        layout: string;
    };
    tags: string[];
    title: string;
};
export default meta;
export declare const Default: StoryFn<StoryProps>;
export declare const WithContent: StoryFn<StoryProps>;
