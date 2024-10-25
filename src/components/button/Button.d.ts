import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, ReactNode } from 'react';
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    children?: ReactNode;
    className?: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'primary' | 'secondary' | 'text';
} & ComponentPropsWithoutRef<T>;
export declare const ButtonPolymorph: <T extends ElementType = "button">(props: ButtonProps<T>, ref: any) => import("react/jsx-runtime").JSX.Element;
export declare const Button: <T extends ElementType = "button">(props: {
    ref?: ForwardedRef<ElementRef<T>>;
} & ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => ReturnType<typeof ButtonPolymorph>;
