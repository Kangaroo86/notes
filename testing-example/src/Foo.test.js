import React from 'react';
import { shallow } from 'enzyme';
import Foo from './Foo';

describe('a demo', () => {
  it('should render', () => {
    expect(shallow(<Foo />).is('.foo')).toBe(true)
  })
})
