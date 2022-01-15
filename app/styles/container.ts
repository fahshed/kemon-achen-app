import styled from 'styled-components/native';

interface IStyled {
  color?: string;
  align?: string;
  width?: string;
  height?: string;
  justify?: string;
  p?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  m?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  mt?: string;
  direction?: string;
  bg?: string;
  border?: string;
  corner?: string;
  bc?: string;
  wrap?: string;
  grow?: string;
}

export const Container = styled.View<IStyled>`
  display: flex;
  justify-content: ${(props) => props.justify || 'space-between'};
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.align || 'center'};
  background-color: ${(props) =>
    props.bg ? props.theme[props.bg] : '#ffffff'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || props.p || 0};
  padding-right: ${(props) => props.pr || props.p || 0};
  padding-top: ${(props) => props.pt || props.p || 0};
  padding-bottom: ${(props) => props.pb || props.p || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || props.m || 0};
  margin-right: ${(props) => props.mr || props.m || 0};
  margin-top: ${(props) => props.mt || props.m || 0};
  margin-bottom: ${(props) => props.mb || props.m || 0};
  border-width: ${(props) => props.border || '0px'};
  border-radius: ${(props) => props.corner || '0px'};
  border-color: ${(props) =>
    props.bc ? props.theme[props.bc] : 'transparent'};
  flex-grow: ${(props) => props.grow || 0};
`;
