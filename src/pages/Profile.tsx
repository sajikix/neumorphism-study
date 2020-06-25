import React, { useState } from 'react';
import * as emotion from '@emotion/core';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const BoxContainer = styled.div`
  height: 50vh;
  width: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BoxBump = styled.div`
  /* form */
  height: 40vh;
  width: 40vh;
  border-radius: 10%;
  /* color */
  background: #eef0f4;
  box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff;
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*  */
  /* padding: 5%; */
  /* for animation */
  position: absolute;
  transition: 0.5s;
  opacity: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 1 : 0};
  z-index: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 2 : 0};
`;

interface BoxDentProps {
  bgColor: string;
  state: TransitionStatus;
  shadowColor: string;
  highlightColor: string;
}
const BoxDent = styled.div`
  /* form */
  height: 40vh;
  width: 40vh;
  border-radius: 10%;
  /* color */
  background-color: ${({ bgColor }: BoxDentProps) => bgColor};
  box-shadow: ${({ shadowColor, highlightColor }: BoxDentProps) =>
    'inset 8px 8px 16px ' +
    shadowColor +
    ', inset -8px -8px 16px' +
    highlightColor};
  /* box-shadow: inset 8px 8px 16px #22664f, inset -8px -8px 16px #79e8c3; */
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*  */
  /* for animation */
  position: absolute;
  transition: 0.5s;
  opacity: ${({ state }: BoxDentProps) => (state === 'entered' ? 1 : 0)};
  z-index: ${({ state }: BoxDentProps) => (state === 'entered' ? 2 : 0)};
`;

interface ButtonProps {
  state: TransitionStatus;
  shadowColor: string;
  highlightColor: string;
}

const Button = styled.div`
  /* form */
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
  background: #eef0f4;
  /* color */
  box-shadow: ${({ shadowColor, highlightColor }: ButtonProps) =>
    '8px 8px 16px' + shadowColor + ',-8px -8px 16px' + highlightColor};
  /* box-shadow: 8px 8px 16px #22664f, -8px -8px 16px #79e8c3; */
  /* flex */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* for animation */
  position: absolute;
  transition: 0.5s;
  opacity: ${({ state }: ButtonProps) => (state === 'entered' ? 1 : 0)};
  z-index: ${({ state }: ButtonProps) => (state === 'entered' ? 2 : 0)};
`;

const BoxTitleArea = styled.div`
  /* flex */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const BoxContentArea = styled.div`
  /* flex */
  display: flex;
  flex: 2;
  flex-direction: row;
  width: 100%;
`;

const BoxTextContentArea = styled.div`
  /* flex */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 2vh;
  margin-top: 2vh;
  margin-bottom: 4vh;
`;
const BoxButtonContentArea = styled.div`
  /* flex */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 3vh; */
`;

const BoxTitleText = styled.div`
  font-size: 3rem;
  background: ${({ colors }: { colors: string[] }) =>
    'linear-gradient(to right,' + colors.join(', ') + ')'};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const BoxContentText = styled.div`
  font-size: 1.2rem;
  background: ${({ colors }: { colors: string[] }) =>
    'linear-gradient(to right,' + colors.join(', ') + ')'};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* margin-left: 2vh; */
`;

interface Props {}

export const Profile = (props: Props) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [leaved1, setLeaved1] = useState(false);
  const [leaved2, setLeaved2] = useState(false);

  return (
    <Container>
      <BoxContainer>
        <Transition
          in={!hovered1}
          timeout={100}
          onExited={() => setLeaved1(true)}
        >
          {(state) => {
            return (
              <BoxBump
                onMouseOver={() => {
                  setHovered1(true);
                }}
                state={state}
              >
                <BoxTitleArea>
                  <BoxTitleText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                    {'Scrapbox'}
                  </BoxTitleText>
                </BoxTitleArea>
                <BoxContentArea>
                  <BoxTextContentArea></BoxTextContentArea>
                  <BoxButtonContentArea></BoxButtonContentArea>
                </BoxContentArea>
              </BoxBump>
            );
          }}
        </Transition>
        <Transition
          in={leaved1}
          timeout={100}
          onExited={() => setHovered1(false)}
        >
          {(state) => {
            return (
              <BoxDent
                shadowColor={'#22664f'}
                highlightColor={'#79e8c3'}
                bgColor={'#39ac86'}
                state={state}
                onMouseLeave={() => {
                  setLeaved1(false);
                }}
              >
                <BoxTitleArea>
                  <BoxTitleText colors={['#d9dade', '#eef0f4', '#ffffff']}>
                    {'Scrapbox'}
                  </BoxTitleText>
                </BoxTitleArea>
                <BoxContentArea>
                  <BoxTextContentArea>
                    <BoxContentText colors={['#d9dade', '#eef0f4', '#ffffff']}>
                      {'#ブログ'}
                    </BoxContentText>
                    <BoxContentText colors={['#d9dade', '#eef0f4', '#ffffff']}>
                      {'#研究'}
                    </BoxContentText>
                    <BoxContentText colors={['#d9dade', '#eef0f4', '#ffffff']}>
                      {'#その他メモ'}
                    </BoxContentText>
                  </BoxTextContentArea>
                  <BoxButtonContentArea>
                    <Button
                      shadowColor={'#22664f'}
                      highlightColor={'#79e8c3'}
                      state={state}
                    >
                      <BoxTitleText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                        {'→'}
                      </BoxTitleText>
                    </Button>
                  </BoxButtonContentArea>
                </BoxContentArea>
              </BoxDent>
            );
          }}
        </Transition>
      </BoxContainer>
      <BoxContainer>
        <Transition
          in={!hovered2}
          timeout={100}
          onExited={() => setLeaved2(true)}
        >
          {(state) => {
            return (
              <BoxBump
                onMouseOver={() => {
                  setHovered2(true);
                }}
                state={state}
              >
                <BoxTitleArea>
                  <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                    {'Twitter'}
                  </BoxTitleText>
                </BoxTitleArea>
                <BoxContentArea>
                  <BoxTextContentArea></BoxTextContentArea>
                  <BoxButtonContentArea></BoxButtonContentArea>
                </BoxContentArea>
              </BoxBump>
            );
          }}
        </Transition>
        <Transition
          in={leaved2}
          timeout={100}
          onExited={() => setHovered2(false)}
        >
          {(state) => {
            return (
              <BoxDent
                bgColor={'#1DA1F2'}
                highlightColor={'#54bdff'}
                shadowColor={'#115d8c'}
                state={state}
                onMouseLeave={() => {
                  setLeaved2(false);
                }}
              >
                <BoxTitleArea>
                  <BoxTitleText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                    {'Twitter'}
                  </BoxTitleText>
                </BoxTitleArea>
                <BoxContentArea>
                  <BoxTextContentArea>
                    <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                      {'#ポエム'}
                    </BoxContentText>
                    <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                      {'#情報収集'}
                    </BoxContentText>
                    <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                      {'#勉強会'}
                    </BoxContentText>
                  </BoxTextContentArea>
                  <BoxButtonContentArea>
                    <Button
                      highlightColor={'#54bdff'}
                      shadowColor={'#115d8c'}
                      state={state}
                    >
                      <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                        {'→'}
                      </BoxTitleText>
                    </Button>
                  </BoxButtonContentArea>
                </BoxContentArea>
              </BoxDent>
            );
          }}
        </Transition>
      </BoxContainer>
    </Container>
  );
};
