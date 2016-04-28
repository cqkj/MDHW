import React from 'react';

import Header from './components/Header';

export default React.createClass({
  getInitialState: function () {
    return {
      to: '',
      profile: {},
      profileTemp: {}
    };
  },
  componentDidMount: function () {
    fetch('/m/user/info/person', {
      method: 'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(res => this.setState({
        profile: res.result,
        profileTemp: res.result
      }));
  },
  onProfileChange: function (key, value) {
    const newState = Object.assign({}, this.state.profileTemp);
    newState[key] = value;
    this.setState({ profileTemp: newState });
  },
  onUndoProfileChange: function (key) {
    const newState = Object.assign({}, this.state.profileTemp);
    newState[key] = this.state.profile[key];
    this.setState({ profileTemp: newState });
  },
  onSubmitProfileChange: function (key) {
    const newState = Object.assign({}, this.state.profile);
    newState[key] = this.state.profileTemp[key];
    fetch('/m/user/info/person/Edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(newState)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      });
  },
  onChangeHash: function () {
    const hash = location.hash.slice(1).replace(/\?.*/, '');
    let to;
    if (hash === '/') {
      to = false;
    } else {
      const indexOfSlash = hash.lastIndexOf('/');
      to = indexOfSlash < 2 ? '/' : hash.slice(0, indexOfSlash);
    }
    this.setState({ to });
  },
  render: function () {
    const Child = this.props.children;
    let extra;
    switch (Child.type.displayName) {
      case 'Home':
        extra = { profile: this.state.profile };
        break;
      case 'Settings':
        extra = {
          profile: this.state.profile,
          profileTemp: this.state.profileTemp,
          onProfileChange: this.onProfileChange,
          onUndoProfileChange: this.onUndoProfileChange,
          onSubmitProfileChange: this.onSubmitProfileChange
        };
        break;
      default:
        extra = {};
    }
    return (
      <div>
        <Header to={this.state.to} />
        {React.cloneElement(Child, Object.assign({ onChangeHash: this.onChangeHash }, extra))}
      </div>
    );
  }
});
