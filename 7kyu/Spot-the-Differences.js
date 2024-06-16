//Write a program spot_diff/Spot that will compare the two strings and return a list with 
//the positions where the two strings differ. 

//Exemples
//String 1: "abcdefg"
//String 2: "abcqetg"
//return [3, 5]

function spot_diff(st1, st2){
    let list = [];
    
    if(st1.length == st2.length){
        for(let i = 0; i<st1.length; i++){
            if(st1[i] != st2[i]){
              list.push(i);
            }
          }
          return list;
    }
    return "Erreur";
    
}
console.log(spot_diff('abcdefg', 'abcqetg'));
//tests


