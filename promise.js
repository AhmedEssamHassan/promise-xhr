/* promises in j.s */
//1: producing code: tha code that may take some time
//2: consuming code: the code that have to wait for the result

//a promise is a js opject that links the producing code and consuming code

/*
a promis opject contains both
=>producing code
=>calls to the consuming code
 */

/* syntax */
/* const myPromise = new Promise((myResolve, myReject) => {
  //producing code
  let x = 5 + 5;
  if (x === 10) {
    myResolve("sucsess"); //when successful
  } else myReject("rejected"); //when error
});
 */
/* consuming code */

/* myPromise.then(
  (val) => {
    console.log(val);
  },
  (error) => {
    console.log(error);
  }
); */

/* ******************************************************************** */

/* how to create a promise your self */

//create a conustructor function

function MyPromise(callBack) {
  let data;
  this.state = "pending";

  const myResolve = (newData) => {
    data = newData;
    if (this.state === "pending") {
      this.state === "done";
    }
  };
  const myReject = (error) => {
    data = error;
    if (this.state == "pending") {
      this.state = "rejected";
    }
  };

  callBack(myResolve, myReject);

  this.then = (successCallbackFun, errorCallbackFun) => {
    if (this.state === "done") {
      successCallbackFun(data ? data : "");
    } else if (this.state == "rejected") {
      errorCallbackFun(data ? data : "");
    }
  };

  this.finally = (defaultCallBack) => {
    defaultCallBack();
  };
}

const promise = new MyPromise((myResolve, myReject) => {
  myResolve("resolved");
  myReject("rejected");
});

promise.finally(() => {
  console.log("sss");
});
