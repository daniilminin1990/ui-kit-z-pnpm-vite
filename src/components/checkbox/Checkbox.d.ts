import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
export type CheckboxPropsProps = {
    error?: string | undefined;
    label?: ReactNode;
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>;
export declare const Checkbox: React.ForwardRefExoticComponent<{
    error?: string | undefined;
    label?: ReactNode;
} & Omit<CheckboxRadix.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
