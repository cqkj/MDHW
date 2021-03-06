import { $ } from 'func';
import xhr from 'xhr';
import { switchPassword, refrechCodeImg, dataBinding } from './form.js';

export default function login() {
  const data = {};
  const login = $('.login');
  const modal = $('.modal');
  const modalText = modal.querySelector('.modal_content_text');

  switchPassword(data, 'pwd');
  const refresh = refrechCodeImg();
  dataBinding(data, login);

  function doLogin(e) {
    e.preventDefault();
    login.disabled = true;

    xhr('/m/login/dhw', data, (res) => {
      if (res.success) {
        const locationSrch = location.search;
        const urlEndPoint = locationSrch.indexOf('&');
        const url = locationSrch.slice(13, locationSrch.length - urlEndPoint);
        location.href = url ? decodeURIComponent(url) : `http://${MAIN_HOST}/m`;
      } else {
        const cl = $('.acc_group-verify').classList;
        if (!cl.contains('is-show')) {
          cl.add('is-show');
        }
        if (res.msg) {
          modalText.textContent = res.msg;
        } else {
          modalText.textContent = '未知错误，请稍候重试';
        }
        refresh();
        modal.classList.add('is-show');
        setTimeout(() => modal.classList.remove('is-show'), 2500);
      }
    });

    // fetch('/m/main/Login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'credentials': 'include'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.success) {
    //       let locationSrch = location.search;
    //       let urlEndPoint = locationSrch.indexOf('&');
    //       let url = locationSrch.slice(13, locationSrch.length - urlEndPoint);
    //       location.href = decodeURIComponent(url);
    //       // alert('登录成功');
    //     } else {
    //       if (res.msg) {
    //         modalText.textContent = res.msg;
    //       } else {
    //         modalText.textContent = '未知错误，请稍候重试';
    //       }
    //       refresh();
    //       modal.classList.add('is-show');
    //       setTimeout(() => modal.classList.remove('is-show'), 2500);
    //     }
    //   });
  }

  login.addEventListener('click', doLogin);
}
