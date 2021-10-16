// Promise 是一個表示非同步運算的最終完成或失敗的物件
// 物件
// 最終成功
// 最終失敗
// 最終: 非同步完成的時候

let doWork = function (job, timer) {  
    // 物件 new Promise(...) --> 建立一個 Promise 物件
    // 建構式(Promise) 必須要傳一個一個函式 executer 執行者
    // executor(處理成功 resolve, 處理失敗 reject)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let dt = new Date();
        // 如果會失敗， reject("錯誤的訊息")  pending ==> rejected
        // reject("故意失敗了");
  
        // 成功的 pending ==> resolved / fulfilled
        resolve(`完成工作 ${job} at ${dt.toISOString()}`);
      }, timer);
    });
  };
  
  async function alljobs(){
      let data1 = await doWork("刷牙", 1000 ,true)
      console.log("data1", data1);
      let data2 = await doWork("吃早餐", 2000 ,true)
      console.log("data2", data2);
      let data3 = await doWork("寫功課", 1000 ,true)
      console.log("data3", data3);
  }
console.log("start");
  alljobs()
console.log("end");