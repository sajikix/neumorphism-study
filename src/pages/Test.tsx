import React, { useState } from 'react';
import * as emotion from '@emotion/core';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import styled from '@emotion/styled';

const { css } = emotion;

const scrapboxMainColor = '#5ca77c';
const scrapboxShadowColor = '#37634a'; // x0.6
const scrapboxShadowColorConvex = '#7d7d80';

const twitterMainColor = '#1DA1F2';
const twitterShadowColor = '#116091'; // x0.6

const styles = {
  container: css({
    backgroundColor: '#EEF0F4',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  }),
  box: css({
    background: '#eef0f4',
    height: 300,
    width: 300,
    borderRadius: '10%',
    boxShadow: '8px 8px 16px #D9DADE, -8px -8px 16px #FFFFFF',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
  }),
  linkBox: css({
    background: '#eef0f4',
    height: 40,
    width: 100,
    borderRadius: 20,
    boxShadow:
      '8px 8px 16px #22664f, -8px -8px 16px #79e8c3,2px 2px 4px #D9DADE, -2px -2px 4px #FFFFFF',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  dentTextS: css({
    // shadow color: '#38664c',
    // text color: '#5ca77c',
    textShadow: `0.5px 0.5px 1px ${scrapboxMainColor},-1.5px -1.5px 3px ${scrapboxShadowColor},-1.5px 0px 3px ${scrapboxShadowColor},0px -1.5px 3px ${scrapboxShadowColor},1.5px 1.5px 3px #ffffff,1.5px 0px 3px #ffffff,0px 1.5px 3px #ffffff;`,
    fontSize: 60,
    color: 'transparent',
  }),
  textS: css({
    fontSize: 60,
    color: '#5ca77c',
  }),
  dentTextT: css({
    // shadow color: '#115d8c',
    // text color: '#1DA1F2',
    textShadow: `0.5px 0.5px 1px ${twitterMainColor},-1.5px -1.5px 2px ${twitterShadowColor},-1.5px 0px 2px ${twitterShadowColor},0px -1.5px 2px ${twitterShadowColor},1.5px 1.5px 2px #ffffff,1.5px 0px 3px #ffffff,0px 1.5px 3px #ffffff;`,
    fontSize: 60,
    color: 'transparent',
    letterSpacing: 1,
  }),
  convexTextS: css({
    // shadow color: '#38664c',
    // text color: '#5ca77c',
    textShadow: `0.5px 0.5px 1px ${scrapboxMainColor},-3px -3px 3px #ffffff,-1px 0px 3px #ffffff,0px -1px 3px #ffffff,3px 3px 3px ${scrapboxShadowColorConvex},1px 0px 3px ${scrapboxShadowColorConvex},0px 1px 3px ${scrapboxShadowColorConvex}`,
    fontSize: 60,
    color: 'transparent',
  }),
  gradientTextS: css`
    font-size: 60px;
    background: linear-gradient(to right, #5ca77c, #39ac86, #1c605e);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `,
  gradientText: css`
    font-size: 20px;
    background: linear-gradient(to right, #5ca77c, #39ac86, #1c605e);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 16px;
    margin-left: 16px;
  `,
  gradientTextSHovered: css`
    font-size: 60px;
    background: linear-gradient(to right, #ffffff, #eef0f4, #d9dade);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `,
  hoveredBox: css`
    background: #39ac86;
    height: 300px;
    width: 300px;
    border-radius: 10%;
    box-shadow: inset 8px 8px 16px #22664f, inset -8px -8px 16px #79e8c3;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `,
  linkButtonContainer: css({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  }),
  linkButtonText: css`
    font-size: 32px;
    background: linear-gradient(to right, #5ca77c, #39ac86, #1c605e);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  `,

  titleContainer: css({
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  boxCotainer: css({
    height: 300,
    width: 300,
  }),
  boxWrapper: css({
    top: 0,
    right: 0,
  }),
};

export const ConvexBox = styled.div`
  position: absolute;
  transition: 0.5s;
  background: #eef0f4;
  height: 300px;
  width: 300px;
  border-radius: 10%;
  opacity: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 1 : 0};
  /* box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff; */
  box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 2 : 0};
`;

export const DentBox = styled.div`
  position: absolute;
  background: #39ac86;
  height: 300px;
  width: 300px;
  border-radius: 10%;
  box-shadow: inset 8px 8px 16px #22664f, inset -8px -8px 16px #79e8c3;
  padding: 24px;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  align-items: center;
  transition: 0.5s;
  opacity: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 1 : 0};
  /* box-shadow: 8px 8px 16px #d9dade, -8px -8px 16px #ffffff; */
  z-index: ${({ state }: { state: TransitionStatus }) =>
    state === 'entered' ? 2 : 0};
`;

interface Props {}

export const Test = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  const [ended, setEnded] = useState(false);

  console.log(setHovered);
  return (
    <div css={styles.container}>
      {/* <Box>{'aaaa'}</Box> */}
      {/* <div css={styles.box}>
        <div css={styles.dentTextS}>{'Scrapbox'}</div>
      </div>
      <div css={styles.box}>
        <div css={styles.convexTextS}>{'Scrapbox'}</div>
      </div> */}
      {/* <div css={styles.box}>
        <div css={styles.textS}>{'Scrapbox'}</div>
      </div> */}
      {/* <div css={styles.hoveredBox}>
        <div css={styles.titleContainer}>
          <div css={styles.gradientTextS}>{'Scrapbox'}</div>
        </div>
        <div css={styles.linkButtonContainer}>
          <div css={styles.linkBox}></div>
        </div>
      </div> */}
      <div css={styles.boxCotainer}>
        <Transition
          css={styles.boxWrapper}
          in={!hovered}
          timeout={100}
          onExited={() => setEnded(true)}
        >
          {(state) => {
            return (
              <ConvexBox
                onMouseOver={() => {
                  setHovered(true);
                }}
                state={state}
              >
                <div css={styles.titleContainer}>
                  <div css={styles.gradientTextS}>{'Scrapbox'}</div>
                </div>
                <div css={styles.gradientText}>{'#ブログ'}</div>
                <div css={styles.gradientText}>{'#研究'}</div>
                <div css={styles.gradientText}>{'#その他メモ'}</div>
              </ConvexBox>
            );
          }}
        </Transition>
        <Transition
          in={ended}
          timeout={100}
          css={styles.boxWrapper}
          onExited={() => setHovered(false)}
        >
          {(state) => {
            return (
              <DentBox
                state={state}
                onMouseLeave={() => {
                  setEnded(false);
                }}
              >
                <div css={styles.titleContainer}>
                  <div css={styles.gradientTextSHovered}>{'Scrapbox'}</div>
                </div>
                <div css={styles.linkButtonContainer}>
                  <div css={styles.linkBox}>
                    <div css={styles.linkButtonText}>{'Go!'}</div>
                  </div>
                </div>
              </DentBox>
            );
          }}
        </Transition>
      </div>
      {/* <div css={styles.box}>
        <div css={styles.dentTextT}>{'Twitter'}</div>
      </div> */}
    </div>
  );
};
