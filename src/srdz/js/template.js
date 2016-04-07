export default function template(data) {
  return data.result.data.reduce((pre, cur) => (
    `${pre}<li class="hostlist_item">
          <div class="hostlist_item_img">
            <div style="width:60px;height:60px;background:red"></div>
          </div>
          <div class="hostlist_content">
            <div class="base_title_wrap">
              <h2 class="base_title_text base_title_text-small"><span class="base_title_wrap_label srdz_title_wrap_label">【${cur.typename}】</span>${cur.title}</h2>
            </div>
            <div class="hostlist_item_info">
              <div class="hostlist_item_info_item">
                <span class="hostlist_item_info_item_label">好评率：</span>100% | <span class="hostlist_item_info_item_label">店铺等级：</span><span class="list_item_color">5星</span>
              </div>
              <div class="hostlist_item_info_item hostlist_item_info_item-em">
                ￥<strong>${cur.price}</strong>
              </div>
            </div>
          </div>
        </li>`
  ), '');
}
