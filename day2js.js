
document.write("Check the console for the today's date");
var d=new Date();
d.setDate(15);
document.getElementById("h1").innerHTML=d;

console.log(Date())

function html()
{
	document.getElementById("h1").innerHTML=document.write("<h1>Introduction to HTML</h1>");
	document.getElementById("p").innerHTML=document.write("<b>HTML5 is the fifth revision and newest version of the HTML standard. It offers new features that provide not only rich media support but also enhance support for creating web applications that can interact with users, their local data, and servers more easily and effectively than was previously possible.As can be seen in the HTML tag example above, there are not many components. Most HTML tags have an opening tag containing the tag name, tag attributes, a closing tag containing a forward slash, and the tag name being closed. For tags that do not have a closing tag like <img>, it is best practice to end the tag with a forward slash.Most tags are contained in a less than and greater than angle brackets, and everything between the open and close tag is displayed or affected by the tag. In the example above, the <a> tag is creating a link called 'Computer Hope' that is pointing to the hope.html file.</i>");
}
function css()
{
	document.getElementById("h1").innerHTML=document.write("<h1>Introduction to CSS</h1>");
	document.getElementById("p").innerHTML=document.write("<b>CSS stands for Cascading Style Sheets.CSS describes how HTML elements are to be displayed on screen, paper, or in other media.CSS saves a lot of work. It can control the layout of multiple web pages all at once.External stylesheets are stored in CSS files.Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2].CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.[4</i>");

}
function js()
{
	document.getElementById("h1").innerHTML=document.write("<h1>Introduction to JavaScript</h1>");
	document.getElementById("p").innerHTML=document.write("<b>JavaScript is a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage. In other words, you can make your webpage more lively and interactive, with the help of JavaScript. JavaScript is also being used widely in game development and Mobile application development.Modern JavaScript is a “safe” programming language. It does not provide low-level access to memory or CPU, because it was initially created for browsers which do not require it.JavaScript’s capabilities greatly depend on the environment it’s running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.</i>");

}
function formfun()
{
	name=document.forms[0].elements[0].value
	if(name!="")
	{
	alert("Hello"+" "+name+" "+"Welcome to Conduira!!!");
}
else
alert("Please enter a name");
}
function ifelse()
{
	

	try
	{
		n=window.prompt("Enter value of n");
		
		if(n>=101 && n<=105)
		{
			throw "Value cannot be calculated";
		}
	
	
	switch (Math.round(n/10))
	{
		case 1: if(n1==10)
		        document.write("<h2>Element is found in the range 10-100</h2>");
		        break;
		case 2: if(n>=11 && n<=20)
		        document.write("<h2>Element is found in the range 11-20</h2>");
		        break;
		case 3: if(n>=21 && n<=30)
		        document.write("<h2>Element is found in the range 21-30</h2>");
		        break;
		case 4: if(n>=31 && n<=40)
		        document.write("<h2>Element is found in the range 31-40</h2>");
		        break;
		 case 5: if(n>=41 && n<=50)
		        document.write("<h2>Element is found in the range 41-50</h2>");
		        break;
		 case 6: if(n>=51 && n<=60)
		        document.write("<h2>Element is found in the range 51-60</h2>");
		        break;
		 case 7: if(n>=61 && n<=70)
		        document.write("<h2>Element is found in the range 61-70</h2>");
		        break;
		 case 8: if(n>=71 && n<=80)
		        document.write("<h2>Element is found in the range 71-80</h2>");
		        break;
		 case 9: if(n>=81 && n<=90)
		        document.write("<h2>Element is found in the range 81-90</h2>");
		        break;
		 case 10: if(n>=91 && n<=100)
		        document.write("<h2>Element is found in the range 91-100</h2>");
		        break;
		default:
		           document.write("OOPSS!!Cannot Find the Number between 10-100");
	}

}
catch(err)
{
	console.log(err);
}

finally
{
	console.log("Switch case example");
}
}

function fibonicci()
{
	n=window.prompt("Enter Range");
	x=0;
	y=1;
document.write("Fibanocci series is:");
	document.write("<br>");
	document.write(x);
	document.write("<br>");
	document.write(y);
	document.write("<br>");
	for(i=2;i<n;i++)
	{
	
	
	  z=x+y;
	document.write(z);
	document.write("<br>");
	x=y;
	y=z;
	}
	
	
}
function strings()
{

var a=[]
var txt=String(document.getElementById("p1").innerHTML);

a=txt.split(" ");

document.write("<h1>5th word is:"+a[4]);
document.write("<h1>7th word is:"+a[6]);
document.write("<h1>10th word is:"+a[9]);

}







