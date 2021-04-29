import styled from "styled-components";

interface IStyled {
  fs?: string;
  weight?: string;
  color?: string;
  align?: string;
  width?: string;
  error?: string;
  pl?: string;
  pr?: string;
  pb?: string;
  pt?: string;
  p?: string;
  ml?: string;
  mr?: string;
  mb?: string;
  mt?: string;
  m?: string;
}

export const Display1 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 64px;
  line-height: 77px;
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Display2 = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 56px;
  line-height: 68px;
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H1 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 40px;
  line-height: 54px;
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H2 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: ${(props) => props.fs || "32px"};
  line-height: 44px;
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H3 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 28px;
  line-height: 38px;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H4 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 24px;
  line-height: 32px;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H5 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 20px;
  line-height: 28px;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H6 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 16px;
  line-height: 22px;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const H7 = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 16px;
  line-height: 22px;
  font-weight: ${(props) => props.weight || 600};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
  flex-wrap: wrap;
`;

export const Body2 = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: "auto";
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

export const BodyMedium = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 16px;
  line-height: 24px;
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const BodySmall = styled.Text<IStyled & { lineHeight?: string }>`
  font-family: "Inter-Regular";
  font-size: 14px;
  line-height: ${(props) => props.lineHeight || "24px"};
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const BodyLarge = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 20px;
  line-height: 24px;
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Lead = styled.Text<IStyled>`
  font-family: "Inter-Bold";
  font-size: 14px;
  line-height: 24px;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const BlockQuotes = styled.Text<IStyled>`
  font-family: "Inter-Medium";
  font-size: 20px;
  line-height: 28px;
  font-weight: ${(props) => props.weight || 600};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const Capitalized = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const StylizedSmall = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 12px;
  line-height: 15px;
  font-weight: ${(props) => props.weight || 400};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const StylizedTiny = styled.Text<IStyled>`
  font-family: "Inter-Medium";
  font-size: 10px;
  line-height: 12px;
  font-weight: ${(props) => props.weight || 600};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const LabelLarge = styled.Text<IStyled>`
  font-family: "Inter-Medium";
  font-size: 14px;
  line-height: 24px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const LabelMedium = styled.Text<IStyled>`
  font-family: "Inter-Medium";
  font-size: 12px;
  line-height: 16px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const LabelSmall = styled.Text<IStyled>`
  font-family: "Inter-Medium";
  font-size: 10px;
  line-height: 14px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;

export const LabelTiny = styled.Text<IStyled>`
  font-family: "Inter-Regular";
  font-size: 6px;
  line-height: 14px;
  font-weight: ${(props) => props.weight || 500};
  color: ${(props) => props.theme[props.color || "dark0"]};
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
  padding-left: ${(props) => props.pl || 0};
  padding-right: ${(props) => props.pr || 0};
  padding-top: ${(props) => props.pt || 0};
  padding-bottom: ${(props) => props.pb || 0};
  margin-left: ${(props) => props.ml || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-top: ${(props) => props.mt || 0};
  margin-bottom: ${(props) => props.mb || 0};
`;
