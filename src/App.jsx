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
      <div className='m-10 flex flex-col gap-3' key={index}>
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
