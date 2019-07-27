import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Size from 'src/util/sizeConstants';

// TODO: Convert colors and fonts into imports
const sizeMap = {
  [Size.Small]: 25,
  [Size.Medium]: 40,
  [Size.Large]: 72,
  [Size.Default]: 150
};

const strokeMap = {
  [Size.Small]: 2,
  [Size.Medium]: 3,
  [Size.Large]: 4,
  [Size.Default]: 5
};

interface Props {
  size?: Size;
  outline?: boolean;
}

export const Container = styled('div')`
  position: relative;
  ${(props: Props) => {
    const size = props.size || Size.Default;
    return css`
      width: ${sizeMap[size] - 0}px;
      height: ${sizeMap[size] - 0}px;
    `;
  }}
`;

export const HollowCircle = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  ${(props: Props) => {
    if (props.outline) {
      const stroke = strokeMap[props.size || Size.Default];
      return css`
        box-shadow: 0 0 0 ${stroke}px white;
      `;
    }
    return css``;
  }};
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

export const BadgeContainer = styled('div')`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  background-color: white;
  ${(props: Props) => {
    const badgeStrokeMap = {
      [Size.Small]: '1px',
      [Size.Medium]: '1px',
      [Size.Large]: '2px',
      [Size.Default]: '3px'
    };
    return css`
      border: ${badgeStrokeMap[props.size || Size.Default]} solid white;
    `;
  }};
`;
