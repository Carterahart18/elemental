/* eslint-env browser */

import React from 'react';
import { toSize } from 'src/util/sizeConstants';

import { Button, Container, Text } from './styles';

interface Props {
  text?: string;
  color?: string;
  disabled?: boolean;
  inline?: boolean;
  name?: string;
  onClick: () => void;
  size?: string;
  textColor?: string;
  type?: 'submit' | 'button';
}

export function Avatar({
  inline = false,
  onClick,
  size: sizeProp,
  text = '',
  type = 'button'
}: Props): JSX.Element {
  const size = toSize(sizeProp);
  return (
    <Container inline={inline}>
      <Button onClick={() => onClick()} type={type || 'button'}>
        <Text>{text || ' '}</Text>
      </Button>
    </Container>
  );
}

export default Avatar;
