import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import Signup from '../../src/components/Signup.jsx';
import setupJestEnzyme from '../setup/setupJestEnzyme.js';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


describe('signup', () => {
  let signup;

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

describe('signup user actions', () => {
  let signupInteractive;
  const mockFn = jest.fn();
  let signupProps = {
    onFirstNameChange: () => mockFn(),
    onLastNameChange: () => mockFn(),
    onEmailChange: () => mockFn(),
    onPasswordChange: () => mockFn(),
    onZipcodeChange: () => mockFn(),
    createAccount: () => mockFn(),
  };


  beforeEach( () => {
    signupInteractive = shallow(<Signup onFirstNameChange={mockFn} onLastNameChange={mockFn} onEmailChange={mockFn} onPasswordChange={mockFn} onZipcodeChange={mockFn} createAccount={mockFn}
    />);
  });

  // afterEach( () => {
  //   signupInteractive.unmount();
  // });

  it('allows the user to submit the signup form', () => {
    // const spy = jest.spyOn(signupInteractive.instance(), 'createAccount')
    signupInteractive.find(Button).simulate('click');
    // expect(spy).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalled();
  });

  it('allows user to submit a form with the data in the first name and last name fields', () => {

  });


  // it('allows user to submit a form only if email address and zipcode is filled', () => {

  // });
});






































