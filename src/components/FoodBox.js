import React from 'react';

export default class FoodBox extends React.Component {
  state = {
    quantity: 0,
  };

  onQuantity = (event) => {
    let quantity = event.target.value;
    this.setState({
      quantity
    });
  };

  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.image} alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  onChange={this.onQuantity}
                  value={this.state.quantity}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={() => {
                    this.props.onList(this.props.food, this.state.quantity);
                  }}
                >
                  +
                </button>
                <button
                  className="button is-info"
                  onClick={() => {
                    this.props.onDelete(this.props.food);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
