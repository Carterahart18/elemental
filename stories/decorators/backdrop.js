import React from 'react';
import styled from '@emotion/styled';
import { alabasterWhite, altoGray } from 'src/emotion/colors';

const backdrop = (
  width = 'auto',
  height = 'auto',
  primaryColor = altoGray,
  secondaryColor = alabasterWhite
) => story => {
  const Container = styled('div')`
    display: flex;
    width: ${width};
    height: ${height};
    border-radius: 5px;
    background-color: ${secondaryColor};
    resize: both;
    overflow: hidden;
  `;
  const CheckcardBoard = styled('div')`
    background-image: linear-gradient(
        45deg,
        ${primaryColor} 25%,
        transparent 25%
      ),
      linear-gradient(-45deg, ${primaryColor} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${primaryColor} 75%),
      linear-gradient(-45deg, transparent 75%, ${primaryColor} 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    padding: 15px;
    width: 100%;
    min-height: 100%;
    border-radius: 5px;
  `;
  return (
    <Container>
      <CheckcardBoard>{story()}</CheckcardBoard>
    </Container>
  );
};

export default backdrop;
