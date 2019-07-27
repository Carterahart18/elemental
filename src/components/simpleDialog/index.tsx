/* eslint-env browser */

import React from 'react';
import Size, { toSize } from 'src/util/sizeConstants';
import Button from 'src/components/button';

import { Dialog, ButtonRow, ButtonContainer, Text } from './styles';

interface Props {
  confirmText: string;
  confirmOnClick: () => void;
  description: string;
  dismissText: string;
  dismissOnClick: () => void;
}

export function Avatar(props: Props): JSX.Element {
  return (
    <Dialog>
      <Text>{props.description}</Text>
      <ButtonRow>
        <ButtonContainer>
          <Button
            text={props.dismissText}
            onClick={() => props.dismissOnClick()}
          />
        </ButtonContainer>
        <ButtonContainer>
        <Button
          text={props.confirmText}
          onClick={() => props.confirmOnClick()}
        />
        </ButtonContainer>
      </ButtonRow>
    </Dialog>
  );
}

export default Avatar;
