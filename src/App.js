import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ArticleList from './ArticleList';
import Calendar from './DayPicker';
import {articles as articlesList} from './fixtures';
import Filter from './Filter/Filter';

const store = createStore(reducer);
console.log('store = ', store)

export default class App extends Component {

  render(){
    return (
      <div>
          <Calendar />
          <Filter articles = {articlesList}/>
        <Provider store={store}>
          <ArticleList />
        </Provider>
      </div>
    )
  }
}