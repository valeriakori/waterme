function main(){
  var promise = getData('2');

  promise.then(function (data){
      var tableContainer = document.getElementById('tableContainer');
      drawData(data, tableContainer);
  },
  function (error){
      console.log('error', error);
  });
}

main();
