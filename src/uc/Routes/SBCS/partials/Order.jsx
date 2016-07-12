import React, { Component } from 'react';

export default class Order extends Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  handleClick() {
    window.location.hash = '#/settings/address?order=1';
  }

  render() {
    return (
      <div>
        <div className="remind"><i className="fa fa-exclamation-triangle"></i>建议您下单前先与卖家确认是否可交易或下单后联系卖家</div>
        <h1 className="trademark_name">商标名称：<span className="trademark_name-cont">{this.props.data.name}</span></h1>
        {/* 订单信息 */}
        <ul className="sbcs_order_detl">
          <li><span className="sbcs_order_detl-name">交易方式：</span><span className="sbcs_order_detail-cont">{this.props.data.tradetypeName}</span></li>
          <li><span className="sbcs_order_detl-name">售价：</span><span className="sbcs_order_detail-cont">{this.props.data.price}</span></li>
          <li><span className="sbcs_order_detl-name">手续费：</span><span className="sbcs_order_detail-cont">¥0.00</span></li>
          <li> <span className="sbcs_order_detl-name">优惠：</span><span className="sbcs_order_detail-cont">-¥0.00</span></li>
          <li><span className="sbcs_order_detl-name">订金：</span><span className="sbcs_order_detail-cont">¥{this.props.data.price}</span></li>
        </ul>
        {/* 联系信息 */}
        <div className="sbcs_contact" onClick={this.handleClick}>
          <div className="sbcs_contact_cont">
            <div className="sbcs_contact_cont-left">
              <p>联系信息：<span className="sbcs_contact_info">{this.props.orderAddr.name || this.props.ret.name || '请设置个人信息'} {this.props.orderAddr.mobile || this.props.ret.mobile || ''}</span></p>
              <div className="sbcs_contact_addr">
                <div className="sbcs_addr-map">
                  <i className=" fa fa-map-marker"></i>
                </div>
                <div className="sbcs_addr-info">
                  <p>{this.props.orderAddr.province_name || this.props.ret.province_name || 'xx'}省{this.props.orderAddr.city_name || this.props.ret.city_name || 'xx'}市
                    {this.props.orderAddr.district_name || this.props.ret.district_name || ''}{this.props.orderAddr.address || this.props.ret.address || ''}</p>
                </div>
              </div>
            </div>
            <div className="sbcs_addr-change">
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
        {/*
        <div className="sbcs_srzt">
          <div className="sbcs_srzt_cont">
            <div className="sbcs_srzt_cont-left">
              <p>受让主体或选择代持有：</p>
              <div className="sbcs_srzt_cont">
                <div className="sbcs_srzt-map">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="sbcs_srzt-info">
                  <p>受让人名称：<span className="sbcs_srzt-name">张三</span></p>
                  <p>身份证号码：<span className="sbcs_srzt-idCard">340315263250123254</span></p>
                </div>
              </div>
            </div>
            <div className="sbcs_srzt-change">
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
        </div>
        */}
        {/* 备注信息 */}
        <div className="sbcs_note">
          <div className="sbcs_note-left">
            <p>备注信息：</p>
            <i className="fa fa-pencil-square-o"></i>
          </div>
          <textarea className="sbcs_note-cont" type="textarea" placeholder="请填写留言信息" onChange={(e) => this.props.textChange(e.target.value)}></textarea>
        </div>
        {/* 风险提示 */}
        <div className="risk_warning">
          <div className="risk_warning-cont">
            <h3><i className="fa fa-exclamation-circle"></i>风险提示</h3>
            <div className={`risk_warning-detl${this.props.mode === 1 ? 'is-show' : ''}`}>
              <p>1.此非一口价交易品，不确定交易品有货或价格不变，此方式卖家不承担违约责任。建议您下单前先与卖家确认是否可交易或下单后联系卖家。</p>
              <p>2.本平台为保障交易安全，避免出现卖家对转让手续弄虚作假，特强制有本平台指定的第三方代理机构办理官方转让手续，（商标转让）费用为1000.00元/件。</p>
            </div>
            <span className="risk_warning-up" onClick={this.props.collapse}><i className={`fa${this.props.mode === 1 ? ' fa-angle-double-up' : ' fa-angle-double-down'}`}></i></span>
          </div>
        </div>

        <div className="sbcs_order_footer">
          <p>支付总金额：<span className="sbcs_order-money">¥{this.props.data.price}元</span></p>
          <button className="sbcs_order-btn" onClick={this.props.postOrder}>提交订单</button>
        </div>

      </div >
    );
  }
}
