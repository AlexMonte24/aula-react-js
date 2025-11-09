// componente pai
import './App.css'

//importar o componente do componente filho
import FunctionalComponent  from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {   
  return (
    <>
      <h1>Hello World React</h1>
      {/* Utilizando o componente importado no JSX*/}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="Matheus" idade={33} />
    </>
  )
}

export default App
