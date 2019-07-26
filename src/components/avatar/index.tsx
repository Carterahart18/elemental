/* eslint-env browser */

import React from 'react';
import Size, { toSize } from 'src/util/sizeConstants';

import Verified from 'src/assets/verified.svg';

import {
  BadgeContainer,
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
  const size: Size = toSize(props.size);
  return (
    <Container size={size}>
      <HollowCircle size={size}>
        {props.src ? (
          <Image src={props.src} alt={props.name} />
        ) : (
          <LetterContainer>
            <Letter>{letter}</Letter>
          </LetterContainer>
        )}
      </HollowCircle>
      {props.verified && (
        <BadgeContainer>
          <Verified />
        </BadgeContainer>
      )}
    </Container>
  );
}

export default Avatar;
