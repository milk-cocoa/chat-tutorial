var milkcocoa = new MilkCocoa("https://io-dhxa654wp.mlkcca.com/");
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board;
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
}

function clickEvent(){
    var text = textArea.value;
    sendText(text);
    textArea.value = "";
}

function sendText(text){
  chatDataStore.push({message : text},function(data){
    console.log("送信完了!");
  });
}

chatDataStore.on("push",function(data){
  addText(data.value.message);
});

function addText(text){
  var msgDom = document.createElement("p");
  msgDom.innerText = text;
  board.appendChild(msgDom);
}