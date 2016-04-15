import React from 'react';
import ListItemPlain from '../../../../components/ListItemPlain';
import Loading from '../../../../components/Loading';
import getHash from '../../../../mixins/getHash';
import removeWindowEvent from '../../../../mixins/removeWindowEvent';

export default React.createClass({
  mixins: [getHash, removeWindowEvent],
  componentDidMount: function () {
    this.props.onHasReleaseList();
    window.addEventListener('scroll', this.handleScroll);
  },
  handleScroll: function () {
    const body = document.body;
    const remain = body.scrollHeight - body.scrollTop - window.screen.height;
    if (remain < 50) this.props.onHasReleaseList();
  },
  render: function () {
    let content = this.props.data.map((data, index) => (
       <ListItemPlain
         key={index}
         info={data.type}
         title={data.title}
         elems={[
           <span className="fontColor">项目金额: ￥{data.money}</span>,
           <span>{data.endtime}</span>
         ]}
       />
    ));
    return (
      <div>
        <ul className="list list-plain">
          {content}
        </ul>
        <Loading finished={this.props.finished} />
      </div>
    );
  }
});
