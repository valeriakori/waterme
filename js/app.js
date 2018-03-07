function main(){
    console.log('test');
  var promise = getData();

  promise.then(function (data){
      console.log(data);
  }, 
  function (error){
      console.log('error', error);
  });
}
console.log('test');
main();