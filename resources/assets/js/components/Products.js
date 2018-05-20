import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import axios from 'axios';

/* Main Component */
class Products extends Component {
  constructor() {

    super();
    //Initialize the state in the constructor
    this.state = {
        messages: [],
        newMessage: null,
        pesan:'',
        isMine:true,
        balas:[],
        hasilCrawling: [],
    }
    this.tesPesan = this.tesPesan.bind(this);
  }


   handleClick(product) {
    //handleClick is used to set the state
    this.setState({currentProduct:product});

  }
    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(e) {
      this.setState({pesan:e.target.value});
    }

    _addMessage(text, attachment, isMine) {
        this.state.messages.push({
            'isMine': isMine,
            'user': isMine ? '👨' : '🤖',
            'text': text,
            'attachment': attachment || {},
        });
        if (text == 'kosong') {

          fetch( 'api/crawling/', {
              method:'get',
          })
          .then(response => {
              return response.json();
              console.log(response);
          })
          .then( data => {
            // this.setState({
            //   balas: this.state.balas.concat(data[0].title),
            //   isMine: isMine,
            // });
            console.log(data);
          });
        }else{
          this.setState({
            balas: this.state.balas.concat(text),
            isMine: isMine,
          });
        }
    }

    tesPesan() {
      if (this.state.pesan != '') {
        let messageText = this.state.pesan;
        this.state.pesan = '';
        if (messageText === 'clear') {
            this.state.messages = [];
            return;
        }

        this._addMessage(messageText, null, true);

        axios.post('api/botman/', {
            driver: 'web',
            userId: 9999999,
            message: messageText
        }).then(response => {
            let messages = response.data.messages || ['maaf , pertanyaannya tidak bisa terjawab'];
            messages.forEach(msg => {
                this._addMessage(msg.text, msg.attachment, false);
            });
            this.inputchats.value = '';
        }, response => {
        });
      }
    }

      setBalas(){
        return this.state.balas.map(produk=>{
            return(
              <li style={{backgroundColor:((this.state.isMine)?'green':'yellow')}}>
                {produk}
              </li>
            )
        });
      }
      handleSubmit(e){
        e.preventDefault();
      }

      // ambil utk bagian crawling
      // lakukanCrawling(){
      //    /*Fetch API for post request */
      //    fetch( 'api/crawling/', {
      //        method:'get',
      //        /* headers are important*/
      //        // headers: {
      //        //   'Accept': 'application/json',
      //        //   'Content-Type': 'application/json'
      //        // }
      //    })
      //    .then(response => {
      //        return response.json();
      //    })
      //    .then( data => {
      //        //update the state of products and currentProduct
      //        // this.setState((prevState)=> ({
      //        //     hasilCrawling: prevState.hasilCrawling.concat(data)
      //        // }))
      //        // console.log(data[0]);
      //        return data.map(crawl=>{
      //          return(
      //            <li style={{backgroundColor:((this.state.isMine)?'green':'yellow')}}>
      //              {data[0]}
      //            </li>
      //          )
      //        });
      //    })
      // }
  render() {

    const kiriChat = {
      backgroundColor:'yellow',
    }
    const kananChat = {
      backgroundColor:'green',
    }
    const msg_style = {
      width: '40%',
    }
    const chat_style = {
      width: '10%',
    }
    const position_chat = {
      position : 'fixed',
      width: '100%',
      bottom : 0,
    }
    return(
      <div>
        <div className="col-md-6 col-sm-6">
          <center><h3>produk list</h3></center>
          <ul>
          {this.setBalas()}
          </ul>
          <form onSubmit={this.handleSubmit}>
          <div style={position_chat}>
            <input type="text" style={msg_style} ref={el => this.inputchats = el} className="inputChat" name="chatInputan" onChange={(e)=>this.handleInput(e)} />
            <input type="text" style={chat_style} type="submit" value="Submsit" onClick={()=>this.tesPesan()} className="btn btn-danger" />
          </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Products ;
