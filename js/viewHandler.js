function drawData(plants, tableContainer){
  var tableNode = document.createElement("table");
  tableContainer.appendChild(tableNode);

  initTable(tableNode);

  for (let index in plants){
    addTRToTable(plants[index].familie, plants[index].bewaesserung, plants[index].haltung, tableNode);
  }
}

function initTable(tableNode){
  addTHToTable("Familie", tableNode);
  addTHToTable("Beässerung", tableNode);
  addTHToTable("Haltung", tableNode);
}

function addTHToTable(headerText, tableNode ){
  var tableHeaderTH = document.createElement("TH");
  tableHeaderTH.appendChild(document.createTextNode(headerText));
  tableNode.appendChild(tableHeaderTH);
}

function addTRToTable(FamilyText, WateringText, KeepingText, tableNode){
  console.log(FamilyText, WateringText, KeepingText, tableNode);
  var TRNode = document.createElement('TR');
  TRNode = tableNode.appendChild(TRNode);

  addTDToTR(FamilyText, TRNode);
  addTDToTR(WateringText, TRNode);
  addTDToTR(KeepingText, TRNode);

  tableNode.appendChild(TRNode);
}

function addTDToTR(TDText, TRNode){
  var TDNode = document.createElement('TD');
  var TextNode = document.createTextNode(TDText);
  TDNode.appendChild(TextNode);
  TRNode.appendChild(TDNode);
}
