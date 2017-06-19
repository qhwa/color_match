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
    const c     = lab(bgColor);
    const white = lab('white');
    const black = lab('black');

    return distance(c, white) >= distance(c, black) ? '#fff' : '#000';
  }

}

const distance = (c1, c2)=> {
  return (
    (c1.l - c2.l) * (c1.l - c2.l) +
    (c1.a - c2.a) * (c1.a - c2.a) +
    (c1.b - c2.b) * (c1.b - c2.b)
  );
};


export default connect()(Homepage);
