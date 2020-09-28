class User {
    constructor(first_name, last_name, mail) {
        this.first_name=first_name;
        this.last_name=last_name;
        this.mail=mail;

        this.addRow();
        
    }

    addRow() {
         
        let table = document.getElementById("table");
        let new_row = document.createElement("tr");
        let edit_button = document.createElement("button");
        edit_button.setAttribute("type", "button");
        edit_button.innerHTML="Edit";

        table.appendChild(new_row);

        let new_td_firstname = document.createElement("td");
        new_td_firstname.innerHTML=this.first_name;
        new_row.appendChild(new_td_firstname);

        let new_td_lastname = document.createElement("td");
        new_td_lastname.innerHTML=this.last_name;
        new_row.appendChild(new_td_lastname);

        let new_td_mail = document.createElement("td");
        new_td_mail.innerHTML=this.mail;
        new_row.appendChild(new_td_mail);


    }

}

//=======================MAIN=====================//



let confirm_button = document.getElementById("confirm_button");
confirm_button.addEventListener("click", function(e) {
    
    let first_name_value = document.getElementById("first_name_input").value;
    let last_name_value = document.getElementById("last_name_input").value;
    let mail_value = document.getElementById("mail_input").value;

    let user1 = new User(first_name_value, last_name_value, mail_value);
 
}); 


let gen_user_button = document.getElementById("gen_user_button");
gen_user_button.addEventListener("click", function(e) {


    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => { 
            let gen_first_name = data.results[0].name.first;
            console.log(gen_first_name);

            let gen_last_name = data.results[0].name.last;
            console.log(gen_last_name);

            let gen_email = data.results[0].email;
            console.log(gen_email);

            let random_user = new User(gen_first_name, gen_last_name, gen_email);
        }) 
    
})
 

let picked_value = document.getElementById("dropdown");

picked_value.addEventListener("change", function(e){

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => { 

        for(let i = 0; i < Number(picked_value.value); i++ ) {
        let gen_first_name = data.results[i].name.first;
        console.log(gen_first_name);

        let gen_last_name = data.results[i].name.last;
        console.log(gen_last_name);

        let gen_email = data.results[i].email;
        console.log(gen_email);

        let random_user = new User(gen_first_name, gen_last_name, gen_email);

        }
        
    }) 


})










//https://randomuser.me/api/?results=5000

















