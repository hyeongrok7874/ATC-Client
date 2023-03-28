import styled from "@emotion/styled";
import pallete from "styles/pallete";

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  background: ${pallete.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContents = styled.div`
  width: 79.75%;
`;

export const LogoWrap = styled.button`
  display: flex;
`;

export const LogoText = styled.p`
  font-weight: 400;
  font-size: 1.625rem;
  margin-left: 0.5rem;
`;
