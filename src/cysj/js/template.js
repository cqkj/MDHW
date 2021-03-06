export default function template(data) {
  return data.result.data.reduce((pre, cur) => {
    const url = cur.logo ? `http://${UPLOAD_HOST}/img/${cur.logo}` : 'http://cdn.dreamhiway.com/images/default2.png';
    return (
    `${pre}<li class="hostlist_item">
      <a class="linkWrapper" href="http://${DIY_HOST}/m/home/detail/${cur.id}">
        <div class="hostlist_item_img">
          <img src="${url}" atl="${cur.title}">
        </div>
        <div class="hostlist_content">
          <div class="base_title_wrap">
            <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label">[${cur.state}]</span>${cur.title}</h2>
            <span class="base_title_tag">${cur.typename}</span>
          </div>
          <div class="hostlist_item_info">
            <div class="hostlist_item_info_item">
              ${cur.count}<span class="hostlist_item_info_item_label">人参与</span> | <span class="hostlist_item_info_item_label">交付周期：</span>${cur.xmzq}天
            </div>
            <div class="hostlist_item_info_item hostlist_item_info_item-em">
              ￥<strong>${cur.money}</strong>
            </div>
          </div>
        </div>
      </a>
    </li>`
    );
  }, '');
}
