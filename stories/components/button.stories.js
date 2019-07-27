import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, radios } from '@storybook/addon-knobs';
import backdrop from 'stories/decorators/backdrop';

import Button from 'src/components/button';

storiesOf('Components', module)
  .addDecorator(backdrop('auto', 'auto'))
  .add('Button', () => {
    const color = text('Color', '');
    const disabled = boolean('Disabled', false);
    const inline = boolean('Inline', false);
    const name = text('Name', '');
    const onClick = action('Foo');
    const size = radios(
      'Size',
      { Default: '', Small: 'sm', Medium: 'md', Large: 'lg' },
      ''
    );
    const textVal = text('Text', 'Click Me');
    const textColor = text('Text Color', '');
    const type = radios(
      'Type',
      { Default: '', Small: 'sm', Medium: 'md', Large: 'lg' },
      'button'
    );

    return (
      <Button
        color={color}
        disabled={disabled}
        inline={inline}
        name={name}
        onClick={onClick}
        size={size}
        text={textVal}
        textColor={textColor}
        type={type}
      />
    );
  });
