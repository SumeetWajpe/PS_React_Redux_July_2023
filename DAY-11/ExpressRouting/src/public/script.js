function Loadusers() {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
      let userList = document.querySelector("#listofusers");

      for (const user of users.users) {
        let newLi = document.createElement("li");
        newLi.innerText = user.name;
        userList.append(newLi);
      }
    });
}

window.addEventListener("DOMContentLoaded", Loadusers);
