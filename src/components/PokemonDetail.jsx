import React, { Component } from "react";
import styled from 'styled-components'


export default class PokemonDetail extends Component {
  componentWillUnmount() {
    console.log("se destruye componente");
  }

  render() {
    const {
      detail: { name, height, weight, moves },
    } = this.props;

    return (  
      <>
          <Overlay>
              <ContenedorModal>
                <EncabezadoModal>
                  <h3> {name} </h3>
                </EncabezadoModal>           
                  
                <BotonCerrar onClick={() => this.props.cleanPokemonDetail()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>  
                </BotonCerrar> 

                <h4>Altura: {height} ft</h4>
                <h4>Peso: {weight} lb</h4> 
                <ul>    
                {moves.slice(0, 5).map((element, i) => (
                  <li key={i}>
                    Movimiento {i + 1}: {element.move.name}{" "}
                  </li>
                ))}
              </ul>              
              </ContenedorModal>
          </Overlay>
      </>
  
    );
  }
    
}


const Overlay = styled.div` 
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1,0,0,.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const ContenedorModal = styled.div` 
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: 20px;  
  align-items: left;
`;


const EncabezadoModal = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;
  h3{
    font-weight: 500;
    font-size: 16px;
    color: #1766DC;
  }
  h4{
    align-items: left;
  }
  ul{
    align-items: left;
  }`;
const BotonCerrar = styled.button` 
  position: absolute;
  top: 15px;
  right: 15px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: #1766DC;

  &:hover{
    background: #f2f2f2;
  }
  
  svg{
    width: 100%;
    height: 100%;
  }`;