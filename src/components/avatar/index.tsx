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
  const { name, outline } = props;
  const letter = name ? name.charAt(0).toUpperCase() : 'X';
  const size: Size = toSize(props.size);
  return (
    <Container size={size} outline={outline}>
      <HollowCircle size={size} outline={outline}>
        {props.src ? (
          <Image src={props.src} alt={name} />
        ) : (
          <LetterContainer>
            <Letter>{letter}</Letter>
          </LetterContainer>
        )}
      </HollowCircle>
      {props.verified && (
        <BadgeContainer size={size} outline={outline}>
          <Verified />
        </BadgeContainer>
      )}
    </Container>
  );
}

export default Avatar;
