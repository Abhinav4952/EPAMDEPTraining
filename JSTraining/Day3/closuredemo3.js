/*
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
*/

function createSecretHolder(secret) {
  var res=secret;
  return {
    getSecret:function(){
                return res;
              },
    setSecret:function(sec){
                res=sec;
              }
  };
}
