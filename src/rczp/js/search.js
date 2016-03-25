import { fixFilter, showFilter, hideFilter, selectFilter, generateAreaFilter, moreFilter } from 'filter'
import { $ } from 'func'
import template from './template'
import doSearch from 'doSearch'

export default function search() {
  // 过滤
  fixFilter()
  showFilter()
  hideFilter()
  selectFilter()
  moreFilter()
  generateAreaFilter()
  
  // 搜索类型选择
  $('.header_srch_label').addEventListener('click', (e) => {
    // 切换显示
    $('.header_srch_select').classList.toggle('is-show')
    // 切换选择项
    if (e.target.classList.contains('header_srch_select_item')) {
      let searchText = e.currentTarget.querySelector('.header_srch_label_text')
      let text = e.target.textContent.trim()
      searchText.textContent = text
      searchText.setAttribute('data-type', searchText.textContent === '职位' ? 1 : 2)
    }
  })

  let config = {
    template,
    buttons: $('.list_more'),
    api: '/m/HR/JobList',
    container: document.querySelector('.list')
  }
  
  doSearch({
    config,
    srchbtn: '.header_srch_btn',
    url: () => {
      let searchText = document.querySelector('.header_srch_label_text')
      let type = searchText.getAttributeNode('data-type').value
      return (+type === 1) ? '/m/HR/JobList' : '/m/HR/CompanyList'
    }
  })
}
