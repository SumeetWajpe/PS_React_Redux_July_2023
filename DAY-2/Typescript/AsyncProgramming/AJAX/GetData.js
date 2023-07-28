function GetData(callback) {
  let xmlHttpreq = new XMLHttpRequest();
  xmlHttpreq.open("GET", "https://jsonplaceholder.typicode.com/postsss");
  xmlHttpreq.onreadystatechange = function () {
    if (xmlHttpreq.readyState == 4 && xmlHttpreq.status == 200) {
      callback(null, xmlHttpreq.responseText);
    } else if (xmlHttpreq.readyState == 4 && xmlHttpreq.status !== 200) {
      callback("Something went wrong - " + xmlHttpreq.status, null);
    }
  };
  xmlHttpreq.send(); // places the async call
}
