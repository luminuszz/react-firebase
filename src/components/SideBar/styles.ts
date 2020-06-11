import styled from 'styled-components';

export const Container = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  width: 255px;
  height: 100vh;
  background: #363740;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 28px;
    padding-top: 41px;

    svg {
      width: 32px;
      height: 32px;
    }

    h1 {
      font-family: 'Muli';
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 24px;
      color: #a4a6b3;
      padding-left: 12px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    margin-top: 63px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 56px;
      padding-left: 32px;
      font-family: 'Muli', sans-serif;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background: #9fa2b4;
      }

      img {
        width: 16px;
        height: 16px;
        margin-right: 24px;
      }

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0.2px;
        line-height: 20px;
        color: #dde2ff;
      }
    }
  }
`;
