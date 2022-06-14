import { Container, IconMenu } from "./styles";

export function Header(){
  return(
    <Container>
      <img src="/assets/logo-header.svg" alt="" />
      <nav>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#sobre-mim">Sobre Mim</a>
          </li> 
          <li>
            <a href="/#servicos">Serviços</a>
          </li> 
          <li>
            <a href="/#contato">Contato</a>
          </li> 
          <IconMenu/>
        </ul>
      </nav>
    </Container>
  )
}