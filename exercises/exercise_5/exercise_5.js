const img = document.getElementById('img');

fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => {
        console.log(res);

        if(res.ok){
            res.json().then(data => {
                img.src = data[0].url
            })
        } else {
            console.log("ERROR");
            document.getElementById('error').innerHTML = "ERROR";

        }
    });    