import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../src/';

describe('<App />', () => {
 
  it('works', () => {
    expect(shallow(<App />)).find('h4').length.to.equal(1);
  });

  //TODO:
  //补上更多测试
 
});
