import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import List from '../list/List';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class sd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value){
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <div>
        <center><h2> Sekolah Dasar </h2></center>
          <div>
            <center><h4> Kelas1 </h4></center>
            <List />
          </div>
      </div>
    );
  }
}
