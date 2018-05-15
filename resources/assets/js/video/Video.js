import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';

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
            <div>
              <center><h3>'Pemanasan Global'</h3></center>
              <Player style={{margin: 10 ,width:'10%', height:300}} >
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
              </Player>
              <p>'Nah ini dia Pelajaran fisika materi yang paling seru, yaitu pemanasan global. Nonton yuukk'</p>
            </div>
        </MuiThemeProvider>
    );
  }
}
export default ListMatematika ;
