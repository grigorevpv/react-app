import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {selected, dateRange: {from, to}} = filters;

  let art = articles.filter(article => {
      return ((selected.length && selected.includes(article.id)) || 
              (from && to && article.date >= from && article.date <= to))
  })

  articles = art.length ? art : articles;

  return {
      articles,
      filters
  }
})