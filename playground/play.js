class HttpError extends Error {
    constructor(response){
        super(`$(response.status) for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url){
    let result = await fetch(url);
    if (result.status == 200){
        return result.json();
    } else {
        throw new HttpError(result)
    }
}

async function demoGithubUser(){
    let user;
    while(true){
        let name = prompt("Enter a name? ", "smith");
        try{
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (err){
            if( err instanceof HttpError && err.response.status == 404){
                alert("No such user, please reenter");
            } else {
                throw err;
            }
        }
        

        alert(`Full name: ${response.name}`);

        return user;
    }
    l
}

async function loadJson(url){
    try{
        let response = await fetch(url);
        if(response.status == 200){
            return response.json();
        } else {
            throw new Error(response.status);
        }
    } catch(err){
        alert(err);
    }
    
}