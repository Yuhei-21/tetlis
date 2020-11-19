const numbers = [10,6,8,9,11,2,7]
var flag1 = true
for(let i = 0; i < numbers.length; i++){
  if(numbers[i] <= 5){
    flag1 = false
  }
}

if(flag1 == true){
  console.log("フラグが立っていました")
}else{
  console.log("フラグが立っていません")
}