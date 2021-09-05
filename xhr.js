const getBtn = document.getElementById("get-btn");
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "htt://jsonplaceholder.typicode.com/posts");

    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
      reject("error");
    };

    xhr.onerror(reject("error"));

    xhr.send();
  });
  return promise;
};

const getData = () => {
  fetchData()
    .then((res) => {
      JSON.stringify(res);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

getBtn.addEventListener("click", getData);
