import styled from "styled-components";

export const InputContainer = styled.div<{ isMobileView?: boolean }>`
  align-items: center;
  background-color: #001c55;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: ${({ isMobileView }) => (isMobileView ? "30vh" : "90vh")};
  justify-content: center;
  padding: ${({ isMobileView }) => (isMobileView ? "0px" : "0px 24px")};
  width: ${({ isMobileView }) => (isMobileView ? "100vw" : "33vw")};
`;
