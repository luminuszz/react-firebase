import styled from 'styled-components';

export const Container = styled.nav`
  height: 44px;
  margin: 0 30px;
  width: 100%;
  max-width: 1244px;
  padding: 0 32px;

  margin-top: 30px;
  margin-left: 255px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  h1 {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #252733;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 16px;
    height: 16px;

    &:first-child {
      margin-right: 24px;
    }
  }

  div {
    border-left: 1px solid #dfe0eb;
    height: 32px;
    margin: 0 32px;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: 'Muli';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #252733;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50% solid #dfe0eb;
  }
`;
