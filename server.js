const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "laraveldb"
});
var data = [];
var splitTanya = [];
var kata = 0;
var kumpul , haha , koleksiTanya ,id_kata , sql,cek,splitTanyaVar,idYangSama,tanyatanya , ididkatakata;


con.connect(function(err) {

  con.query("SELECT * FROM tanyajawab", function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      id_kata = result[i].id;
      koleksiTanya = result[i].tanya;
      splitTanya  = koleksiTanya.split(' ');
      for (var j = 0; j < splitTanya.length; j++) {
        data(splitTanya[j] , id_kata);
      }
    }
  });

  function data(tanyatanya , ididkatakata) {
    var poin = 0;
    var dataSudahAda = 0;
    con.query("SELECT * FROM indeks", function (errs, hasilDariDBIndeks, fields) {
          for (var k = 0; k < hasilDariDBIndeks.length; k++) {
            if (hasilDariDBIndeks[k].kata == tanyatanya) {
              poin = 1;
              dataSudahAda++;
              if (dataSudahAda == 1) {
                haha = hasilDariDBIndeks[k].indeks_id+','+ididkatakata;
              }
              console.log(haha);
            }
          }
          if (poin == 1 ) {
            sql = "UPDATE indeks SET indeks_id = '"+haha+"' WHERE kata = '"+tanyatanya+"'";
            con.query(sql, function (err, result) {
              console.log("'"+tanyatanya+"' berhasil update");
            });
          }
          if (poin == 0) {
            sql = "INSERT INTO indeks (kata, indeks_id) VALUES ('"+tanyatanya+"', '"+ididkatakata+"')";
            con.query(sql, function (err, result) {
              console.log("'"+tanyatanya+"' berhasil insert");
            });
          }
              poin = 0;
              dataSudahAda = 0;
    });
  }

});
