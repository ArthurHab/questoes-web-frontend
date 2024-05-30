import axios from "axios";
import { useEffect, useState } from "react";
import { Alternativas } from "./components/Alternativas";
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();
  const [ data, setData] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get('page') || 1;

  const fetchData = async () => {
    await axios.get(`/api/questoes?page=${page-1}`)
    .then((response) => {
      setData(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData();
  }, [page])

  return (
    <>
    { data.map((item, index) => (
      <div className='m-12 flex-col gap-3' key={index}>
        <div className="flex gap-4 flex-wrap">
          <p>{((page-1) * 10) + (index + 1)}ª - Questão</p>
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
