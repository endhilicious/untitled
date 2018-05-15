import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import List from '../list/List';
import ListMatematika from '../list/ListMatematika';
import ListBiologi from '../list/ListBiologi';
import ListKimia from '../list/ListKimia';

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

export default class TopKonten extends Component {

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

        <center><h2> TOP KONTEN </h2></center>
        <SwipeableViews
        >
          <div>
            <center><h4> Matematika SMA </h4></center>
            <ListMatematika />
          </div>
          <div>
            <center><h4> Biologi SMP </h4></center>
            <ListBiologi />
          </div>
          <div>
            <center><h4> Kimia SMA </h4></center>
            <ListKimia />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
