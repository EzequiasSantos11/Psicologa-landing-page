import styled from "styled-components";


export const Container = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  &.solid{
    background: var(--green-primary);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Roboto' sans-serif;
    border: none;
  }
  &.transparent{
    background: transparent;
    color: var(--green-primary);
    font-size: 18px;
    font-weight: 700;
    font-family: 'Roboto' sans-serif;
    border: 1px solid var(--green-primary);
  }
`;