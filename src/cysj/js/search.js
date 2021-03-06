import { $ } from 'func';
import { showFilter, selectFilter } from 'filter';
import template from './template.js';
import doSearch from 'doSearch';
import render from 'render';

export default function search() {
  const load = document.querySelector('.list_load');
  const config = {
    template,
    load,
    api: '/m/diy/project/List',
    params: {
      pageIndex: 1,
      pageSize: 10
    },
    container: $('.hostlist')
  };

  doSearch({
    config,
    keywordProp: 'title',
    srchbtn: '.srch_btn'
  });

// 过滤
  showFilter();
  selectFilter((filter, type) => {
    if (/^[0-9]/.test(type)) {
      type = +type;
    }
    config.params.pageIndex = 0;
    config.params[filter] = type;
    config.immediate = true;
    render(config);
  });

  const s = location.search;
  if (/(^\?|&)kw\=/.test(s)) {
    const c = Object.assign({}, config);
    const value = s.replace(/(?:^\?|&)kw\=([^&]*)(&.*|$)/, (str, $1) => $1);
    c.params.title = value;
    c.immediate = false;
    render(c);
  }
}
