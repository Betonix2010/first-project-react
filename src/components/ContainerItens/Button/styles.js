import styled from 'styled-components'

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
