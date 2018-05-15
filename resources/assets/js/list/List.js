import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class List extends Component {
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
              <h3>Trigonometri</h3>
              <img src='https://www.zenius.net/blog/wp-content/uploads/2018/04/sistem-penilaian-baru-sbmptn-2018.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Eksponen dan Logaritma</h3>
              <img src='https://www.zenius.net/blog/wp-content/uploads/2018/04/hasil-simulasi-try-out-irt-updated-768x509.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default List ;
