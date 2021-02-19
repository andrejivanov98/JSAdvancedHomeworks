let btn = document.getElementById("btn");

let table = document.getElementById("table");




btn.addEventListener('click',function(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(function (response) {
            return response.json()
        })
        .then (function(response){

            table.innerHTML+=`
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Web Site</th>
                <th>Address</th>
                `
            for (let i = 0; i < response.length; i++) {
                table.innerHTML += `
                    <tr>
                        <td>${response[i].name}</td>
                        <td>${response[i].phone}</td>
                        <td>${response[i].username}</td>
                        <td>${response[i].website}</td>
                        <td>
                            <table>
                                <tr>
                                    <th>Street</th>
                                    <th>Suit</th>
                                    <th>City</th>
                                    <th>Zip Code</th>
                                </tr>
                                <tr>
                                    <td>${response[i].address.street}</td>
                                    <td>${response[i].address.suite}</td>
                                    <td>${response[i].address.city}</td>
                                    <td>${response[i].address.zipcode}</td>
                                </tr>
                            </table>
                        </td>
                        
                    </tr>`

                
                }
            table.innerHTML+=`</tr>`

         
            

        })

})