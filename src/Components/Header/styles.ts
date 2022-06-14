import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi"

export const IconMenu = styled(GiHamburgerMenu)`
  height: 25px;
  width: 30px;
  fill: var(--green-primary);
  cursor: pointer;
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  width: 100%;
  padding: 0 53px;
  background: #FFF;
  img{
    height: 62px;
    width: 268px;
  }
  nav, ul{
    display: flex;
    align-items: center;
  }
  ul{
    gap: 48px;
    li, a{
      color: var(--green-primary);
    }
  }
`;