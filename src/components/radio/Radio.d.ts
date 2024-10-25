import { ComponentPropsWithoutRef } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
export type RadioRootProps = ComponentPropsWithoutRef<typeof RadioGroup.Root>;
export declare const Root: import("react").ForwardRefExoticComponent<Omit<RadioGroup.RadioGroupProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export type RadioItemProps = ComponentPropsWithoutRef<typeof RadioGroup.Item>;
export declare const Item: import("react").ForwardRefExoticComponent<Omit<RadioGroup.RadioGroupItemProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export declare const Radio: {
    Item: import("react").ForwardRefExoticComponent<Omit<RadioGroup.RadioGroupItemProps & import("react").RefAttributes<HTMLButtonElement>, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
    Root: import("react").ForwardRefExoticComponent<Omit<RadioGroup.RadioGroupProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
};
