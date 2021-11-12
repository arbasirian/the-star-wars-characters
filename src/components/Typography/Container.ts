import styled from 'styled-components';

export const Container = styled.div`
  width: 1500px;
  margin: 0 auto;
  direction: ${(props) => (props.theme.language === 'fa' ? 'rtl' : 'ltr')};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.xxl}) {
    width: 1200px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 960px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.l}) {
    width: 720px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.m}) {
    width: 540px;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 100%;
  }
`;
