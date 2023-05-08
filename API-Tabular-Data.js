// 1st attempt - error 
// const apiURL = "https://jsonplaceholder.typicode.com/users"

// getDatafromAPI(apiURL)

// async function getDatafromAPI(url)
// {
//     let data = await fetch(url)
//     let result = await data.json()
//     console.log(result)
//     let placeholder = document.querySelector("#OutPut-Data")
//     let out = "";
//     for (let url of url){
//         out += `
//          <tr>
//             <td>${url.id}</td>
//             <td>${url.name}</td>
//             <td>${url.username}</td>
//             <td>${url.email}</td>
//             // <td>${url.address}</td>
//             // <td>${url.company}</td>
//             // <td>${url.website}</td>
            
//          </tr>
//         `;
//     }
//     placeholder.innerHTML = out;
// }

// getDatafromAPI(apiURL)

// 2nd attempt Working for list for name value

// fetch('https://jsonplaceholder.typicode.com/users')
//  .then(res => {
//     return res.json();
//  })
//  .then(data => {
//     data.forEach(user => {
//         const markup = ` <li>${user.name}</li>`;  
//         document.querySelector('ul').insertAdjacentHTML('beforeend', markup)
//     });
//  })
//  .catch(error => console.log(error));
function display(data){
   console.log(data)
   data.forEach(user => {
      var tr = document.createElement("tr")
      var td1 = document.createElement("td")
      var td2 = document.createElement("td")
      var td3 = document.createElement("td")
      var td4 = document.createElement("td")

      td1.innerHTML= `${user.id}`
      td2.innerHTML= `${user.name}`
      td3.innerHTML= `${user.username}`
      td4.innerHTML= `${user.email}`

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      tr.appendChild(td4)


              
              document.querySelector('tbody').appendChild(tr)
          });
   
}




 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => {
    return res.json();
 })
 .then(data => {
    display(data)

 })
 .catch(error => console.log(error));