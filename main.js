var milkcocoa = new MilkCocoa("unii8fmjtlc.mlkcca.com");
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board;
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
}

function clickEvent(){
  var text = textArea.value;
  sendText(text);
}

function sendText(text){
  chatDataStore.push({message : text});
  console.log("送信完了!");
  textArea.value = "";
}

chatDataStore.on("push",function(data){
  addText(data.value.message);
});

function addText(text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = text;
  board.insertBefore(msgDom, board.firstChild);
}
