let searchbtn=document.querySelector("#searchbtn");
let searchuser=document.querySelector("#searchUser");
let ui= new UI();


searchbtn.addEventListener('click',(e)=>{
    let usertext=searchuser.value;
    if(usertext != ''){
        // Fetch API
        fetch(`https://api.github.com/users/${usertext}`)
        .then(result=>{
            return result.json()
        })
        .then(data=>{
            // console.log(data);
            if(data.message=='Not Found'){
                // show alert
                ui.showAlert("User not Found!","alert alert-danger")
                
            }else{
                // show profile

                // console.log(data);
                ui.showProfile(data);
            }
        })
    }else{
        // clear profile
        ui.clearProfile("Enter username","alert alert-info");
    }
})