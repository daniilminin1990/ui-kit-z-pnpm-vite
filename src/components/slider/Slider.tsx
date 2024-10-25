import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as RadixSlider from '@radix-ui/react-slider'
import { clsx } from 'clsx'

import s from './Slider.module.scss'

import { Typography } from '../typography/Typography'

type SliderProps = {
  label?: string
  rangeClassName?: string
  rangeStyle?: CSSProperties
  sliderContainerClassName?: string
  sliderContainerStyle?: CSSProperties
  thumbClassName?: string
  thumbStyle?: CSSProperties
  trackClassName?: string
  trackStyle?: CSSProperties
  valueWrapperClassName?: CSSProperties
} & ComponentPropsWithoutRef<typeof RadixSlider.Root>

export const Slider = forwardRef<ElementRef<typeof RadixSlider.Root>, SliderProps>((props, ref) => {
  const {
    className,
    label,
    rangeClassName,
    rangeStyle,
    sliderContainerClassName,
    sliderContainerStyle,
    thumbClassName,
    thumbStyle,
    trackClassName,
    trackStyle,
    value,
    valueWrapperClassName,
    ...rest
  } = props

  const classNames = {
    range: clsx(s.range, rangeClassName),
    root: clsx(s.root, className),
    sliderContainer: clsx(s.sliderContainer, sliderContainerClassName),
    thumb: clsx(s.thumb, thumbClassName),
    track: clsx(s.track, trackClassName),
    valueWrapper: clsx(s.valueWrapper, valueWrapperClassName)
  }

  return (
    <>
      {label && <Typography as={'label'}>{label}</Typography>}
      <div className={classNames.sliderContainer}>
        <Typography as={'div'} className={classNames.valueWrapper}>
          {value?.[0]}
        </Typography>
        <RadixSlider.Root className={classNames.root} defaultValue={[value?.[0] ?? 0]} max={100} ref={ref} {...rest}>
          <RadixSlider.Track className={classNames.track}>
            <RadixSlider.Range className={classNames.range} />
          </RadixSlider.Track>
          <RadixSlider.Thumb aria-label={'valueMin'} className={classNames.thumb} />
          <RadixSlider.Thumb aria-label={'valueMax'} className={classNames.thumb} />
        </RadixSlider.Root>
        {value?.[1] && (
          <Typography as={'div'} className={classNames.valueWrapper}>
            {value?.[1]}
          </Typography>
        )}
      </div>
    </>
  )
})