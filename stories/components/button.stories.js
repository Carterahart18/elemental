import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, radios } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import backdrop from 'stories/decorators/backdrop';

import Button from 'src/components/button';

storiesOf('Components', module)
  .addDecorator(backdrop('auto', 'auto'))
  .add('Button', () => {
    const defaultProps = {
      color: text('Color', ''),
      disabled: boolean('Disabled', false),
      inline: boolean('Inline', false),
      name: text('Name', ''),
      onClick: action('Foo'),
      size: radios(
        'Size',
        { Default: '', Small: 'sm', Medium: 'md', Large: 'lg' },
        ''
      ),
      text: text('Text', 'Click Me'),
      textColor: text('Text Color', ''),
      type: radios(
        'Type',
        { Default: '', Small: 'sm', Medium: 'md', Large: 'lg' },
        'button'
      )
    };

    const Container = styled('div')`
      margin: 15px 0;
    `;

    return (
      <div>
        <Container>
          <Button {...defaultProps} color={'white'} />
        </Container>
        <Container>
          <Button {...defaultProps} />
        </Container>
        <Container>
          <Button {...defaultProps} color={'red'} textColor={'white'} />
        </Container>
        <Container>
          <Button {...defaultProps} color={'blue'} textColor={'white'} />
        </Container>
        <Container>
          <Button
            {...defaultProps}
            color={'transparent'}
            textColor={'darkGray'}
          />
        </Container>

        <Container>
          <Button
            {...defaultProps}
            color={'blue'}
            inline
            text={'Inline Button'}
            textColor={'white'}
          />
        </Container>
      </div>
    );
  });
