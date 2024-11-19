import styled from "styled-components";

export const Container = styled.div<{ isMobileView?: boolean }>`
  display: flex;
  flex-direction: ${({ isMobileView }) => (isMobileView ? "column" : "row")};
`;
