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
        if(data.message=="Not Found"){
            throw new Error("Usuário não encontrado")
        }
        box.innerHTML=`
        <div class="image center">
        <img src="${data.avatar_url}" alt="GitHubImageProfile">
        </div>
        <div class="infos">
            <h1>${data.name}</h1>
            <h3>@${data.login}</h3>
            <h4>Bio: ${data.bio}</h4>
            <a class="githubLink" href="https://github.com/${data.login}">
            <i id="githubIcon" class="fa-brands fa-github fa-2xl"></i>
            </a>
        </div>
    `
    }
    catch(e){
        alert(e)
    }
}