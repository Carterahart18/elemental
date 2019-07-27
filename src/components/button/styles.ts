import React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { css } from '@emotion/core';

import {
  altoGray2,
  buttonOutlineBlue,
  galleryWhite,
  mineShaftBlack,
  mercuryWhite,
  silverChaliceGray
} from 'src/emotion/colors';
import { defaultFontBold } from 'src/emotion/fonts';

import Size from 'src/util/sizeConstants';

const sizeMap = {
  [Size.Small]: 25,
  [Size.Medium]: 40,
  [Size.Large]: 72,
  [Size.Default]: 150
};

interface ContainerProps {
  inline: boolean | undefined;
}

export const Container = styled('div')`
  ${({ inline }: ContainerProps) =>
    css`
      display: ${inline ? 'inline-block' : 'block'};
    `};
`;

// interface ButtonProps {
// inline?: boolean | undefined;
// }
// export const Button: StyledComponent<
//   ButtonProps,
//   React.HTMLProps<HTMLButtonElement>,
//   {}
// >

export const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  border-color: ${galleryWhite};
  padding: 10px 14px;
  background-color: ${galleryWhite};
  cursor: pointer;

  :hover {
    border-color: ${mercuryWhite};
    background-color: ${mercuryWhite};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 4px ${buttonOutlineBlue};
  }

  :active {
    border-color: ${altoGray2};
    background-color: ${altoGray2};
  }
`;

export const Text = styled('div')`
  text-align: center;
  min-height: 20px;
  color: ${mineShaftBlack};
  ${defaultFontBold('16px')}
  user-select: none;
`;
