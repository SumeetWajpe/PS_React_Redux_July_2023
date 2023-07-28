function GetData() {
  let xmlHttpreq = new XMLHttpRequest();
  xmlHttpreq.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xmlHttpreq.onreadystatechange = function () {
    if (xmlHttpreq.readyState == 4 && xmlHttpreq.status == 200) {
      console.log(xmlHttpreq.responseText);
    }
  };
  xmlHttpreq.send(); // places the async call
}
