import styled from "styled-components";

interface IStyled {
  fs?: string;
  weight?: string;
  color?: string;
  align?: string;
  width?: string;
  error?: string;
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
}

export const H6Bold = styled.Text<IStyled>`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Body1 = styled.Text<IStyled>`
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Body2 = styled.Text<IStyled>`
  font-size: 14px;
  line-height: 17px;
  font-weight: normal;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Body2Bold = styled.Text<IStyled>`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Overline = styled.Text<IStyled>`
  font-size: 10px;
  line-height: 12px;
  font-weight: normal;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Caption = styled.Text<IStyled>`
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: ${(props) => props.theme[props.color || "black"]};
  text-align: ${(props) => props.align || "left"};
  width: auto;
  padding: ${(props) => props.p || 0};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin: ${(props) => props.m || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;
