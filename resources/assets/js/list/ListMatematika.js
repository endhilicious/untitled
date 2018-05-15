import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ListMatematika extends Component {
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
              <h3>Eksponen</h3>
              <img src='https://cdn.pixabay.com/photo/2016/07/06/15/29/math-1500720__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Logaritma</h3>
              <img src='https://cdn.pixabay.com/photo/2016/07/06/15/29/math-1500720__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default ListMatematika ;
