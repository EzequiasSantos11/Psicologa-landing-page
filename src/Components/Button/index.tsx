import { Container } from "./styles";

type ButtonProps ={
  textButton: string,
  type: 'solid' | 'transparent',
}

export function Button({textButton, type}: ButtonProps){
  return(
    <Container className={type}>
      {textButton}
    </Container>
  )
}