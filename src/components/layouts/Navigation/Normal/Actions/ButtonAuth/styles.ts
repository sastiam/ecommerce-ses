import styled , { css } from "styled-components";

interface IProps {
  ghost? : boolean;
}

export const ButtonAuthStyles = styled.button<IProps>`
  width: 130px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  font-size: 15px;
  font-weight: var(--font-weight);
  transition: .2s;

  &:hover {
    background-color: var(--color-secondary);
    color: #fff;
  }

  ${({ ghost }) => ghost && css`
      border: none;
      background-color: #fff;
      
      &:hover{ 
        color: var(--color-text);
        background-color: rgb(230,230,230);
      }
    `
  }
`