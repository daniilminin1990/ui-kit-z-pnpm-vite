import { ModalProps } from './Modal';
import { Meta, StoryFn } from '@storybook/react';
interface CustomArgs {
    footer?: string;
}
type StoryProps = CustomArgs & ModalProps;
declare const meta: Meta<StoryProps>;
export default meta;
declare const ToggleModal: StoryFn<StoryProps>;
export { ToggleModal };
