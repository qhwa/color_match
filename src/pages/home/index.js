import React from 'react';
import { connect } from 'react-redux';
import 'styles/index.css';
import {lab} from 'd3-color';

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      background: '#ff7300',
      color: '#fff'
    };
  }

  render() {
    const bgColor = lab(this.state.background);
    return (
      <main>
        <h1>请选择一个颜色</h1>
        <input type="color" onChange={::this.onChange} value={this.state.background} />
        <ul>
          <li>L: {bgColor.l}</li>
          <li>A: {bgColor.a}</li>
          <li>B: {bgColor.b}</li>
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
    const c = lab(bgColor);
    // L 的范围是 0-100
    return c.l > 90 ? '#000' : '#fff';
  }

}

export default connect()(Homepage);
