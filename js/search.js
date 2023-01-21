// 构建搜索客户端
const searchClient = algoliasearch('Application_ID', 'Search-Only_API_Key');
// 构建索引搜索
const search = instantsearch({
  indexName: 'Index_Name',
  searchClient,
});

//展示数据模版
var hitTemplate =
  '<article class="post">' +
  '<h2 class="post-title"><a href="{{url}}">{{{_highlightResult.title.value}}}</a></h2>' +
  '{{{_highlightResult.summary.value}}}' +
  '</article>';

//无数据模版
var noResultsTemplate =
  '<div class="text-center">没有找到 <strong>{{query}}</strong> 相关的结果</div>';

//配置添加小部件
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: '请输入搜索内容……',
    autofocus: true,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    }
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
]);

//启动搜索
search.start();// 构建搜索客户端
const searchClient = algoliasearch('Application_ID', 'Search-Only_API_Key');
// 构建索引搜索
const search = instantsearch({
  indexName: 'Index_Name',
  searchClient,
});

//展示数据模版
var hitTemplate =
  '<article class="post">' +
  '<h2 class="post-title"><a href="{{url}}">{{{_highlightResult.title.value}}}</a></h2>' +
  '{{{_highlightResult.summary.value}}}' +
  '</article>';

//无数据模版
var noResultsTemplate =
  '<div class="text-center">没有找到 <strong>{{query}}</strong> 相关的结果</div>';

//配置添加小部件
search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: '请输入搜索内容……',
    autofocus: true,
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate
    }
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
]);

//启动搜索
search.start();