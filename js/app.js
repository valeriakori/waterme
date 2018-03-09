function main(){
  var promise = getData('api');

  promise.then(function (data){
      var tableContainer = document.getElementById('tableContainer');
      drawData(data, tableContainer);
  },
  function (error){
      console.log('error', error);
  });
}

main();
