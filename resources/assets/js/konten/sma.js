import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import List from '../list/List';
import ModulSMA from '../list/ModulSMA';

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

export default class sma extends Component {

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
        <center><h2> Sekolah Menengah Atas </h2></center>
          <div>
            <center><h4> Kelas 3 </h4></center>
            <ModulSMA />
          </div>
      </div>
    );
  }
}
