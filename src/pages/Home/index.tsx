import { Container, BannerHero, Specialties, Contact, Footer, Zap } from "../../Styles/HomeStyles";
import * as Icon from "react-icons/all";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { InputComponent } from "../../Components/Input";

export default function Home(){
  return(
    <Container>
      <Header/>
      <BannerHero id="home">
        <img src="/assets/woman.png" alt="mulher branca com sardas, cabelo castanho, olhos verdes, sorrindo, camisa social amarela." />
        <div className="textHero">
          <img src="/assets/logo-hero.svg" alt="logo, Debora serafin, psicóloga clínica." />
          <p>
            Olá, sou Debora Serafini, Psicóloga, especialista em Terapia Cognitivo Comportamental, com 10 anos de experiência em saúde emocional e qualidade de vida.
            <br/><br/>
            Realizo atendimentos individuais onde te ajudo a ter autonomia emocional, para que possa lidar com problemas no relacionamento amoroso, com familiares ou ligados ao trabalho ...
          </p>
          <a href="">
            <Button textButton="Ler mais" type="solid"/>
          </a>
        </div>
      </BannerHero> 
      <Specialties id="servicos">
        <div className="wrapper">
          <h1>Especialidades</h1>
          <div className="cards">
            <div className="card">
              <img src="/assets/psicoterapia.png" alt="" />
              <h2>Psicoterapia</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse turpis tristique volutpat, euismod semper massa.
              </p>
            </div>
            <div className="card">
              <img src="/assets/bem-estar-emocional.png" alt="" />
              <h2>Bem estar emocional</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse turpis tristique volutpat, euismod semper massa.
              </p>
            </div>
            <div className="card">
              <img src="/assets/consultoria.png" alt="" />
              <h2>Consultoria Empresarial</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse turpis tristique volutpat, euismod semper massa.
              </p>
            </div>
          </div>
        </div>
      </Specialties>
      <Contact id="contato">
        <h2>Entre em contato</h2>
        <div className="form">
          <div className="par">
            <InputComponent type="input" InputHeight={'67px'} InputWidth={'100%'} textLabel="Nome"/>
            <InputComponent type="input" InputHeight={'67px'} InputWidth={'100%'} textLabel="Telefone"/>
          </div>
          <div className="impar">
            <InputComponent type="input" InputHeight={'67px'} InputWidth={'100%'} textLabel="E-mail"/>
            <InputComponent type="textarea" InputWidth={'100%'} InputHeight={'257px'} cols={30} rows={10} textLabel="Mensagem"/>
          </div>
        </div>
        <a href="">
          <Button textButton="Enviar" type="solid"/>
        </a>
        <img src="/assets/background.png" alt="" />
      </Contact>
      <Footer>
        <div className="wrapper">
          <div className="infos">
            <div className="contato">
              <h2>Contato</h2>
              <p>E-mail: debora_psico@gmail.com</p>
              <p>Telefone: (11) 99999-8888</p>
            </div>
            <div className="endereco">
              <h2>Endereço</h2>
              <p>Rua Aurellano Gomes, 1422 cj 193 <br/> Morumbi, SP</p>
            </div>
          </div>
          <div className="sotial">
            <img src="/assets/logo-footer.svg" alt="" />
            <div className="sotialMidea">
              <Icon.RiWhatsappFill/>
              <Icon.ImFacebook/>
              <Icon.AiOutlineTwitter/>
              <Icon.AiFillInstagram/>
              <Icon.BsYoutube/>
            </div>
          </div>
        </div>
        <img src="/assets/image-footer.png" alt="" />
      </Footer>
      <div className="footer">
        <strong>&copy; Design exclusivo de <a href="">Andreza Carvalho</a></strong>
        <strong>&copy; Desenvolvimento Front-end <a href="">Ezequias Santos</a></strong>
      </div>
      <div className="zap">
        <Zap/>
        <span></span>
      </div>
    </Container>
  )
}