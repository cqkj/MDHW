import './css/main.css';
import './img/banner.png';
import './img/sbcs_1.png';
import './img/sbcs_2.png';
import './img/sbcs_3.png';
import './img/sbcs_4.png';
import './img/sbcs_5.png';

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
import index from './js/index.js';

if (pathname.indexOf('index') !== -1 || pathArr.length < 4 || (pathArr.length === 4 && pathArr[3] === '')) {
  index();
}
