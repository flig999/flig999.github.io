async function getDadJoke(){
    const url = 'https://icanhazdadjoke.com/search?term=hipster';
    let h = new Headers({
        "Accept": "application/json", 
        "User-Agent": "WDD-230 Test User Agent https://flig999.github.io"
    });
    const response = await fetch(url, { headers : h} );
    if(response.status == 200){
        return response.json();
    }
    else{
        throw new Error('No dad jokes found: ' +response.status);
    }
}

function newJoke(){
    const dad_id = document.getElementById("dad-joke");
    dad_id.innerHTML = "";
    dad_id.classList.remove("small");
    const joke = getDadJoke()
    .then(function(j){
        dad_id.innerHTML = j['results'][1]['joke'];
        if(j['results'][1]['joke'].length > 85){
            dad_id.classList.add('small');
        }
    }
    )
}
window.addEventListener('load',(event)=>{
    newJoke();
})