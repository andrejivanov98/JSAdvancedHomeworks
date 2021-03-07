let table = document.getElementById("table");
btn = document.getElementById("btn");

btn.addEventListener('click',function(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(function (promise) {
            return promise.json()
        })
        .then (function(users){
            
            let userInfo = users.map(user => `${user.name} ${user.email} ${user.phone}`);

            table.innerHTML +=`
                <tr>
                <td>User Info</td>
                </tr>

                `
                table.innerHTML += `
                <tr>
                <td>${userInfo[i]}</td>
                </tr>`  
                table.innerHTML+=`</tr>`     
    
            table.innerHTML+=
        })
        })