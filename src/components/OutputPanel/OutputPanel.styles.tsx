import styled from "styled-components";

export const OutputContainer = styled.div<{ isMobileView?: boolean }>`
  align-items: center;
  background-color: #0a2472;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: ${({ isMobileView }) => (isMobileView ? "60vh" : "90vh")};
  justify-content: center;
  width: ${({ isMobileView }) => (isMobileView ? "100vw" : "67vw")};
`;

export const SectionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const OutputMain = styled.div`
  font-size: 48px;
`;

export const RateText = styled.div`
  font-size: 24px;
  font-weight: lighter;
`;
