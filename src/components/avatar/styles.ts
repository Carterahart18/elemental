import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Size from 'src/util/sizeConstants';

// TODO: Convert colors and fonts into imports
const sizeMap = {
  [Size.Small]: '25px',
  [Size.Medium]: '40px',
  [Size.Large]: '72px',
  [Size.Default]: '150px'
};

const sizeToBorderWidthMap = {
  [Size.Small]: '2px',
  [Size.Medium]: '3px',
  [Size.Large]: '4px',
  [Size.Default]: '5px'
};

interface Props {
  size: Size;
}

export const Container = styled('div')`
  position: relative;
  ${(props: Props) => css`
    width: ${sizeMap[props.size || Size.Default]};
    height: ${sizeMap[props.size || Size.Default]};
  `}
`;

export const HollowCircle = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${(props: Props) => css`
    border: ${sizeToBorderWidthMap[props.size || Size.Default]} solid white;
  `};
  overflow: hidden;
`;

export const Image = styled('img')`
  width: 100%;
  height: 100%;
`;

export const LetterContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: grey;
`;

export const Letter = styled('span')`
  color: white;
  font-size: 72px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

interface CircleProps {
  color: string;
}

export const Circle = styled('div')`
  ${({ color }: CircleProps) =>
    css`
      color: ${color};
    `}
`;

export const Text = styled('span')``;

export const BadgeContainer = styled('div')`
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 3px solid white;
  background-color: white;
`;
