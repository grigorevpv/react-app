import React, { Component } from 'react';

import ArticleList from './ArticleList';
import Calendar from './DayPicker';
import {articles} from './fixtures';

export default class App extends Component {

  render(){
    return (
      <div>
        <Calendar />
        <ArticleList articles = {articles} />
      </div>
    )
  }
}