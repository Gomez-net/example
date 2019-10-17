function showPic(whichpic){
	var source = whichpic.getAttribute("href");  //定义函数参数名称为whichpic，用getAttribute来获取属性href
	var placeholder = document.getElementById("place");//获取ID为place的元素并赋值给变量placeholder
	placeholder.setAttribute("src",source);//用setattribute来placeholder中的src属性刷新，src属性的值已经在source里
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("des");
	description.firstChild.nodeValue = text;
}
