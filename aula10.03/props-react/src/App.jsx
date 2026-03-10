import './App.css'
import Mensagem from './components/mensagem.jsx'
import PropsNomeado from './components/propsNomeado.jsx'
import MeuAvatar from './components/MeuAvatar.jsx'

function App() {

  return (
    <>
      <PropsNomeado 
        titulo='Interclasse 2026' 
        texto='Bem vindo ao Interclasse' 
        nome='Samuel' 
        altura={1.67} 
      />

      <MeuAvatar
        nome="Aizzika"
        idade={17}
        foto="https://i.pinimg.com/736x/9b/9e/19/9b9e1975c6e128ea66ae64c77358c430.jpg"
        estiloMusical="Trap"
        disciplina="SENAI"
      />
    </>
  )
}

export default App