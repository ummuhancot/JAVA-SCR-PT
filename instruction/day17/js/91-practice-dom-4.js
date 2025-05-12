
import { students } from "../../day16/data/students.js";

const fillTable = () => {
  let tBodyInside = "";

  for (let student of students) {
    tBodyInside += `
        
        <tr>
            <td> ${student.id} </td>
            <td> ${student.name} </td>
            <td> ${student.point} </td>
            <td> 
                <button class="btn btn-danger">Sil</button>
            </td>
        </tr>
        `;
  }

  //   console.log(tBodyInside);

  document.querySelector("table > tbody").innerHTML = tBodyInside;

  let pointElements = document.querySelectorAll(
    "table tbody tr td:nth-child(3)"
  );

  console.log(pointElements);

  pointElements.forEach((pointElement) => {
    let point = pointElement.innerText;
    // console.log(point);

    if (point < 50) {
      pointElement.parentElement.classList.add("table-danger");
    }
  });
};

fillTable();

document.querySelector("table tbody").addEventListener("click", (e) => {
  // console.log(e.target);

  if (e.target.innerText === "Sil") {
    // console.log("Sil tuşuna basıldı");

    let name = e.target.closest("tr").children[1].innerText;
    // console.log(name);

    let result = confirm(
      `${name} isimli kaydı silmek istediğinize emin misiniz?`
    );

    console.log(result);

    // Confirm onaylanınca ilgili satırın silinmesi:
    if (result) {
      e.target.closest("tr").remove();
    }
  }
});

const toggleRows = () => {
  document.querySelectorAll("table tbody tr").forEach((row) => {
    row.onclick = () => row.classList.toggle("table-warning");
  });
};

toggleRows();