var i=0;
var name;

var n="<br>";
var b=new Array();
	   
for(i=0;i<500;i++){
	b[i]=new Array();
}
i=0;


function DataReceive(){
		//?以降の文字を取得する
	name = location.search.substring(2, location.search.length);
		//エスケープされた文字をアンエスケープする
	data = unescape(name);
		//アラートで?以降の文字を表示する
//	alert(data);
}

window.onload = DataReceive;

	
function postit(){
	i++;
	b[i][0]=name;
	b[i][1]=document.getElementById("tweet").value;

	$("t").prepend("<br>"+b[i][0]+":"+b[i][1]);
	document.getElementById("tweet").value="";
}

function move(){
	if(event.keyCode==13)   {
		postit();
	}

}
document.onkeydown=move;

