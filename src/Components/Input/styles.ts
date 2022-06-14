import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  label{
    color: var(--green-primary);
    font-size: 18px;
    margin: 0 0 5px 15px;
    font-weight: 400;
  }
  .input{
    
    input{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid #454545;
      padding-left: 20px;
    }
    textarea{
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: 1px solid #454545;
      padding-left: 20px;
      padding-top: 20px;
    }
  }
`;