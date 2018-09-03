import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Signup from '../../src/components/Signup.jsx';
import setupJestEnzyme from '../setup/setupJestEnzyme.js';

describe('signup', () => {
  var signup;
  beforeEach( () => {
    signup = shallow(<Signup />);
  });


  it('renders signup correctly', () => {
    expect(signup).toMatchSnapshot();
  });

  it('has a place to enter the first and last name', () => {
    expect(signup.find('input.first-name')).toHaveLength(1);
    expect(signup.find('input.last-name')).toHaveLength(1);
    // expect(signup.find('input.first-name').length).toBe(1); - also works
  });

  it('tells the user which field to enter the first and last name', () => {
    expect(signup.find('label.first-name')).toHaveLength(1);
    expect(signup.find('label.last-name')).toHaveLength(1);
  });
});