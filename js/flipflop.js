// JavaScript Document
  $(document).ready(function () {
 if (localStorage.length != 0) {
    document.getElementById("wrapper").innerHTML = localStorage.getItem('1');
    } else {
		alert("foff");
    }
$("button").click(
function() {
//toggle(clicked_btn);

var clicked=parseInt(this.id);//document.getElementById(this.id+1).style.background="black";
if (clicked==8 || clicked==9 || clicked==10 || clicked==11 || clicked==14 || clicked==15 || clicked==16 || clicked==17 || clicked==20 || clicked==21 || clicked==22 || clicked==23 || clicked==26 || clicked==27 || clicked==28 || clicked==29)
{
	$('#'+(clicked + 6)).toggleClass("black");
	$('#'+(clicked + 1)).toggleClass("black");
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");

}

else if (clicked== 7 || clicked == 13 || clicked== 19 || clicked == 25)
{
	$('#'+(clicked + 1)).toggleClass("black");
	$('#'+(clicked + 6)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");
}

else if (clicked== 18 || clicked == 12 || clicked== 24 || clicked == 30)
{
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked + 6)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");
}

else if (clicked== 2 || clicked == 3 || clicked == 4 || clicked == 5)
{
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked + 6)).toggleClass("black");
	$('#'+(clicked + 1)).toggleClass("black");
}

else if (clicked== 32 || clicked == 33 || clicked== 34 || clicked == 35)
{
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");
	$('#'+(clicked + 1)).toggleClass("black");
}

else if ( clicked == 1)
{
	$('#'+(clicked + 1)).toggleClass("black");
	$('#'+(clicked + 6)).toggleClass("black");
	
}

else if ( clicked == 31)
{
	$('#'+(clicked + 1)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");
	
}

else if ( clicked == 6)
{
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked + 6)).toggleClass("black");
	
}

else if ( clicked == 36)
{
	$('#'+(clicked - 1)).toggleClass("black");
	$('#'+(clicked - 6)).toggleClass("black");
	
}

});
  });
