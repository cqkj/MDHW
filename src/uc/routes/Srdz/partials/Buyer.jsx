import React, { Component } from 'react';
import ListItem from '../../../components/ListItem';
import Loading from '../../../components/Loading';
import scroll from '../../../mixins/scroll';

export default class Buyer extends Component {
  componentDidMount() {
    this.props.fetchBuyer(-1, 1);
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleClick(state1, state2) {
    this.props.fetchBuyer(state1, state2);
  }

  handleScroll() {
    scroll(this.props.fetchBuyer);
  }

  render() {
    let contentList = this.props.data.map((item, index) => {
      let type;
      if (item.state === 2) {
        type = <span className="list_operate">确认收货</span>;
      } else {
        type = item.stateName;
      }
      return (
        <ListItem
          key={index}
          {...item}
          img={item.productlmg}
          title={item.projectName}
          other={type}
          multiple={{ '下单时间': item.date }}
          emp={['金额', item.total_fee]}
          orderConfirm={this.props.orderConfirm}
          index={index}
          url={item.url}
        />
      );
    });

    return (
      <div>
        <ul className="listTabs">
          <li
            className={`listTab${this.props.type === 0 ? ' is-active' : ''}`}
            onClick={() => this.handleClick(-1, 1)}
          >待付款</li>
          <li
            className={`listTab${this.props.type === 1 ? ' is-active' : ''}`}
            onClick={() => this.handleClick(0, 5)}
          >已付款</li>
        </ul>
        <ul className="list">
          {contentList}
        </ul>
        <Loading
          finished={this.props.finished}
          dataLen={this.props.data.length}
        />
      </div>
    );
  }
}
