const axios = require("axios");

let stockCode = "2330";
let date = "20211017";
let format = "json";

axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: format,
      date: date,
      stockNo: stockCode,
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.error("發生錯誤啦", e);
  });