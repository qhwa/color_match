import React from 'react';
import { connect } from 'react-redux';
import 'styles/index.css';

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#000',
      color: '#fff'
    };
  }

  render() {
    return (
      <main>
        <h1>请选择一个颜色</h1>
        <input type="color" onChange={::this.onChange} value={this.state.backgroundColor} />
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
      backgroundColor: bgColor,
      color: this.getTextColor(bgColor)
    });
  }

  getTextColor(bgColor) {
    return '#fff';
  }

}

export default connect()(Homepage);
