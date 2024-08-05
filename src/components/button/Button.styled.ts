import styled from "styled-components";

export const Button = styled.button<{ width?: string; height?: string; fontSize?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;
