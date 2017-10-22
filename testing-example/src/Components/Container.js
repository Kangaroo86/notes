import React, { Component } from 'react';
import Loading from './Loading';
import MenuComponent from './MenuComponent';

const imgUrl=`https://cdn.dribbble.com/users/194846/screenshots/1452453/loadingspinner.gif`;

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menuItems: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const res = await fetch('/data/data.json');
    const data = await res.json();

    this.setState(prevState => ({
      menuItems: prevState.menuItems.concat(data),
      loading: false
    }));
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading &&  <Loading image={imgUrl} />}
        {!loading && <MenuComponent items={this.state.menuItems} />}
      </div>
    );
  }
};
