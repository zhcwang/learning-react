import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Counter from "./Counter";
import {createStore} from 'redux';
import reducer from './redux/reducers';
let store = createStore(reducer);

class App extends Component {

    render() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
  }
}

export default App;
