import { css } from '@emotion/core';

const systemFonts =
  '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Hiragino Kaku Gothic Pro,Meiryo,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol';;

function defaultFontPartial(fontWeight?: number | string | undefined) {
  return function(fontSize) {
    return css`
      -moz-osx-font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
      font-family: ${systemFonts};
      font-weight: ${fontWeight};
      font-size: ${fontSize};
    `;
  };
}

export const defaultFont = defaultFontPartial(400);
export const defaultFontBold = defaultFontPartial('bold');
