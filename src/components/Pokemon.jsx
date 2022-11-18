import { Component, Fragment } from "react";

class Pokemon extends Component {
  render() {
    //console.log(this.props);
    return (
      <Fragment>
        <div className="column is-3 has-border-primary">
          <div
            className="card "
            onClick={() => this.props.getPokemon(this.props.name.toLowerCase())}
          >
            <div className="card-image">
              <div className="card-content has-text-right is-size-2 tarjeta">#{this.props.number} </div>
              <figure className="image">
                <img src={this.props.imagen} />
              </figure>
            </div>
            <div className="card-content is-size-3 ">{this.props.name}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pokemon;
