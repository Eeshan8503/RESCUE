
form=document.querySelector("#reg_form");
//saving
count=0;
form.addEventListener('submit',(e)=>{
    if(count==1){
        alert("Submitted");
        e.preventDefault();
    }
    else{
        count=1;
    e.preventDefault();
    como=[];
    quanti=[];
    if(form.com.length>1){
    for(i=0;i<form.com.length;i++){
        //console.log(form.com[i].value)
        como.push(form.com[i].value);
    }
}
else{
    como.push(form.com.value);
}
if(form.quan.length>1){
    for(i=0;i<form.quan.length;i++){
        //console.log(form.quan[i].value)
        quanti.push(form.quan[i].value);
    }
}
else{
    quanti.push(form.quan.value);
}
    db.collection('suppliers').add({
        name:  form.name.value,
        email: form.email.value,
        phoneNum: form.pno.value,
        state: form.state.value,
        city: form.city.value,
        pincode:form.pincode.value,
        commodity: como,
        quantity: quanti
    }).then((p)=>{
        alert("submitted");
        window.open("E:/web dev/mywebsite/home_page/index.html","_self");
    });
}
});

$(".addbtn").click(function(){
    $(".table").append($(".tblrow").first().clone(true,true));
    $(".table .tblrow").last().find("input").val(""); 
});
$(".dltBtn").click(function(){
    a=$(".table .tblrow");
    if(a.length==1){
    }
    else{
    $(".table .tblrow").last().remove();
    }
});