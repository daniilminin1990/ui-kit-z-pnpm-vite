import { CSSProperties } from 'react';
import * as RadixSlider from '@radix-ui/react-slider';
export declare const Slider: import("react").ForwardRefExoticComponent<{
    label?: string;
    rangeClassName?: string;
    rangeStyle?: CSSProperties;
    sliderContainerClassName?: string;
    sliderContainerStyle?: CSSProperties;
    thumbClassName?: string;
    thumbStyle?: CSSProperties;
    trackClassName?: string;
    trackStyle?: CSSProperties;
    valueWrapperClassName?: CSSProperties;
} & Omit<RadixSlider.SliderProps & import("react").RefAttributes<HTMLSpanElement>, "ref"> & import("react").RefAttributes<HTMLSpanElement>>;
