const form = document.getElementById("tableForm");
const tableContainer = document.getElementById("tableContainer");
const errorMsg = document.getElementById("errorMsg");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("cols").value);
  const prefix = document.getElementById("prefix").value || "Cell";

  if (
    !Number.isInteger(rows) || !Number.isInteger(cols) ||
    rows < 1 || rows > 20 ||
    cols < 1 || cols > 20
  ) {
    errorMsg.textContent = "Rows and Columns must be integers between 1 and 20.";
    return;
  }

  errorMsg.textContent = "";
  tableContainer.innerHTML = "";

  const table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 1; j <= cols; j++) {
      const td = document.createElement("td");
      td.textContent = `${prefix} ${i}-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
});

resetBtn.addEventListener("click", function () {
  tableContainer.innerHTML = "";
  errorMsg.textContent = "";
  form.reset();
});
