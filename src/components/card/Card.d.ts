import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, ReactNode } from 'react';
export type CardProps<T extends ElementType = 'div'> = {
    as?: T;
    children?: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<T>;
declare const CardPolymorph: <T extends ElementType = "div">(props: CardProps<T>, ref: any) => import("react/jsx-runtime").JSX.Element;
export declare const Card: <T extends ElementType = "div">(props: {
    ref?: ForwardedRef<ElementRef<T>>;
} & CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) => ReturnType<typeof CardPolymorph>;
export {};
