import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    input, button, textarea{
      outline: none;
    }
    text-decoration: none;
    list-style: none;
  }
  :root{
    --green-primary: #08554F;
    --green-secondary: #0DAF0F;
    --background-gray: #E7E7E5;
  }
`;