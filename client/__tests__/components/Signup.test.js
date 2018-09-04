import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Signup from '../../src/components/Signup.jsx';
import setupJestEnzyme from '../setup/setupJestEnzyme.js';
import { Input, InputLabel, FormControl } from '@material-ui/core';
import { createShallow } from '@material-ui/core/test-utils';

describe('signup', () => {
  var signup;
  // let shallow;

  beforeEach( () => {
    // shallow = createShallow();
    signup = shallow(<Signup />);
  });


  it('renders signup correctly', () => {
    expect(signup).toMatchSnapshot();
  });

  it('has a place to enter the first and last name', () => {
    expect(signup.find(Input).filter('.first-name')).toHaveLength(1);
    expect(signup.find(Input).filter('.last-name')).toHaveLength(1);
  });

  it('indicates which field to enter the first and last name', () => {
    expect(signup.find(InputLabel).filter('.first-name')).toHaveLength(1);
    expect(signup.find(InputLabel).filter('.last-name')).toHaveLength(1);
  });

  it('has a place to enter the email address', () => {
    expect(signup.find(Input).filter('.email-address')).toHaveLength(1);
  });

  it('has a place to enter the password', () => {
    expect(signup.find(Input).filter('.password')).toHaveLength(1);
  });
});