form=document.querySelector("#signup_form");
count=0;
//saving
document.querySelector(".sbtbtn").addEventListener('click',(e)=>{
    e.preventDefault();
    let a=$(".p").val();
    let b=$(".rp").val();
    if(a!=b){
        alert("Passwords dont match");
    }
    else if(count==1){
        alert("Already submitted")
    }
    else{
        var l;
        db.collection('authbase').where('email','==',form.email.value).get().then((snapshot)=>{
            console.log(snapshot.docs);
            l=snapshot.docs.length
                if(l==0){
                count=1;
            db.collection('authbase').add({
                name: form.name.value,
                email: form.email.value,
                password:form.password.value
            });
            alert("sign-up successfull, Please Login");
            window.open("E:/web dev/mywebsite/login/index.html")
        }
                else{
                    alert("acc already exists");
                }
            });
}
});
$(".sbtbtn").click(function(){
    let a=$(".p").val();
    let b=$(".rp").val();
    if(a!=b){
        alert("Passwords dont match");
    }
});