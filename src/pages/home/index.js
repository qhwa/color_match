import React from 'react';
import { connect } from 'react-redux';
import 'styles/index.css';
import {hsl} from 'd3-color';

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      background: '#000',
      color: '#fff'
    };
  }

  render() {
    const bgColor = hsl(this.state.background);
    return (
      <main>
        <h1>请选择一个颜色</h1>
        <input type="color" onChange={::this.onChange} value={this.state.background} />
        <ul>
          <li>H: {bgColor.h}</li>
          <li>S: {bgColor.s}</li>
          <li>L: {bgColor.l}</li>
        </ul>
        <h2>Color:</h2>
        <div className="preview" style={this.state}>
          Hello!
        </div>
      </main>
    );
  }

  onChange(evt) {
    const bgColor = evt.target.value;
    this.setState({
      background: bgColor,
      color: this.getTextColor(bgColor)
    });
  }

  getTextColor(bgColor) {
    const c = hsl(bgColor);
    return c.l >= 0.5 ? '#000' : '#fff';
  }

}

export default connect()(Homepage);
