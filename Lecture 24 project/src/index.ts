const getUsername = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector(".form") as HTMLFormElement;

const main_container = document.querySelector(".main-container") as HTMLElement;

interface userData{
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
}


function fetchUserdata (url:string){
    myCustomFetcher(url,{})
}


fetrchUserdata("https://api.github.com/users")