export default function template(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<li class="hostlist_item">
        <a class="hostlist_item_a" href="http://192.168.2.177:8090/m/zb/detail/${cur.id}"
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small">
                <span class="base_title_wrap_label">[${cur.statemc}]</span>
                >${cur.title}
              </h2>
              <span class="base_title_tag">${cur.typename}</span>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.totalfin}</strong>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-big">
                ${cur.num}<span class="hostlist_item_info_item_label">人参与</span> | <span class="hostlist_item_info_item_label">交付周期：</span>${cur.procycle}天
              </div>
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">发布者：</span>${cur.fbzname}
              </div>
            </div>
          </div>
        </a>
      </li>`
  ), '');
}
