import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from '../reducers';
import LoginForm from './LoginForm';

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAXM-BE5fhw6xR-PoYQVrKKTNquE1jTIR4',
      authDomain: 'manager-b5b99.firebaseapp.com',
      databaseURL: 'https://manager-b5b99.firebaseio.com',
      projectId: 'manager-b5b99',
      storageBucket: 'manager-b5b99.appspot.com',
      messagingSenderId: '963783201163'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
