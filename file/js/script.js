async function loadFile(file) {
  let text = await file.text();
  elaboraContents(text);
}
function elaboraContents(contents) {
  var table = document.getElementById("tabella");
  var lines = contents.split("\n");
  for (let i = 0; i < 5; i++) {
    let line = lines[i];
    var linePart = line.split(";");
    var tr = table.insertRow(i);
    for (let j = 0; j < 4; j++) {
      var td = tr.insertCell(j);
      td.innerHTML = linePart[j];
      td.value = linePart[j];
    }
  }
}
