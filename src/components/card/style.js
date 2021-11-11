import styled from "styled-components";

export const ColorBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.colorStyle};
  display: block;
  margin: 0 4px;
`;
export const CardBox = styled.div`
  margin: 10px 0;
  transition: 0.4s all ease;
  width: 300px;
  .ant-card {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  &:hover {
    z-index: 9999;
    transform: scale(1.06);
    box-shadow: 0 0 8px #eee;
  }
  .taskList {
    list-style: none;
    padding: 0;
    li {
      margin: 4px 0;
      .title {
        font-size: 14px;
        font-weight: 550;
        color: #003b73;
        margin: 6px 4px 0 0;
      }
    }
    .canyName {
      font-size: 14px;
      color: #003b73;
      font-weight: 600;
      letter-spacing: 2px;
      display: flex;
      align-items: center;
    }

    .important {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 12px;
        font-weight: 500;
        color: #0074b7;
        &.importantType {
          font-size: 550;
          text-transform: uppercase;
        }
      }
    }

    .date {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      color: #333;
      font-weight: 500;
    }

    .desire {
      font-size: 14px;
      color: #0074b7;
    }
  }

  .imgcArd {
    object-fit: cover;
  }
`;
