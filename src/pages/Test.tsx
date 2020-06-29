import React, { useState } from 'react';
import * as emotion from '@emotion/core';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';
import { HoverBumpToDentBox, HoverBumpBox } from '../molecules';
import { BumpBox, DentBox } from '../atoms';

const Container = styled.div`
  background-color: #eef0f4;
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  height: 12vh;
  width: 12vh;
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
  margin-left: 6vh;
  margin-top: 4vh;
  margin-bottom: 4vh;
`;

const BoxIconContentArea = styled.div`
  /* flex */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BoxButtonContentArea = styled.div`
  /* flex */
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 6vh;
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

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12vh;
  height: 12vh;
  /* box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff; */
  border-radius: 50%;
`;

const Icon2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12vh;
  height: 12vh;
  /* box-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #d9dade,
    inset -2px -2px 4px #d9dade, inset 2px 2px 4px #ffffff; */
  box-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #d9dade;
  border-radius: 50%;
  border-width: 1px;
  border-color: #eef0f4;
  border-style: solid;
`;
const Icon3 = styled.div`
  background-color: #eef0f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12vh;
  height: 12vh;
  box-shadow: 8px 8px 16px #22664f, -8px -8px 16px #79e8c3,
    inset 2px 2px 4px #ffffff, inset -2px -2px 4px #d9dade;
  border-radius: 50%;
`;

const IconButton = styled.div`
  background-color: #eef0f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12vh;
  height: 12vh;
  box-shadow: ${({ clicked }: { clicked: boolean }) =>
    clicked
      ? 'inset -4px -4px 8px #ffffff, inset 4px 4px 8px #d9dade'
      : '4px 4px 8px #d9dade, -4px -4px 8px #ffffff'};
  border-radius: 50%;
`;

const IconImage = styled.img`
  margin-bottom: ${({ clicked }: { clicked?: boolean }) =>
    clicked === false ? '5px' : '0px'};
  max-width: 8vh;
  max-height: 8vh;
`;

interface Props {}

export const Profile = (props: Props) => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [leaved1, setLeaved1] = useState(false);
  const [leaved2, setLeaved2] = useState(false);
  const [leaved3, setLeaved3] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      {/* row1 */}
      {/* scrapbox */}
      <HoverBumpToDentBox
        dentShadowColor={'#22664f'}
        dentHighlightColor={'#79e8c3'}
        dentBackgroudColor={'#39ac86'}
        dentBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                {'Scrapbox'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・ブログ'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・研究'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・その他メモ'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  shadowColor={'#22664f'}
                  highlightColor={'#79e8c3'}
                >
                  <BoxTitleText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                    {'→'}
                  </BoxTitleText>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
        bumpBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                {'Scrapbox'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・ブログ'}
                </BoxContentText>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・研究'}
                </BoxContentText>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・その他メモ'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  depth={4}
                >
                  <Icon>
                    <IconImage src={'./images/scrapbox.png'}></IconImage>
                  </Icon>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
      />
      {/* twitter */}
      <HoverBumpToDentBox
        dentBackgroudColor={'#1DA1F2'}
        dentHighlightColor={'#54bdff'}
        dentShadowColor={'#115d8c'}
        dentBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                {'Twitter'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'# ポエム'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'# 情報収集'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'# 勉強会'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  highlightColor={'#54bdff'}
                  shadowColor={'#115d8c'}
                >
                  <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                    {'→'}
                  </BoxTitleText>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
        bumpBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                {'Twitter'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                  {'# ポエム'}
                </BoxContentText>
                <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                  {'# 情報収集'}
                </BoxContentText>
                <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                  {'# 勉強会'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  depth={4}
                >
                  <Icon>
                    <IconImage src={'./images/twitter.png'}></IconImage>
                  </Icon>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
      />
      {/* github */}
      <HoverBumpToDentBox
        dentBackgroudColor={'#49525c'}
        dentHighlightColor={'#778899'}
        dentShadowColor={'#24292e'}
        dentBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                {'Github'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'> 研究'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'> OSS'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'> 趣味'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  highlightColor={'#778899'}
                  shadowColor={'#24292e'}
                >
                  <BoxTitleText colors={['#6d7a8a', '#49525c', '#24292e']}>
                    {'→'}
                  </BoxTitleText>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
        bumpBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#6d7a8a', '#49525c', '#24292e']}>
                {'Github'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#6d7a8a', '#49525c', '#24292e']}>
                  {'> 研究'}
                </BoxContentText>
                <BoxContentText colors={['#6d7a8a', '#49525c', '#24292e']}>
                  {'> OSS'}
                </BoxContentText>
                <BoxContentText colors={['#6d7a8a', '#49525c', '#24292e']}>
                  {'> 趣味'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  depth={4}
                >
                  <Icon>
                    <IconImage src={'./images/github.png'}></IconImage>
                  </Icon>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
      />
      {/* row:2 */}
      {/* Scrapbox */}
      <HoverBumpToDentBox
        dentShadowColor={'#22664f'}
        dentHighlightColor={'#79e8c3'}
        dentBackgroudColor={'#39ac86'}
        bumpBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                {'Scrapbox'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・ブログ'}
                </BoxContentText>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・研究'}
                </BoxContentText>
                <BoxContentText colors={['#5ca77c', '#39ac86', '#1c605e']}>
                  {'・その他メモ'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <DentBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  rounded
                  depth={2}
                >
                  <IconImage src={'./images/scrapbox.png'}></IconImage>
                </DentBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
        dentBoxRender={() => (
          <>
            <BoxTitleArea>
              <BoxTitleText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                {'Scrapbox'}
              </BoxTitleText>
            </BoxTitleArea>
            <BoxContentArea>
              <BoxTextContentArea>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・ブログ'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・研究'}
                </BoxContentText>
                <BoxContentText colors={['#eef0f4', '#eef0f4', '#eef0f4']}>
                  {'・その他メモ'}
                </BoxContentText>
              </BoxTextContentArea>
              <BoxButtonContentArea>
                <BumpBox
                  height={'12vh'}
                  width={'12vh'}
                  borderRadius={'50%'}
                  shadowColor={'#22664f'}
                  highlightColor={'#79e8c3'}
                >
                  <IconImage src={'./images/scrapbox.png'}></IconImage>
                </BumpBox>
              </BoxButtonContentArea>
            </BoxContentArea>
          </>
        )}
      />
      <BumpBox>
        <BoxTitleArea>
          <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
            {'Twitter'}
          </BoxTitleText>
        </BoxTitleArea>
        <BoxContentArea>
          <BoxTextContentArea>
            <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
              {'# ポエム'}
            </BoxContentText>
            <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
              {'# 情報収集'}
            </BoxContentText>
            <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
              {'# 勉強会'}
            </BoxContentText>
          </BoxTextContentArea>
          <BoxButtonContentArea>
            <HoverBumpBox
              width={'12vh'}
              height={'12vh'}
              bumpDepth={4}
              borderRadius={'50%'}
            >
              <IconImage
                clicked={clicked}
                src={'./images/twitter.png'}
              ></IconImage>
            </HoverBumpBox>
          </BoxButtonContentArea>
        </BoxContentArea>
      </BumpBox>
      <BoxContainer>
        <BoxBump state={'entered'}>
          <BoxTitleArea>
            <BoxTitleText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
              {'Twitter'}
            </BoxTitleText>
          </BoxTitleArea>
          <BoxContentArea>
            <BoxTextContentArea>
              <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                {'# ポエム'}
              </BoxContentText>
              <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                {'# 情報収集'}
              </BoxContentText>
              <BoxContentText colors={['#54beff', '#1DA1F2', '#0d8ddb']}>
                {'# 勉強会'}
              </BoxContentText>
            </BoxTextContentArea>
            <BoxButtonContentArea>
              <BoxIconContentArea>
                <IconButton
                  onMouseDown={() => setClicked(true)}
                  onMouseUp={() => setClicked(false)}
                  onMouseLeave={() => setClicked(false)}
                  clicked={clicked}
                >
                  <IconImage
                    clicked={clicked}
                    src={'./images/twitter.png'}
                  ></IconImage>
                </IconButton>
              </BoxIconContentArea>
            </BoxButtonContentArea>
          </BoxContentArea>
        </BoxBump>
      </BoxContainer>
    </Container>
  );
};
