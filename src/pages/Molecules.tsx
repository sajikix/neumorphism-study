import React, { FC } from 'react';
import styled from '@emotion/styled';
import { BumpBox, DentBox } from '../atoms';
import { HoverDentBox, HoverBumpBox } from '../molecules';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

interface Props {}

export const Molecules: FC<Props> = () => {
  return (
    <Container>
      <HoverDentBox
        dentShadowColor={'#22664f'}
        dentHighlightColor={'#79e8c3'}
        dentBackgroudColor={'#39ac86'}
      />
      <HoverBumpBox
        dentShadowColor={'#22664f'}
        dentHighlightColor={'#79e8c3'}
        dentBackgroudColor={'#39ac86'}
      />
    </Container>
  );
};
