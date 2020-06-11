import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 300px;
  width: 1122px;
  margin: 0 30px;
  margin-top: 60px;
  margin-left: 280px;
  border-radius: 5px;
  border: 1px solid #252733;
`;

export const Table = styled.table`
  width: 100%;

  div {
    float: left;
    margin-left: 32px;
    h1 {
      font-family: Muli;
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 24px;
      color: #252733;
    }
  }
`;
