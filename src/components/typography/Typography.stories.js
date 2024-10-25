import { Typography } from './Typography';
const meta = {
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: [
                'large',
                'h1',
                'h2',
                'h3',
                'regular_text_16',
                'bold_text_16',
                'regular_text_14',
                'medium_text_14',
                'bold_text_14',
                'small_text',
                'semi_bold_small_text',
                'regular_link',
                'small_link'
            ]
        }
    },
    component: Typography,
    tags: ['autodocs'],
    title: 'Components/Typography'
};
export default meta;
export const MyLarge = {
    args: {
        children: 'Card content',
        variant: 'large'
    }
};
export const MyH1 = {
    args: {
        children: 'Card content',
        variant: 'h1'
    }
};
export const MyH2 = {
    args: {
        children: 'Card content',
        variant: 'h2'
    }
};
export const MyH3 = {
    args: {
        children: 'Card content',
        variant: 'h3'
    }
};
export const RegularText16 = {
    args: {
        children: 'Card content',
        variant: 'regular_text_16'
    }
};
export const BoldText16 = {
    args: {
        children: 'Card content',
        variant: 'bold_text_16'
    }
};
export const RegularText14 = {
    args: {
        children: 'Card content',
        variant: 'regular_text_14'
    }
};
export const MediumText14 = {
    args: {
        children: 'Card content',
        variant: 'medium_text_14'
    }
};
export const BoldText14 = {
    args: {
        children: 'Card content',
        variant: 'bold_text_14'
    }
};
export const SmallText = {
    args: {
        children: 'Card content',
        variant: 'small_text'
    }
};
export const SemiBoldSmallText = {
    args: {
        children: 'Card content',
        variant: 'semi_bold_small_text'
    }
};
export const RegularLink = {
    args: {
        children: 'Card content',
        variant: 'regular_link'
    }
};
export const SmallLink = {
    args: {
        children: 'Card content',
        variant: 'small_link'
    }
};
