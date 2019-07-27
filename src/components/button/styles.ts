import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  altoGray2,
  buttonOutlineBlue,
  galleryWhite,
  mineShaftBlack,
  monzaRed,
  mercuryWhite,
  white
} from 'src/emotion/colors';
import { defaultFontBold } from 'src/emotion/fonts';
import Size from 'src/util/sizeConstants';

const colorMap = {
  blue: {
    active: '',
    hover: '',
    primary: ''
  },
  gray: {
    active: altoGray2,
    hover: mercuryWhite,
    primary: galleryWhite
  },
  red: {
    active: '',
    hover: '',
    primary: monzaRed
  },
  transparent: {
    active: 'transparent',
    hover: 'transparent',
    primary: 'transparent'
  },
  white: {
    active: mercuryWhite,
    hover: galleryWhite,
    primary: white
  }
};

const textColorMap = {
  blue: '',
  red: monzaRed,
  darkGray: mineShaftBlack,
  white: white
};

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

interface ButtonProps {
  color: string;
  textColor: string;
}

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
  padding: 10px 14px;
  cursor: pointer;

  ${(props: ButtonProps) => {
    const isTransparent = props.color === 'transparent';
    return css`
      border-color: ${isTransparent
        ? textColorMap[props.textColor]
        : colorMap[props.color].primary};
      background-color: ${colorMap[props.color].primary};

      :hover {
        border-color: ${isTransparent
          ? textColorMap[props.textColor]
          : colorMap[props.color].hover};
        background-color: ${colorMap[props.color].hover};
      }

      :focus {
        outline: 0;
        box-shadow: 0 0 0 4px ${buttonOutlineBlue};
      }

      :active {
        border-color: ${isTransparent
          ? textColorMap[props.textColor]
          : colorMap[props.color].active};
        background-color: ${colorMap[props.color].active};
      }
    `;
  }};
`;

interface TextProps {
  textColor: string;
}
export const Text = styled('div')`
  text-align: center;
  min-height: 20px;
  color: ${(props: TextProps) => textColorMap[props.textColor]};
  ${defaultFontBold('16px')}
  user-select: none;
`;
