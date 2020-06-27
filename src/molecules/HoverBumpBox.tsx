import React, { useState, FC, ReactElement } from 'react';
import * as emotion from '@emotion/core';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';

const Container = styled.div`
  /* form */
  height: 40vh;
  width: 40vh;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  dentBackgroudColor?: string;
  dentShadowColor?: string;
  dentHighlightColor?: string;
  bumpBackgroudColor?: string;
  bumpShadowColor?: string;
  bumpHighlightColor?: string;
  dentBoxChildren?: ReactElement;
  bumpBoxChildren?: ReactElement;
}

export const HoverBumpBox: FC<Props> = ({
  dentBackgroudColor,
  dentShadowColor,
  dentHighlightColor,
  bumpBackgroudColor,
  bumpShadowColor,
  bumpHighlightColor,
  bumpBoxChildren,
  dentBoxChildren,
}) => {
  const [hovered, setHovered] = useState(false);
  const [leaved, setLeaved] = useState(false);
  return (
    <Container>
      <Transition in={!hovered} timeout={100} onExited={() => setLeaved(true)}>
        {(state) => {
          console.log('bump', state);
          return (
            <DentBox
              additionalCss={{
                position: 'absolute',
                transition: '0.5s',
                opacity: state === 'entered' ? 1 : 0,
                zIndex: state === 'entered' ? 2 : 1,
              }}
              onMouseOver={() => {
                setHovered(true);
              }}
              backgroudColor={dentBackgroudColor}
              shadowColor={dentShadowColor}
              highlightColor={dentHighlightColor}
            >
              {dentBoxChildren}
            </DentBox>
          );
        }}
      </Transition>
      <Transition in={leaved} timeout={100} onExited={() => setHovered(false)}>
        {(state) => {
          console.log('dent', state);
          return (
            <BumpBox
              additionalCss={{
                position: 'absolute',
                transition: '0.5s',
                opacity: state === 'entered' ? 1 : 0,
                zIndex: state === 'entered' ? 2 : 1,
              }}
              onMouseLeave={() => {
                setLeaved(false);
              }}
              backgroudColor={bumpBackgroudColor}
              shadowColor={bumpShadowColor}
              highlightColor={bumpHighlightColor}
            >
              {bumpBoxChildren}
            </BumpBox>
          );
        }}
      </Transition>
    </Container>
  );
};
