import './css/main.css';

import './img/lunbolqt.png';
import './img/hot.png';
import './img/index.png';

// 解决click事件的移动端延迟
import fastclick from 'fastclick';
fastclick.attach(document.body);

// 显示菜单
import showMenu from 'showMenu';
showMenu();

const pathname = window.location.pathname;
const pathArr = pathname.split('/');
import login from './js/login.js';
import register from './js/register.js';
import { index, scroll } from './js/index.js';

if (pathname.indexOf('denglu') !== -1) {
  login();
} else if (pathname.indexOf('register') !== -1) {
  register();
} else if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  scroll();
  index();
}
