import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Signup from '../../src/components/Signup.jsx';
import setupJestEnzyme from '../setup/setupJestEnzyme.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


describe('signup', () => {
  var signup;

  beforeEach( () => {
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

  it('has a way to submit information for signup', () => {
    expect(signup.find(Button).filter('.create-new-account')).toHaveLength(1);
  });
});