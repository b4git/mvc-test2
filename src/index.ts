import { sampleRow, SinglesRowData } from "./model";

let app = document.getElementById("app")!;
app.innerHTML = "<h1>It works</h1>";

const createTable = (sampleRows: SinglesRowData[]) => {
  if (sampleRows.length === 0) return;

  const t: HTMLTableElement = document.createElement("table");

  const headerRow = t.insertRow();

  // columns
  const columnNames = Object.keys(sampleRows[0]);
  columnNames.forEach(columnName => {
    const th = document.createElement("th");
    th.innerText = columnName;
  });

  sampleRows.forEach(rd => {
    const row = t.insertRow();
  });
};

window.onmousedown = () => {
  let elm = document.createElement("p");
  elm.innerText = "Good!";
  app.appendChild(elm);
  console.log(elm);
};
