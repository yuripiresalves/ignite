import type { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      descripton: {
        story:
          'Por padrão, o componente Heading renderiza um elemento `h2`. Você pode alterar isso usando a prop `as`.',
      },
    },
  },
};
