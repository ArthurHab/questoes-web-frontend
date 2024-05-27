import { useEffect, useState } from "react"

const Alternativas = (questao) =>{

  const [indexSelected, setIndexSelected] = useState(null)
  const [status, setStatus] = useState(null)

  const updateIndexSelected = (index) => {
    setIndexSelected(index)
  }

  const handleClick = () => {
    if(questao.questao.questao.indexAlternativaCorreta == indexSelected){
      setStatus(true)
    }
  }

  return(
    <>
        { (() => {
        if(questao.questao.questao.alternativas.length < 3) {
          return <> 
            <div className='p-3 flex flex-col gap-2'>
              <div className='flex gap-5'>
                <div onClick={() => {updateIndexSelected(0)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'></div>
                <div>{questao.questao.questao.alternativas[0]}</div>
              </div>
              <div className='flex gap-5'>
                <div onClick={() => {updateIndexSelected(1)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'></div>
                <div>{questao.questao.questao.alternativas[1]}</div>
              </div>
              <div className="flex">
                <div onClick={handleClick} className='border border-orange-600 p-3 rounded-full bg-orange-600 text-white'>Responder</div>
              </div>
            </div>
          </>
        } else if(questao.questao.questao.alternativas.length < 5){
          return <>
              <div className='p-3 flex flex-col gap-2'>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(0)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>A</div>
                  <div>{questao.questao.questao.alternativas[0]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(1)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>B</div>
                  <div>{questao.questao.questao.alternativas[1]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(2)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>C</div>
                  <div>{questao.questao.questao.alternativas[2]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(3)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>D</div>
                  <div>{questao.questao.questao.alternativas[3]}</div>
                </div>
                <div className="flex">
                  <div onClick={handleClick} className='border border-orange-600 p-3 rounded-full bg-orange-600 text-white'>Responder</div>
                </div>

            </div>
          </>
        } else{
          return <>
              <div className='p-3 flex flex-col gap-2'>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(0)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>A</div>
                  <div>{questao.questao.questao.alternativas[0]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(1)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>B</div>
                  <div>{questao.questao.questao.alternativas[1]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(2)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>C</div>
                  <div>{questao.questao.questao.alternativas[2]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(3)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>D</div>
                  <div>{questao.questao.questao.alternativas[3]}</div>
                </div>
                <div className='flex gap-5'>
                  <div onClick={() => {updateIndexSelected(4)}} className='flex items-center justify-center w-7 h-7 border border-black rounded-full'>E</div>
                  <div>{questao.questao.questao.alternativas[4]}</div>
                </div>
                <div className="flex">
                  <div onClick={handleClick} className='border border-orange-600 p-3 rounded-full bg-orange-600 text-white'>Responder</div>
                </div>

            </div>
          </>
        }
      })()}
    </>
  )
}

export {Alternativas}