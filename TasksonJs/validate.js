function verify(form)
	{
		valid=false;
		var phoneno=document.forms[0].elements[2].value;
		var phnr=new RegExp("^[\\d]+$","g"); 
		if(phoneno.match(phnr))
		{
			valid=true;
		}
		else
		{
			alert("Please enter proper Number");
			return false;
		}
		if(phoneno.length<10)
		{
			alert("Please check for the number of digits");
			return(false);
		}
		var x=document.getElementById("html").checked;
		var y=document.getElementById("css").checked;;

var z=document.getElementById("js").checked;;
res=x||y||z;
if(res==false)
{
	alert("Select atleast of the Subject");
	return false;
	document.forms[0].elements[6].focus();
}
else
{
	valid=true;
}


	}
function result()
{
var phoneno=document.getElementById("phoneno").value;
var emailid=document.getElementById("emailid").value;
var firstname=document.getElementById("firstname").value;
var clg=document.getElementById("clg").value;
document.write("Name:"+firstname);
document.write("<br>");
document.write("<br>");

document.write("Email:"+emailid);
document.write("<br>");
document.write("<br>");

document.write("Phoneno.:"+phoneno);
document.write("<br>");
document.write("<br>");

document.write("College:"+clg);
document.write("<br>");
}






