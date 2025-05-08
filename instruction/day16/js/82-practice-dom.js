import { students } from "../data/students.js";

const fillTable = () => {
  let tBodyInside = "";

  for (let student of students) {
    tBodyInside += `
        
        <tr>
            <td> ${student.id} </td>
            <td> ${student.name} </td>
            <td> ${student.point} </td>
        </tr>
        `;
  }

  console.log(tBodyInside);

  document.querySelector("table > tbody").innerHTML = tBodyInside;

  let pointElements = document.querySelectorAll("table tbody tr td:last-child");

  console.log(pointElements);

  pointElements.forEach((pointElement) => {
    let point = pointElement.innerText;
    // console.log(point);

    if (point < 50) {
      pointElement.parentElement.classList.add("table-danger");
    }
  });

  // let tableRows = document.querySelectorAll("table tbody tr");

  // tableRows.forEach((row) => {
  //     const point = row.querySelector("td:last-child").innerText;

  //     console.log(point);

  //     if(point < 50){
  //         row.classList.add("table-danger")
  //     }

  // })
};

fillTable();
