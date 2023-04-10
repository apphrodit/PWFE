api.get("/current.json?key=d2ac83ff15544d1cb72115726231004&q=Sao Paulo&Lang=pt")
.then(resp =>{
    console.log(resp.data)
})


var header = document.querySelector("header")