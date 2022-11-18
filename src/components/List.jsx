import { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import PokemonDetail from "./PokemonDetail";

class List extends Component {
  state = {
    pokemones: [],
    resultados: [],
    pokemonInfo: {},
    namePokemon: "",
  };

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.buscar = this.buscar.bind(this);
    this.Buscador = this.Buscador.bind(this);
    this.agua = this.agua.bind(this);
    this.fuego = this.fuego.bind(this);
    this.hierba = this.hierba.bind(this);
    this.insecto = this.insecto.bind(this);
    this.tierra = this.tierra.bind(this);
    this.electrico = this.electrico.bind(this);
    this.veneno = this.veneno.bind(this);
    this.dark = this.dark.bind(this);
    this.pelea = this.pelea.bind(this);
    this.psiquico = this.psiquico.bind(this);
    this.hielo = this.hielo.bind(this);
    this.fantasma = this.fantasma.bind(this);
    this.dragon = this.dragon.bind(this);
    this.todos = this.todos.bind(this);
    this.getPokeInfo = this.getPokeInfo.bind(this);
  }

  
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json"
      )
      .then((response) => {
        this.setState({ pokemones: response.data, resultados: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.namePokemon !== this.state.namePokemon) {
      this.getPokeInfo();
    }
  }

  buscar(event) {
    let filtro = event.currentTarget.value.toLowerCase();
    let filtrados = this.state.pokemones.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(filtro);
    });
    this.setState({ resultados: filtrados });
    //console.log(resultados);
  }
  agua(event) {
    this.Buscador("water");   
  }
  agua(event) {
    this.Buscador("water");   
  }
  fuego(event) {
    this.Buscador("fire");    
  }
  hierba(event) {
    this.Buscador("grass");
  }
  insecto(event) {
    this.Buscador("bug");

  }
  normal(event) {
    this.Buscador("normal");
  }
  dark(event) {
    this.Buscador("dark");  
  }
  veneno(event) {
    this.Buscador("poison");
  }
  electrico(event) {
    this.Buscador("electric");
  }
  tierra(event) {
    this.Buscador("rock");
  }
  psiquico(event) {
    this.Buscador("psychic");    
  }
  hielo(event) {
    this.Buscador("ice");
  }
  metal(event) {
    this.Buscador("steel");
  }
  pelea(event) {
    this.Buscador("fighting");    
  }
  fantasma(event) {
    this.Buscador("ghost");
  }
  dragon(event) {
    this.Buscador("dragon")
  }
  todos(event) {
    window.location.reload(true);
  }

  Buscador(buscapor) {
    let filtrados = this.state.pokemones.filter((pokemon) => {
      return pokemon.type.includes(buscapor);
    });
    this.setState({ resultados: filtrados });
  }
  
  getPokeInfo() {
    const BASE_URL = "https://pokeapi.co/api/v2/";

    axios
      .get(`${BASE_URL}pokemon/${this.state.namePokemon}`)
      .then((response) => {
        // Esto es destructuring 👇🏽
        const { data } = response;
        // console.log("data", data);
        this.setState({ pokemonInfo: data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }



  render() {
    return (         
      <div className="container has-text-centered has-border-primary ">
      
       <img src = "src/img/Logo.png" className=" has-text-centered" ></img>
        <div className="mb-5 ">    
          <input
            onKeyUp={this.buscar}
            type="text"
            placeholder="Buscar..."
            className="input"
          ></input>
        </div>


        <div className="columns is-multiline">
          {/* CONDITIONAL RENDERING */}
          {Object.values(this.state.pokemonInfo).length > 0 ? (
            <PokemonDetail
              detail={this.state.pokemonInfo}
              cleanPokemonDetail={() => this.setState({ pokemonInfo: {} })}
            />
          ) : (
            <>
              {this.state.resultados.length > 0 && (
                <>
                  <button onClick={this.agua} className="button is-black">Agua</button>
                  <button onClick={this.fuego} className="button is-ligth">Fuego</button>
                  <button onClick={this.insecto} className="button is-black ">Insecto</button>
                  <button onClick={this.hierba} className="button is-light">Hierba</button>
                  <button onClick={this.electrico} className="button is-black">Electrico</button>
                  <button onClick={this.tierra} className="button is-light">Roca</button>
                  <button onClick={this.pelea} className="button is-black">Pelea </button>
                  <button onClick={this.veneno} className="button is-ligth">Veneno</button>
                  <button onClick={this.dark} className="button is-black">Oscuridad</button>
                  <button onClick={this.psiquico} className="button is-light">Psiquico</button>
                  <button onClick={this.hielo} className="button is-black">Hielo</button>
                  <button onClick={this.fantasma} className="button is-ligth">Fantastma</button>
                  <button onClick={this.dragon} className="button is-black">Dragon</button> 
                  <button onClick={this.todos} className="button is-ligth">Todos</button>
                <br />
                <br />
                  <div className="columns is-multiline has-text-centered has-text-weight-bold">
                    {this.state.resultados.map((pokemon) => {
                      return (
                        <Pokemon
                          key={pokemon.id}
                          imagen={pokemon.ThumbnailImage}
                          name={pokemon.name}
                          number={pokemon.number}
                          getPokemon={(namePokemon) =>
                            this.setState({ namePokemon })
                          }
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Lista Pokemon</strong> by Omar Lerma. Tdos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default List;
