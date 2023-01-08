import styled from "@emotion/styled"


const Contenedor = styled.div`
    color:#fff;
    font-family: 'Lato', sans-serif;
    display:flex;
    align-items:center;
    gap:3rem;
    margin:20px;
`

const Texto  = styled.p `
     font-size:18px;
    span{
        font-size:18px;
    }

`
const Precio  = styled.p `
    font-size:30px;
    span{
        font-size:30px;
    }
`

const Imagen = styled.img`
    display:block;
    width:120px;
`

export const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    
    
    <Contenedor>
        <Imagen src= {`https://cryptocompare.com/${IMAGEURL}`} alt = 'imagen cripto'/>
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>La variación del precio: <span>{CHANGEPCT24HOUR}%</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
        
    </Contenedor>
    
    
  )
}
