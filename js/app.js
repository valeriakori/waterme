function main(){
    
  var promise = getData();

  promise.then(function (data){
      console.log(data);
  }, 
  function (error){
      console.log('error', error);
  });
}
main();