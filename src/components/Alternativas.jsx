import { useEffect, useState } from "react"
import { Alternativa } from "./Alternativa"

const Alternativas = (props) =>{

  const alternativasLetras = ['A','B','C','D','E']
  let alternativas;
  let resposta;
  
  const [indexSelected, setIndexSelected] = useState(null);
  const [respondida, setRespondida] = useState(false);
  const [respostaCorreta, setRespostaCorreta] = useState(false);
  

  const response = () => {
    if(indexSelected!=null){
      setRespondida(true)
    }
    
    if(props.questao.questao.indexAlternativaCorreta == indexSelected){
      setRespostaCorreta(true);
    }

  }

  const selectIndex = (index) => {
    if(!respostaCorreta){
      setIndexSelected(index)
    }
  }

  if (props.questao.questao.alternativas.length < 3){
    
    alternativas = 
      <>
        <div className='p-3 flex flex-col gap-2'>
          <Alternativa texto={props.questao.questao.alternativas[0]} index={0} indexSelected={indexSelected} selectIndex={selectIndex} setRespondida={setRespondida}/>
          <Alternativa texto={props.questao.questao.alternativas[1]} index={1} indexSelected={indexSelected} selectIndex={selectIndex} setRespondida={setRespondida}/>
        </div>
      </>
  } else {
    alternativas = 
    <>
      <div className='p-3 flex flex-col gap-2'>
        {
          props.questao.questao.alternativas.map((item, index) => (
            <Alternativa key={index} opcao={alternativasLetras[index]} texto={item} index={index} indexSelected={indexSelected} selectIndex={selectIndex} setRespondida={setRespondida}/>
          ))
        }
      </div>
    </>
  }

  if (respondida == true){
    if(respostaCorreta){
      resposta = 
      <p className='text-green-500'>Parabéns, Você acertou!</p>
    } else{
      resposta = 
      <p className='text-red-500'>Infelizmente você errou :/</p>
    }
  } else{
    resposta = <></>
  }
  
  return(
    <>
      {alternativas}
      <div className="flex gap-4">
          <div onClick={response} className={
            !!respostaCorreta ? 
            'border border-orange-600 p-3 rounded-full bg-orange-600 text-white hover:cursor-default opacity-50'
            :
            'border border-orange-600 p-3 rounded-full bg-orange-600 text-white hover:cursor-pointer'
            }>Responder</div>

          <div className="flex items-center justify-center">{resposta}</div>
      </div>
    </>
  )
}

export {Alternativas}