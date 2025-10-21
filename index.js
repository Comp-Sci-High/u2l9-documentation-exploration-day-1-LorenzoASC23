// Async Functions with randomuser.me API
// ----------------------------------------------------

// Define a function called fetchUserData(url)
//    - It should take a URL as a parameter
//    - Use fetch() and await the response
//    - Convert the response to JSON
//    - Log out the JSON or specific info (like name or country)

async function fetchUserData(url) {
const response = await fetch(url)
const data = await response.json()
console.log(data)
return data   
}


// ----------------------------------------------------
// Create a variable for each request below (reqUrl1, reqUrl2, etc.)
// Then call your fetchUserData() function with each one.

// 1 URL to Get 8 Random Users
// Call the fetchUserData function with this URL
let url = "https://randomuser.me/api/?results=8"
fetchUserData(url)

// 2 URL to Get a Random User from Poland
// Call the fetchUserData function with this URL
let url2 = "https://randomuser.me/api/?nat=FR"
fetchUserData(url2)



// 3 URL to Get a Random User that’s Male
// Call the fetchUserData function with this URL
let url3 = "https://randomuser.me/api/?gender=female"
fetchUserData(url3)



// 4 URL to Get a Random User while Excluding Their Email
// Call the fetchUserData function with this URL
let url4 = "https://randomuser.me/api/?exc=login"
fetchUserData(url4)



// 5 Get 5 Female Users from the Colombia
// Call the fetchUserData function with this URL

let url5 = "https://randomuser.me/api/?results=5&nat=CA&gender=female"
fetchUserData(url5)


