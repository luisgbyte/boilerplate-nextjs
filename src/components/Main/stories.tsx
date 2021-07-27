import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

import { Story, Meta } from '@storybook/react';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'Typescript, ReactJS, NextJS e Styled Components'
    )}
  />
);
