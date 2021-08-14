const form=document.querySelector("#reg_form");
document.querySelector(".sbtbtn").addEventListener('click',(e)=>{
    e.preventDefault();
    login();
});
function login(){
    db.collection('authbase').where('email','==',form.email.value).get().then((snapshot)=>{
        var l=snapshot.docs.length;
        if(l>0){
        if(snapshot.docs[0].data().password==form.password.value){
            window.open("E:/web dev/mywebsite/supplier_form/index.html","_self");
        }
        else{
            alert("Invalid Password");
        }
    }
    else{
        alert("acc doesnt exist please signup");
        window.open("E:/web dev/mywebsite/sign-up/index.html","_self")

    }
    });
}