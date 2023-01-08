import styled from '@emotion/styled'
import { useSelectMonedas } from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect, useState } from 'react'
import { Error } from './Error'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border:none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight:700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;

    &:hover{
        background-color : #7A7DFE;
        transition: .4s all;
        cursor: pointer
    }
`
export const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptoMoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu criptomoneda', criptos)

    useEffect(() => {
      const consultarApi = async ()=>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        
        const respuesta = await fetch(url)
        const resultados = await respuesta.json()


        const arrayCriptos = resultados.Data.map(cripto => {

          const objeto = {
            id:cripto.CoinInfo.Name,
            nombre :cripto.CoinInfo.FullName
          }
          return objeto
          
          
        })
        setCriptos(arrayCriptos)
      }
      
      consultarApi()
    }, [])
    
    const handleSubmit  = e =>{
      e.preventDefault()


      if([moneda, criptoMoneda].includes('')){
        setError(true)

        return 
      }setError(false)
      setMonedas({
        moneda,
        criptoMoneda
      })
    }

  return (
    <>
    {error && <Error >Todos los campos son obligatorios</Error>}

    <form 
      onSubmit={handleSubmit}
    >

        <SelectMonedas />
        <SelectCriptoMonedas />
        <InputSubmit 
            type = 'submit' 
            value = 'Cotizar'
            />
    </form>
    </>
  )
}
