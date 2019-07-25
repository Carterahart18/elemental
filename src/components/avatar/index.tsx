/* eslint-env browser */

import React from 'react';

import {
  Container,
  HollowCircle,
  Image,
  LetterContainer,
  Letter
} from './styles';

interface Props {
  name: string;
  icon: string;
  outline: boolean;
  size: string;
  src: string;
  verified: string;
}

export function Avatar(props: Props): JSX.Element {
  const letter = props.name ? props.name.charAt(0).toUpperCase() : 'X';

  return (
    <Container>
      <HollowCircle>
        {props.src ? (
          <Image src={props.src} alt={props.name} />
        ) : (
          <LetterContainer>
            <Letter>{letter}</Letter>
          </LetterContainer>
        )}
      </HollowCircle>
    </Container>
  );
}

export default Avatar;
