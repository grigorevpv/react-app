import React, { Component } from 'react';

import ArticleList from './ArticleList';
import Calendar from './DayPicker';
import {articles} from './fixtures';
import Filter from './Filter/Filter';

export default class App extends Component {

  render(){
    return (
      <div>
        <Calendar />
        <Filter articles = {articles}/>
        <ArticleList articles = {articles} />
      </div>
    )
  }
}