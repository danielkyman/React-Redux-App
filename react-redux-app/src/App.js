import React from "react";
import "./App.css";

import QuoteForm from "./components/QuoteForm";
import QuoteDisplay from "./components/QuoteDisplay";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import thunk from "redux-thunk";

import { quoteReducer } from "./reducers/quoteReducer";

const store = createStore(quoteReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="title">Inspirational Quotes ... for programmers</h1>
        <QuoteForm />
        <QuoteDisplay />
      </div>
    </Provider>
  );
}

export default App;
