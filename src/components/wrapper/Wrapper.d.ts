import React from 'react';
interface WrapperProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'box' | 'boxContent' | 'navBar' | 'withoutStyles';
}
export declare const Wrapper: (props: WrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
