import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// TODO: Convert colors and fonts into imports

export const Container = styled('div')`
  position: relative;
  width: 150px;
  height: 150px;
`;

export const HollowCircle = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
