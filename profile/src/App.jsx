import Card from "./componentes/Card"
import lucca from "../public/lucca.jpg"

function App() {
  return (
   <div>
    <Card
    public={lucca}
    nome="Lucca Dev"
    profissao="Full-Stack Javascript Developer at Acme"
    telefone="+55 84 9922845-39"
    email="Luizcarlos.4090@gmail.com"
    github="GitHub"
    linkedin="Linkedin"
    twiter="Twitter"
    />
   </div>
  )
}

export default App
