import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const commentIdGetter = (state, ownProps) => ownProps.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {selected, dateRange: {from, to}} = filters;
  let art = {};
  for (let key of Object.keys(articles)) {
    let article = articles[key];
    let date = new Date(article.date);
    if ((selected.length && selected.includes(key)) || (from && to && date >= from && date <= to)) {
        art[key] = article;
    }
  }

  articles = art.size ? art : articles;

  return {
      articles,
      filters
  }
})

export const commentByIdSelector = createSelector(commentsGetter, commentIdGetter, (comments, id) => {
    return {comment: comments[id]}
})