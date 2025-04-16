import './App.css'
import { Container, ContainerTop, Form, Title, InputContainer, InputLabel, NameInput, AgeInput, MailInput, BottomContainer, SubmitButton } from './styles'
function App() {

  return (
    <Container>
      <ContainerTop>
        <img />
      </ContainerTop>

      <Form>
        <Title>Cadastro Usuário</Title>


        <InputContainer>
          <div>

            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <NameInput type="text" placeholder="Digite seu Nome" />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <AgeInput type="number" placeholder="Digite sua Idade" />
            </div>
          </div>

            <div>
              <InputLabel>
                Email<span>*</span>
              </InputLabel>
              <MailInput type="email" placeholder="Digite seu Email" />
            </div>

          

        </InputContainer>

        <BottomContainer>
          <SubmitButton>Cadastrar Usuário</SubmitButton>
        </BottomContainer>
      </Form>
    </Container>
  )
}

export default App
