/* eslint-env browser */

import React from 'react';
import Size, { toSize } from 'src/util/sizeConstants';

import { Button, Container, Text } from './styles';

interface Props {
  text?: string;
  color?: string;
  disabled?: boolean;
  inline?: boolean;
  name?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: string;
  textColor?: string;
  type: 'submit' | 'button';
}

export function Avatar(props: Props): JSX.Element {
  const size = toSize(props.size);
  return (
    <Container inline={props.inline}>
      <Button onClick={props.onClick} type={props.type}>
        <Text>{props.text || ' '}</Text>
      </Button>
    </Container>
  );
}

export default Avatar;
