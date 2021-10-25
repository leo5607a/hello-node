const axios = require("axios");
const mysql = require("mysql");
const fs = require("fs");
const { rejects } = require("assert");
require("dotenv").config();

let stockCode = "2330";
let date = "20211017";
let format = "json";

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  });
   
  connection.connect();
   
//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) {
//         console.log("錯誤訊息", error);
//     }else{
//         console.log("查到資料");
//     }
//   });
   
//   connection.end();

// axios
//   .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//     params: {
//       response: format,
//       date: date,
//       stockNo: stockCode,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((e) => {
//     console.error("發生錯誤啦", e);
//   });

// async function get(){
//     let get = await axios
//     .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
//       params: {
//         response: format,
//         date: date,
//         stockNo: stockCode,
//       },
//     })
//     console.log(get.data);
// }
// get()

(async ()=>{
    let get = await axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      params: {
        response: format,
        date: date,
        stockNo: stockCode,
      },
    })
    // console.log(get.data);
    let firstdata = get.data.data[0];
    let data = [stockCode, firstdata[0], firstdata[1], firstdata[2], firstdata[8]];
    await insertPromise(data)
    connection.end();
})();

function insertPromise(data){
    new Promise((resolve, reject) => {
        connection.query("insert into stock (stock_no, date, deal, amount, count) values (?,?,?,?,?)", data,(err, results) => {  
            if(err){
                console.error("發生錯誤", err);
            }else{
                console.log("結果", results);
            }
        })
    })
}

