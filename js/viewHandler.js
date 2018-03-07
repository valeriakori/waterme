function drawData(plants, tableContainerId){
  console.log('drawData', plants, tableContainer);
  var tableContainer = document.getElementById(tableContainerId);
  var tableNode = document.createElement("table");
  tableContainer.appendChild(tableNode);


  var tableHeaderTH = document.createElement("TH");
  tableHeaderTH.appendChild(document.createTextNode("Family"));
  tableNode.appendChild(tableHeaderTH);

  tableHeaderTH = document.createElement("TH");
  tableHeaderTH.appendChild(document.createTextNode("Watering"));
  tableNode.appendChild(tableHeaderTH);

  tableHeaderTH = document.createElement("TH");
  tableHeaderTH.appendChild(document.createTextNode("Keeping"));
  tableNode.appendChild(tableHeaderTH);

  var currentPlant;
  var currentPlantEntry;
  var currentPlantTR;

  var currentPlantFamilyTD;
  var currentPlantWateringTD;
  var currentPlantKeepingTD;

  var currentTextNode;

  for (let index in plants){
    console.log(plants[index]);
    currentPlant = plants[index];
    currentPlantEntry = document.createElement('TR');
    currentPlantTR = tableNode.appendChild(currentPlantEntry);

    currentPlantFamilyTD = document.createElement('TD');
    currentPlantKeepingTD = document.createElement('TD');
    currentPlantWateringTD = document.createElement('TD');

    currentTextNode = document.createTextNode(currentPlant.family);
    currentPlantFamilyTD.appendChild(currentTextNode);

    currentTextNode = document.createTextNode(currentPlant.wateringPerWeek);
    currentPlantKeepingTD.appendChild(currentTextNode);

    currentTextNode = document.createTextNode(currentPlant.keeping);
    currentPlantWateringTD.appendChild(currentTextNode);

    currentPlantTR.appendChild(currentPlantFamilyTD);
    currentPlantTR.appendChild(currentPlantKeepingTD);
    currentPlantTR.appendChild(currentPlantWateringTD);

  }

}
