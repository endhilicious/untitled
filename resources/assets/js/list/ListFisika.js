import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class ListFisika extends Component {
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
            <a href="/video">
              <h3>Kinematika Dengan Analisis Vektor</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/video">
              <h3>Hukum Newton Tentang Gravitasi</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/video">
              <h3>Usaha dan Energi</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/video">
              <h3>Momentum, Impuls, dan Tumbukan</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
          <Paper style={style} zDepth={3}>
            <div>
            <a href="/video">
              <h3>'Pemanasan Global'</h3>
              <img src='https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg' style={{width:'100%', height:'auto'}} />
            </a>
            </div>
          </Paper>
        </MuiThemeProvider>
    );
  }
}
export default ListFisika ;
