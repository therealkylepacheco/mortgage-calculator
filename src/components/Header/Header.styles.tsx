import { Select } from "antd";
import styled from "styled-components";

export const CustomSelect = styled(Select)`
  .ant-select-arrow {
    color: white;
  }
  .ant-select-selector {
    .ant-select-selection-item {
      color: white;
      font-size: 24px;
    }
  }
`;

export const HeaderContainer = styled.div`
  align-items: center;
  background-color: #00072d;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0px 24px;
`;

export const Title = styled.div<{ isMobileView?: boolean }>`
  color: white;
  font-size: ${({ isMobileView }) => (isMobileView ? "24px" : "36px")};
  font-weight: bold;
`;
