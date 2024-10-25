import { ComponentProps, ElementType, ReactNode } from 'react';
export type TypographyVariant = 'bold_text_14' | 'bold_text_16' | 'h1' | 'h2' | 'h3' | 'large' | 'medium_text_14' | 'regular_link' | 'regular_text_14' | 'regular_text_16' | 'semi_bold_small_text' | 'small_link' | 'small_text';
interface TextOwnProps<E extends ElementType = ElementType> {
    as?: E;
    children?: ReactNode | string;
    className?: string;
    variant?: TypographyVariant;
}
type TextProps<E extends ElementType> = Omit<ComponentProps<E>, keyof TextOwnProps> & TextOwnProps<E>;
export declare const Typography: import("react").MemoExoticComponent<(<E extends ElementType = "div">({ as, children, className, variant, ...otherProps }: TextProps<E>) => import("react/jsx-runtime").JSX.Element)>;
export {};
