import React, { Component } from 'react';
import Link from 'react-router-dom';
import TopKonten from '../konten/TopKonten';
import Products from '../components/Products';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ViewHeadline from 'material-ui/svg-icons/action/view-headline';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import List from '../list/List';

  class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        chat: false
      };
      //Boilerplate code for binding methods with `this`
      this.handleToggle   = this.handleToggle.bind(this);
      this.handleClose    = this.handleClose.bind(this);
      this.closeDrawer    = this.closeDrawer.bind(this);
      this.chatToggle     = this.chatToggle.bind(this);
      this.chatClose      = this.chatClose.bind(this);
    }

    handleToggle(){
      return this.setState({open: !this.state.open});
    }

    handleClose(){
      return this.setState({open: true});
    }
    closeDrawer(){
      return this.setState({open:false});
    }

    chatToggle(){
      return this.setState({chat: true});
    }

    chatClose(){
      return this.setState({chat: false});
    }

    render() {
    const barSide = {
      width: '100%',
    };
    const chat_style = {
      position: 'fixed',
      right: 0,
      margin: '0px 30px',
      bottom: 0,
      zIndex: 999,
      width:80,
      height:80,
      borderRadius:'50%',
      backgroundColor: 'black',
    };
    const chat_icon_style = {
      width: '100%',
      height: '80%',
      margin: '10px 0px',
      color: 'white',
    }
    const style = {
      position: 'fixed',
      right: 0,
      bottom: 0,
      zIndex: 999,
      margin: '10px 20px',
    };
    const close_btn ={
      position:'fixed',
      marginButton: 50,
    }

      return(

      <div>

        <MuiThemeProvider>
        <AppBar
          style={barSide}
          title={<span>aidu education</span>}
          iconElementLeft={
            <IconButton>
              <ViewHeadline
                label="Open Drawer"
                onClick={this.handleToggle}
              />
            </IconButton>
          }
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
              </IconMenu>
          }
          />

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <ListItem
              leftIcon={<ContentInbox />}
              onClick={this.handleClose}>
                <a href="/">Beranda</a>
            </ListItem>
            <ListItem
              leftIcon={<ContentInbox />}
              nestedItems={[
                    <ListItem key={1} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 1</a></ListItem>,
                    <ListItem key={2} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 2</a></ListItem>,
                    <ListItem key={3} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 3</a></ListItem>,
                    <ListItem key={4} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 4</a></ListItem>,
                    <ListItem key={5} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 5</a></ListItem>,
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/sd">SD Kelas 6</a></ListItem>,
                  ]}
              onClick={this.handleClose}>
                <a>SD</a>
            </ListItem>
            <ListItem
              leftIcon={<ContentInbox />}
              nestedItems={[
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/smp">SMP Kelas 1</a></ListItem>,
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/smp">SMP Kelas 2</a></ListItem>,
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/smp">SMP Kelas 3</a></ListItem>,
                  ]}
              onClick={this.handleClose}>
                <a>SMP</a>
            </ListItem>
            <ListItem
              leftIcon={<ContentInbox />}
              nestedItems={[
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/sma">SMA Kelas 1</a></ListItem>,
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/sma">SMA Kelas 2</a></ListItem>,
                    <ListItem key={6} leftIcon={<ContentDrafts />} ><a href="/sma">SMA Kelas 3</a></ListItem>,
                  ]}
              onClick={this.handleClose}>
                <a>SMA</a>
            </ListItem>
          </Drawer>

          <Drawer
            docked={false}
            width={'200%'}
            open={this.state.chat}
            onRequestChange={(open) => this.setState({chat})}
          >
            <IconButton onClick={this.chatClose} style={close_btn}><NavigationClose /></IconButton>

            <Products />
          </Drawer>

          <FloatingActionButton style={style} onClick={this.chatToggle}>
            <ContentAdd />
          </FloatingActionButton>
        </MuiThemeProvider>
        {(this.props.children == null) ? <TopKonten />: this.props.children}
      </div>

      )
    }
  }
  // <iframe
  //     width="50%"
  //     height="100%"
  //     src="https://console.dialogflow.com/api-client/demo/embedded/6c8c176f-cdc5-4daf-a3f8-c043b5044ca3">
  // </iframe>
  export default Header;
