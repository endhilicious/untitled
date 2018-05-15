import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ListKimia extends Component {
  constructor() {
    super();
  }
  render(){
      const style = {
        height: 300,
        width: '90%',
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
      };

      const vidStyle = {
        height: 300,
        width: 50,
      };
    return(
        <MuiThemeProvider>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Stoikiometri Larutan</h3>
              <img src='https://cdn.pixabay.com/photo/2017/11/11/11/30/chemistry-2938901__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Kecepatan Reaksi</h3>
              <img src='https://cdn.pixabay.com/photo/2017/11/11/11/30/chemistry-2938901__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default ListKimia ;
