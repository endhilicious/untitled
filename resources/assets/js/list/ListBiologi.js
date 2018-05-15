import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ListBiologi extends Component {
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
              <h3>Sistem Ekskresi Pada Manusia</h3>
              <img src='https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Bioteknologi</h3>
              <img src='https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default ListBiologi ;
