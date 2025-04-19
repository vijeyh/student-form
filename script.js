const form = document.getElementById("stdForm");
const stdTable = document.getElementById("stdTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const course = document.getElementById("course").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const email = document.getElementById("email").value;

  const newRow = stdTable.insertRow();
  newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

  form.reset();
});

function deleteRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
