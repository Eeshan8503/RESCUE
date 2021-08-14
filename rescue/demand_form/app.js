const form=document.querySelector("#reg_form");
function result(a,k){
    for(i=0;i<k.length;k++){
    db.collection('suppliers').where('city','==',a).where('commodity','array-contains',k[i]).get().then((snapshot)=>{
        snapshot.docs.forEach(element => {
            render(element);    
        });
     });   
    }
}
//render
body=document.querySelector("body");
function render(doc){
    $(".diagonalimg").remove();
    s=doc.data().commodity;
    t=doc.data().quantity;
    var ul=document.createElement("ul");
    var table=document.createElement("table");
    //var tr=document.createElement("tr");
   // var td=document.createElement("td");
    var li=document.createElement("li");
    var supplies=document.createElement("h1");
    var div=document.createElement("div");
    var h1=document.createElement("h1");
    var supOffered=document.createElement("h3");
    var phno=document.createElement("h3");
    var email=document.createElement("h3");
    var city=document.createElement("h3");
    var center=document.createElement("center");
    h1.textContent=doc.data().name;
    h1.classList.add("badiya");
    div.classList.add("boxx");
    div.style.height="fit-content"
    supplies.textContent="Supplies Offered"
    supplies.classList.add("adiya");
    phno.textContent="Ph.Num: "+doc.data().phoneNum;
    city.textContent="City: "+doc.data().city;
    phno.classList.add("ep")
    email.textContent="Email: "+doc.data().email;
    email.classList.add("ep")
    city.classList.add("ep")
    for(i=0;i<s.length;i++){
        var tr=document.createElement("tr");
        var tdc=document.createElement("td");
        var tdq=document.createElement("td");
        tdc.textContent=s[i];
        tdq.textContent=t[i];
        tr.appendChild(tdc);
        tr.appendChild(tdq);
        table.appendChild(tr);
    }
    //ul.appendChild(li);
    center.appendChild(h1);
    div.appendChild(center);
    div.appendChild(phno);
    div.appendChild(email);
    div.appendChild(city);
    div.appendChild(supplies);
    div.appendChild(table);
    body.appendChild(div);
}
//saving
count=0;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(count==1){
        alert("submitted");
    }
    else{
        count=1;
    k=[];
    if(form.req.length>1){
        for(i=0;i<form.req.length;i++){
            console.log(form.req[i].value)
            k.push(form.req[i].value);
        }
    }
    else{
        k.push(form.req.value);
    }
    db.collection('demands').add({
    name:  form.name.value,
    email: form.email.value,
    phoneNum: form.pno.value,
    state: form.state.value,
    city: form.city.value,
    pincode:form.pincode.value,
    req : k
    });
    result(((form.city.value).toLowerCase()),k);
}
//window.open("E:/web dev/mywebsite/home_page/index.html");
});


const aa=$(".content").first().clone(true,true);
$("input").on("click",function(){
    $(this).addClass("anima"); 
});
$("input").focusout(function(){
    $("label").removeClass("anima"); 
});
$(".addbtn").click(function(){
    $(".container").append($(".content").first().clone(true,true));
    $(".container .content").last().find("input").val(""); 
});
$(".dltBtn").click(function(){
    $(".container .content").last().remove();
});