import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ModulSMA extends Component {
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
            <a href="/listfisika">
              <h3>Matematika</h3>
              <img src='https://cdn.pixabay.com/photo/2016/07/06/15/29/math-1500720__340.jpg' style={{width:'100%', height:'auto'}} />
              </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/listfisika">
              <h3>Fisika</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
              <h3>Kimia</h3>
              <img src='https://cdn.pixabay.com/photo/2017/11/11/11/30/chemistry-2938901__340.jpg' style={{width:'100%', height:'auto'}} />
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/listfisika">
              <h3>Biologi</h3>
              <img src='https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/listfisika">
              <h3>Bahasa Indonesia</h3>
              <img src='https://www.zenius.net/blog/wp-content/uploads/2018/04/hasil-simulasi-try-out-irt-updated-768x509.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>

            <a href="/video">
              <h3>Bahasa Inggris</h3>
              <img src='https://www.zenius.net/blog/wp-content/uploads/2018/04/hasil-simulasi-try-out-irt-updated-768x509.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default ModulSMA ;
