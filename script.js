let box = document.getElementById("centralBox")
let form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input = document.getElementById("searchbar")
    getData(input.value)
})
async function getData(userName){
    try{
        var request = await fetch(`https://api.github.com/users/${userName}`);
        var data = await request.json()
        console.log(data)
    }
    catch(e){
        alert("Usuário não encontrado")
    }
    box.innerHTML=`
    <div class="image center">
        <img src="${data.avatar_url}" alt="GitHubImageProfile">
        </div>
        <div class="infos">
            <h1>${data.name}</h1>
            <h3>@${data.login}</h3>

            <h4>${data.bio}</h4>
        </div>
    `
}