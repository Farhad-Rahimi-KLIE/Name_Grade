function getAndupdate() {
  let name = document.getElementById("name").value;
  let grades = document.getElementById("grades").value;
  if (localStorage.getItem("itemjson") == null) {
    let itemjsonArray = [];
    itemjsonArray.push([name, grades]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  } else {
    let itemjsonArraystr = localStorage.getItem("itemjson");
    itemjsonArray = JSON.parse(itemjsonArraystr);
    itemjsonArray.push([name, grades]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  }
  update();
}
function update() {
  if (localStorage.getItem("itemjson") == null) {
    let itemjsonArray = [];
    // itemjsonArray.push([name, grades]);
    localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  } else {
    let itemjsonArraystr = localStorage.getItem("itemjson");
    itemjsonArray = JSON.parse(itemjsonArraystr);
  }
  //   Manipulate the table
  let tablebody = document.getElementById("tableBody");
  let str = "";
  itemjsonArray.forEach((element, index) => {
    str += `
           <tr>
              <td>${index + 1}</td>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
           </tr>`;
  });
  document.getElementById("tableBody").innerHTML = str;
}
let bhoom = document.getElementById("bhoom");
bhoom.addEventListener("click", getAndupdate);
update();

function deleted(itemIndex) {
  console.log("eeee");
  let itemjsonArraystr = localStorage.getItem("itemjson");
  itemjsonArray = JSON.parse(itemjsonArraystr);
  itemjsonArray.splice(itemIndex, 1);
  //   itemjsonArray.push([name, grades]);
  localStorage.setItem("itemjson", JSON.stringify(itemjsonArray));
  update();
}
