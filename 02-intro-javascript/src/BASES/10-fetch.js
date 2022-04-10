const apiKey='VPcjZ51TKxEc730a0wxI9xLgq6S9yIw9';

const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key=VPcjZ51TKxEc730a0wxI9xLgq6S9yIw9')

//peticion.then(response =>{
//    response.json().then(data=>{
//        console.log(data);
//    });
//})
//RESUMEN EXPLICITO

peticion.then(response => response.json())
    .then(({data})=>{
        console.log(data.images.original.url);
        const url =data.images.original.url;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    })
    .catch(console.warn)