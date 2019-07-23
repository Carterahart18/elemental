/* eslint-env browser */

import React from 'react';

import { Container, HollowCircle, Image } from './styles';

import profilePic from 'src/assets/profile-pic.png';

interface Props {
  name: string;
  icon: string;
  outline: boolean;
  size: string;
  src: string;
  verified: string;
}

export function Avatar(props: Props): JSX.Element {
  return (
    <Container>
      <HollowCircle>
        <Image src={profilePic} alt={''}/>
      </HollowCircle>
    </Container>
  );
}

export default Avatar;
