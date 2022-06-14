import styled from "styled-components";
import {AiOutlineWhatsApp} from "react-icons/ai";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    gap: 10px;
  }
  span{
    &::after{
      content: "Agende a sua sessão";
      display: flex;
      background: #FFF;
      color: var(--green-primary);
      height: 50px;
      width: 200px;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    }
    position: fixed;
    right: 120px;
    opacity: 0;
    transition: all .4s ease;
  }
  .zap{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 7px;
    background: var(--green-secondary);
    position: fixed;
    bottom: 35px;
    right: 50px;
    border-radius: 50%;
    svg{
      fill: #FFF;
    }
    &:hover{
      span{
        opacity: 1;
      }
    }
  }
`;

export const BannerHero = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--background-gray);
  >img{
    height: 100%;
    width: 50%;
  }
  .textHero{
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0 auto;
    >img{
      height: 205px;
      margin-bottom: 50px;
    }
    p{
      font-size: 18px;
      font-family: 'Roboto' sans-serif;
      font-weight: 400;
      color: var(--green-primary);
    }
    a{
      margin-top: 40px;
      width: 150px;
      height: 50px;
      button{
        border-radius: 50px;
      }
    }
  }
`;

export const Specialties = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 714px;
  background: var(--green-primary);
  .wrapper{
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 433px;
    width: 90%;
    margin: 0 auto;
    h1{
      font-size: 48px;
      margin-bottom: 60px;
      color: #FFF;
    }
    .cards{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
      gap: 82px;
      height: 100%;
      .card{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        justify-content: space-between;
        img{
          height: 264px;
          width: 100%;
        }
        h2{
          color: #FFF;
          font-size: 24px;
          margin: 30px 0;
        }
        p{
          color: #FFF;
          font-size: 18px;
        }
      }
    }
  }
`;

export const Contact = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-left: 91px;
  position: relative;
  h2{
    margin-top: 88px;
    margin-bottom: 57px;
    font-family: 'Roboto' sans-serif;
    font-size: 32px;
    color: var(--green-primary);
    &::after{
      content: "";
      display: flex;
      height: 2px;
      width: 20%;
      margin-top: 20px;
      background: var(--green-primary);
    }
  }
  .form{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 750px;
    gap: 30px;
    .par{
      display: flex;
      width: 100%;
      gap: 40px;
    }
    .impar{
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
  a{
    height: 39px;
    width: 174px;
    border-radius: 5px;
    margin: 54px 0;
  }
  img{
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 329px;
  width: 100%;
  overflow: hidden;
  position: relative;
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 94%;
    margin: 0 auto;
    color: #FFF;
    position: absolute;
    .infos{
      display: flex;
      gap: 106px;
      .contato, .endereco{
        h2{
          font-size: 32px;
          font-weight: 400;
          &::after{
            content: "";
            display: flex;
            height: 1px;
            width: 150px;
            margin-top: 8px;
            margin-bottom: 24px;
            background: #FFF;
          }
        }
        p{
          font-size: 16px;
          margin-bottom: 10px;
        }
      }
    }
    .sotial{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      img{
        display: flex;
        height: 166px;
        width: 238px;
      }
      .sotialMidea{
        display: flex;
        font-size: 26px;
        gap: 25px;
      }
    }
  }
`;

export const Zap = styled(AiOutlineWhatsApp)`
  font-size: 42px;
  fill: #FFF;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
`;