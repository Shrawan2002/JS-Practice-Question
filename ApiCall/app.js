let url = 'https://api.api-ninjas.com/v1/facts';

fetch(url).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("promise was reject");
})