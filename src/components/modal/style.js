import styled from "styled-components";
export const InputBox = styled.div`
  .ant-form-item {
    flex-direction: column;
    .ant-form-item-label {
      text-align: start;
    }
  }
  .ant-radio-button-wrapper {
    &.ant-radio-button-wrapper-checked {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
  .red {
    &.ant-radio-button-wrapper-checked {
      border-color: red !important;

      .ant-radio-button-checked {
        background-color: red;
        border-color: red;
      }
    }
  }
  .green {
    &.ant-radio-button-wrapper-checked {
      border-color: green !important;

      .ant-radio-button-checked {
        background-color: green;
        border-color: green;
      }
    }
  }
  .blue {
    &.ant-radio-button-wrapper-checked {
      border-color: blue !important;

      .ant-radio-button-checked {
        background-color: blue;
        border-color: blue;
      }
    }
  }
`;
