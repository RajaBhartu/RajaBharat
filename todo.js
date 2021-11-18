var main1 = document.getElementById("main");

var div = document.createElement("div");
div.setAttribute("id","mainDiv");
main1.appendChild(div);

var heading = document.createElement("h1");
div.appendChild(heading);

var headingText = document.createTextNode("Todo App");
heading.appendChild(headingText);

var divInput = document.createElement("div");
divInput.setAttribute("id","iDivision");
div.appendChild(divInput);

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placerholder","Write Here . . .");
input.setAttribute("id","InputTask");
divInput.appendChild(input);

var btn1 = document.createElement("button");
btn1.setAttribute("id","InputBtn");
btn1.setAttribute("onClick","sendData()");
divInput.appendChild(btn1);

var btn1Img = document.createElement("img");
btn1Img.setAttribute("id","BtnImg");
btn1Img.setAttribute("src","./plus.png");
btn1.appendChild(btn1Img);

var DivInputDiv2 = document.createElement("div");
DivInputDiv2.setAttribute("id","idivision2");
div.appendChild(DivInputDiv2);

var DivList = document.createElement("ul");
DivInputDiv2.appendChild(DivList);


function sendData(){
    if(input.value === ""){
        alert("Type Some Here...");
    } else{
        console.log(input.value);

        var Li1 =document.createElement("li");
        Li1.setAttribute("id",input.value);
        DivList.appendChild(Li1);

        var listDiv1 =document.createElement("div");
        Li1.appendChild(listDiv1);

        var listDiv2 = document.createTextNode(input.value);
        listDiv1.appendChild(listDiv2);

        var listDiv3 = document.createElement("div");
        listDiv3.setAttribute("id","listDiv3");
        Li1.appendChild(listDiv3);

        var EditBtn = document.createElement("button");
        EditBtn.setAttribute("class","Btns");
        listDiv3.appendChild(EditBtn);

        var BtnImg = document.createElement("img");
        BtnImg.setAttribute("id","icon1");
        BtnImg.setAttribute("src","./check.png");
        EditBtn.appendChild(BtnImg);

        var dBtn = document.createElement("button");
        dBtn.setAttribute("class","Btns");
        listDiv3.appendChild(dBtn);

        var dBtnImg = document.createElement("img");
        dBtnImg.setAttribute("id","icon2");
        dBtnImg.setAttribute("src","./close.png");
        dBtn.appendChild(dBtnImg);

        document.getElementById("InputTask").value = "";

        EditBtn.addEventListener("click", function(){
            var editvalue = prompt("Edit Here :",Li1.id);
            Li1.setAttribute("id",editvalue);
            Li1.innerHTML = editvalue;
            var listDiv4 = document.createElement("div");
            listDiv4.scroll("id","listDiv4");
            Li1.appendChild(listDiv4);
            listDiv4.appendChild(EditBtn);
            listDiv4.appendChild(dBtn);
        })
        var divdiv3 = document.createElement("div");
        divdiv3.setAttribute("id","iDivision3");
        div.appendChild(divdiv3);

        dBtn.addEventListener("click", function(){
            var DelBtnValue = dBtn.parentNode.parentNode;
            var Div3List = document.createElement("li");
            DivList.setAttribute("id","DelBtnValue.id");
            divdiv3.appendChild(Div3List);

            var Div3Text = document.createTextNode(DelBtnValue.id);
            Div3List.appendChild(Div3Text);
            DelBtnValue.remove();
        })
    }
}



