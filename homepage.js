const getLocalStorage = localStorage.getItem("email");

if (getLocalStorage !== null) {
  const collection = document.getElementsByClassName("name-data");
  collection[0].innerHTML = `Hello ${getLocalStorage}!`;
}

var data = [
  { name: "John", age: 25, email: "john@example.com" },
  { name: "Jane", age: 30, email: "jane@example.com" },
  { name: "Bob", age: 35, email: "bob@example.com" },
];

function showData() {
  var tableBody = document.querySelector("#dataTable tbody");
  tableBody.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var row = "<tr>";
    row += "<td>" + data[i].name + "</td>";
    row += "<td>" + data[i].age + "</td>";
    row += "<td>" + data[i].email + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<button class='delete' type='button' onclick='deleteData(" +
      i +
      ")'>Hapus</button></td>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
}

function addData() {
  var name = document.querySelector("#inputName").value;
  var age = document.querySelector("#inputAge").value;
  var email = document.querySelector("#inputEmail").value;
  data.push({ name: name, age: age, email: email });
  showData();
}

function editData(index) {
  var name = prompt("Nama baru:", data[index].name);
  var age = prompt("Umur baru:", data[index].age);
  var email = prompt("Email baru:", data[index].email);
  data[index] = { name: name, age: age, email: email };
  showData();
}

function deleteData(index) {
  data.splice(index, 1);
  showData();
}

window.onload = function () {
  showData();
};
