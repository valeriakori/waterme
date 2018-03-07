function main(){

  var promise = getData();

  promise.then(function (data){
      // data = [{"family":"test", "wateringPerWeek":0.1, "keeping":"outdoor"}]

      console.log('got plants',data);
      drawData(data, 'tableContainer');
  },
  function (error){
      console.log('error', error);
  });
}

main();
