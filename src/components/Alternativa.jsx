const Alternativa = (props) => {

    const handleClick = () => {
        props.selectIndex(props.index)
    }

    return(
        <>
            <div className='flex gap-5 hover:cursor-pointer' onClick={handleClick}>
                <div className={
                    props.index == props.indexSelected ? 
                    'flex items-center justify-center w-7 h-7 border border-gray-400 rounded-full bg-orange-600 text-white' :
                    'flex items-center justify-center w-7 h-7 border border-gray-400 rounded-full'
                    }>{props.opcao}</div>
                <div>{props.texto}</div>
            </div>
        </>
    )
}

export { Alternativa }