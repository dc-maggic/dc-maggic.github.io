window.onload = function(){
    var data = [
        {title:'计算机程序的构造和解释',url:'1148282',img:'sicp.jpg',infor:'看完第二章拉'},
        {title:'JavaScript DOM编程艺术',url:'26351021',img:'dom.jpg',infor:'学完还要再自己做一遍才会巩固知识'},
        {title:'你不知道的JavaScript（上卷）',url:'26351021',img:'ydk1.jpg',infor:'巩固基础'},
        {title:'JavaScript语音精粹',url:'11874748',img:'jsyyjc.jpg',infor:'巩固基础'},
        {title:'图解HTTP',url:'25863515',img:'http.jpg',infor:'需要多看几遍不然容易忘记'},
        {title:'深入理解计算机系统（原书第3版）',url:'26912767',img:'csapp.jpg',infor:'巩固基础，只看完三章'},
        {title:'C++ Primer 中文版',url:'25708312',img:'C++.jpg',infor:'为了了解对象是什么'},
        // {title:'',url:'',img:'',infor:''},
    ];
    var ul = document.getElementsByClassName("book")[0];
    for(var i=0; i < data.length; i++){
        
        var li = document.createElement("li");
        li.setAttribute("class","pic");
        var  link = document.createElement("a"),
        img = document.createElement("img"),
        div = document.createElement("div"),
        span = document.createElement("span");
        ul.appendChild(li);
        link.setAttribute("href","https://book.douban.com/subject/"+data[i].url);
        var olink = link;
        olink.textContent = data[i].title;
        img.setAttribute("src","pic/"+data[i].img);
        var imglink = link.appendChild(img);
        li.appendChild(imglink);
        imglink.setAttribute("class","pic");
        span.textContent = data[i].infor;
        span.setAttribute("class","infor");
        div.appendChild(olink);
        div.appendChild(span);
        li.appendChild(div);
    }
    
    
}