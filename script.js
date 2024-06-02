const jokes = document.querySelector(".joke");
const btn = document.querySelector("#btn");

console.log(jokes);
console.log(btn);


// const generatejokes = () =>{

//     const setHeader = {
//         headers : {
//             Accept :  "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         console.log(data);
//         jokes.innerHTML=data.joke;
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }


const generatejokes = async()=>{
    try{
    const setHeader = {
                headers : {
                    Accept :  "application/json"
                }
            }

           const res = await fetch('https://icanhazdadjoke.com', setHeader)
           const data = await res.json();
           jokes.innerHTML=data.joke;
}
catch(err){
    console.log(`the error is ${err}`);
}
}

btn.addEventListener('click',generatejokes);
generatejokes();