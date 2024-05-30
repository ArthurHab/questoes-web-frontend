import axios from "axios";
import { useEffect, useState } from "react";
import { Alternativas } from "./components/Alternativas";

function App() {

  const [ data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('/api/questoes')
    .then((response) => {
      setData(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    { data.map((item, index) => (
      <div className='m-12 flex-col gap-3' key={index}>
        <div className="flex gap-4 flex-wrap">
          <p>Banca: {item.banca}</p>
          <p>Orgão: {item.orgao}</p>
          <p>Ano: {item.ano}</p>
          <p>Prova: {item.prova}</p>
        </div>
        <div className='bg-slate-400 h-1 mb-10 mt-4'></div>
        <p>{item.questao.primeiroEnunciado}</p>
        {/* <div>Imagens</div> */}
        {/* <p>{item.questao.segundoEnunciado}</p> */}
        <Alternativas questao={item}/>
      </div>
    ))}      
    </>
  )
}

export default App
