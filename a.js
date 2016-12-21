var i=0;

var n="<br>";
var b=new Array();
	   
for(i=0;i<500;i++){
	b[i]=new Array();
}
i=0;

	
function postit(){
	i++;
	b[i][0]="ROM";
	b[i][1]=document.getElementById("tweet").value;

	$("t").prepend("<br>"+b[i][0]+":"+b[i][1]);
	document.getElementById("tweet").value="";
}