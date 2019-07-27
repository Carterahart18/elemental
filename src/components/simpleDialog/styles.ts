import styled from '@emotion/styled';
import { mineShaftBlack, white } from 'src/emotion/colors';
import { defaultFont } from 'src/emotion/fonts';

export const Dialog = styled('div')`
  width: 320px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${mineShaftBlack};
  ${defaultFont('16px')}
`;

export const ButtonRow = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
`;

export const Text = styled('div')`
  border-radius: 5px;
  margin-bottom: 15px;
  color: ${white};
  letter-spacing: -0.4px;
  ${defaultFont('16px')}
`;
export const ButtonContainer = styled('div')`
  width: 100%;
  margin-right: 15px;
  :last-child {
    margin-right: 0;
  }
`;
