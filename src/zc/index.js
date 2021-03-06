import './css/main.css';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

// page最小高度为窗口高度
document.querySelector('.page').style.minHeight = `${window.innerHeight}px`;

// 各页面JS
const pathname = window.location.pathname;
const pathArr = pathname.split('/');
import detail from './js/detail.js';
import comment from './js/comment.js';
import progress from './js/progress.js';
import search from './js/search.js';
import index from './js/index.js';

if (pathname.indexOf('detail') !== -1) {
  detail();
  progress();
} else if (pathname.indexOf('comment') !== -1) {
  comment();
} else if (pathname.indexOf('progress') !== -1) {
  progress();
} else if (pathname.indexOf('search') !== -1) {
  search();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
