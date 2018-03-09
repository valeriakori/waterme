function drawData(plants, tableContainer){
  var tableNode = document.createElement("table");
  tableContainer.appendChild(tableNode);

  initTable(tableNode);

  for (let index in plants){
    addTRToTable(plants[index].family, plants[index].wateringPerWeek, plants[index].keeping, tableNode);
  }
}

function initTable(tableNode){
  addTHToTable("Family", tableNode);
  addTHToTable("Watering", tableNode);
  addTHToTable("Keeping", tableNode);
}

function addTHToTable(headerText, tableNode ){

  var tableHeaderTH = document.createElement("TH");
  tableHeaderTH.appendChild(document.createTextNode(headerText));
  tableNode.appendChild(tableHeaderTH);

}

function addTRToTable(FamilyText, WateringText, KeepingText, tableNode){

  var TRNode = document.createElement('TR');
  TRNode = tableNode.appendChild(TRNode);

  addTDToTR(WateringText, TRNode);
  addTDToTR(KeepingText, TRNode);
  addTDToTR(FamilyText, TRNode);

  tableNode.appendChild(TRNode);
}

function addTDToTR(TDText, TRNode){
  var TDNode = document.createElement('TD');
  var TextNode = document.createTextNode(TDText);
  TDNode.appendChild(TextNode);
  TRNode.appendChild(TDNode);
}
