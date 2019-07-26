import React from 'react';
import styled from '@emotion/styled';

const background = (color = '#c7dfe0') => (story: Function) => {
  const Wrapper = styled('div')`
    background-color: ${color};
    width: 100%;
    height: 100%;
  `;
  return <Wrapper>{story()}</Wrapper>;
};

export default background;
