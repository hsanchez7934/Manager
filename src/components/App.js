import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import LoginForm from './LoginForm';
import firebaseConfig from './firebaseConfig';

type Props = {};
export default class App extends Component<Props> {

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={createStore(store)}>
        <LoginForm />
      </Provider>
    );
  }
}
