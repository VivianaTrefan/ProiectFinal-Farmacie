import { DARK_GRAY, DARK_GREEN } from "./../../constants/color";
import styled from "styled-components";
import { TextRight } from "react-bootstrap-icons";

export const FooterContainer = styled.div`
  margin: 48px 0 0;
  padding: 16px 0;
  background: #0f0e0e;
  color: white;
  height: 100%;
  min-height: 80px;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;
export const contact = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: TextRight;
`;