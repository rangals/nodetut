
let lastLogin = new Date().toDateString();
let getLastLogin = localStorage.getItem("lastLogin");

if (getLastLogin == null || (lastLogin != getLastLogin))
{
    setTimeout(() =>{
        document.body.classList.remove("intro");
        document.body.classList.remove("endIntro");
    }, 3000);

    setTimeout(() =>{
        document.body.classList.add("noIntro");
    }, 3500);

    setTimeout(() =>{
        document.body.classList.add("endIntro");
    }, 2000);

    localStorage.setItem("lastLogin", lastLogin);
}
else
{
    document.body.classList.remove("intro");
    document.body.classList.add("noIntro");
}

function changeMode(){
    let mode = document.querySelector(".mode input");
    //Default night mode
    if(mode.checked)    document.body.classList.add("night");
    else document.body.classList.remove("night");
    
}

//reference
//-----------------------------------------------------------------
// fetch("../api/books")
   
//     // Converting received data to JSON
//     .then(response => response.json())
//     .then(json => {
  
//         // Create a variable to store HTML
//         let li = `<tr><th>ID</th><th>Name</th></tr>`;
       
//         // Loop through each data and add a table row
//         json.forEach(user => {
//             li += `<tr>
//                 <td>${user.id} </td>
//                 <td>${user.title}</td>        
//             </tr>`;
//         });
  
//         // Display result
//         document.getElementById("users").innerHTML = li;
//     })
//     .catch(err => {
//         alert(err);
//     });
//-----------------------------------------------------------------
//simple get
// fetch("http://localhost:8080/api/books")
   
//     // Converting received data to JSON
//     .then(response => response.json())
//     .then(response => console.log(response));

//-----------------------------------------------------------------
// POST request using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts", {
     
//     // Adding method type
//     method: "POST",
     
//     // Adding body or contents to send
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),
     
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// })
 
// // Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));


//-----------------------------------------------------------------
//Local storage

/*

myObject = {a: 1, b: 2, c: 3};
localStorage.setItem("uniq", JSON.stringify(myObject));
var myStorageObject = JSON.parse(localStorage.getItem("uniq"));
window.alert(myStorageObject.b);




*/