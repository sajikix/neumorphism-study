import React, { FC } from 'react';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';
import { InterpolationWithTheme } from '@emotion/core';

interface BoxProps {
  borderRadius?: string;
  backgroudColor?: string;
  shadowColor?: string;
  highlightColor?: string;
}

// TODO: 背景色やsizeとか高さでshadowを調整できるようにしたい
const Box = styled.div`
  /* form */
  height: 40vh;
  width: 40vh;
  border-radius: ${({ borderRadius }: BoxProps) => borderRadius || '10%'};
  /* color */
  background: #eef0f4;
  box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  borderRadius?: string;
  additionalCss?: InterpolationWithTheme<any>;
  backgroudColor?: string;
  shadowColor?: string;
  highlightColor?: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

export const BumpBox: FC<Props> = ({
  children,
  backgroudColor,
  shadowColor,
  highlightColor,
  borderRadius,
  additionalCss,
  onMouseOver,
  onMouseLeave,
}) => {
  return (
    <Box
      backgroudColor={backgroudColor}
      shadowColor={shadowColor}
      highlightColor={highlightColor}
      borderRadius={borderRadius}
      css={additionalCss}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Box>
  );
};
