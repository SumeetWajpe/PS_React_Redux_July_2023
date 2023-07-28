function GetData() {
  return new Promise((resolve, reject) => {
    let xmlHttpreq = new XMLHttpRequest();
    xmlHttpreq.open("GET", "https://jsonplaceholder.typicode.com/postsss");
    xmlHttpreq.onreadystatechange = function () {
      if (xmlHttpreq.readyState == 4 && xmlHttpreq.status == 200) {
        resolve( xmlHttpreq.responseText);
      } else if (xmlHttpreq.readyState == 4 && xmlHttpreq.status !== 200) {
        reject("Something went wrong - " + xmlHttpreq.status);
      }
    };
    xmlHttpreq.send(); // places the async call
  });
}
