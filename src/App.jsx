import React from 'react';
import ToDo from 'components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reduxStore';

function App() {
    const store = createStore(rootReducer);

    return (
        <Provider store={store}>
            <ToDo />
        </Provider>
    );
}

export default App;