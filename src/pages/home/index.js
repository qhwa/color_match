import React from 'react';
import { connect } from 'react-redux';
import 'styles/index.css';
import {lab, hsl} from 'd3-color';

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    const background = '#ff7300';

    this.state = {
      background,
      color: this.getTextColor(background),
      shadowColor: this.getShadowColor(background)
    };
  }

  render() {
    const {background, shadowColor, color} = this.state;
    const bgColor = lab(background);

    return (
      <main>
        <h1>请选择一个颜色</h1>
        <input type="color" onChange={::this.onChange} value={background} />
        <h2>Color:</h2>

        <svg className="html5" xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600.00001 600.00001">
          {/* background */}
          <path d="M0 0h600v600H0z" style={{fill: background}} />

          {/* shadow */}
          <path d="M180.816 163.613l22.225 232.336L336.664 600H600V324.982L407.092 163.613H180.816z" style={{fill: shadowColor.rgb().toString()}} />

          {/* logo */}
          <g fill="#fff">
            <path d="M179.975 162.726h114v45.4h-64.2l4.2 46.5h60v45.3h-101.6m2 22.8h45.6l3.2 36.3 50.8 13.6v47.4l-93.2-26" fillOpacity=".72" />
            <path d="M407.575 162.726h-113.8v45.4h109.6m-4.1 46.5h-105.5v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" fillOpacity=".357" />
          </g>

          {/* text */}
          <g>
            <path d="M191.069 90.84h3.945v11.953h14.336V90.84h3.945V120h-3.945v-13.887h-14.336V120h-3.945V90.84zM250.374 90.84h24.668v3.32H264.69V120h-3.965V94.16h-10.351v-3.32zM312.218 90.84h5.879l7.441 19.844 7.48-19.844h5.88V120h-3.848V94.395l-7.52 20h-3.964l-7.52-20V120h-3.828V90.84zM379.941 90.84h3.945v25.84h14.2V120H379.94V90.84z" style={{fill: color}} />
          </g>
        </svg>

        <dl>
          <dt>HSL</dt>
          <dd>H: {prettyNum(hsl(background).h)} - {prettyNum(hsl(shadowColor.rgb().toString()).h)}</dd>
          <dd>S: {prettyNum(hsl(background).s)} - {prettyNum(hsl(shadowColor.rgb().toString()).s)}</dd>
          <dd>L: {prettyNum(hsl(background).l)} - {prettyNum(hsl(shadowColor.rgb().toString()).l)}</dd>

          <dt>LAB</dt>
          <dd>L: {prettyNum(bgColor.l)} - {prettyNum(lab(shadowColor).l)}</dd>
          <dd>A: {prettyNum(bgColor.a)} - {prettyNum(lab(shadowColor).a)}</dd>
          <dd>B: {prettyNum(bgColor.b)} - {prettyNum(lab(shadowColor).b)}</dd>
        </dl>

      </main>
    );
  }

  onChange(evt) {
    const bgColor = evt.target.value;
    this.setState({
      background: bgColor,
      color: this.getTextColor(bgColor),
      shadowColor: this.getShadowColor(bgColor)
    });
  }

  getTextColor(bgColor) {
    const c = lab(bgColor);
    // L 的范围是 0-100
    return c.l > 90 ? this.getShadowColor(bgColor, 20) : '#fff';
  }

  getShadowColor(bgColor, darken = 15) {
    const c = lab(bgColor);
    return lab(c.l - darken, c.a, c.b);
  }


}

const prettyNum = (n) => {
  return Math.floor(n * 100) / 100;
};

export default connect()(Homepage);
