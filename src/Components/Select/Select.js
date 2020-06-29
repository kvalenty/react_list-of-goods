import React from 'react';

export class Select extends React.PureComponent {
  render() {
    return (
      <select
        value={this.props.defaultSelect}
        onChange={event => this.props.onSelected(event.target.value)}
      >
        {[...new Array(this.props.quantity)].map((option, index) => (
          <option
            key={index.toString()}
            value={index + 1}
          >
            {index + 1}
          </option>
        ))}
      </select>
    );
  }
}
