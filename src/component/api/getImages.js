import axios from "axios";
const key='_PFoCaocbCxqI9V9zvlLMtAclxHECdMFg6v3dEP-jUo';

export const getImages=(cb)=>{
    axios.get('https://api.unsplash.com/photos/random?client_id='+key+'&count=30').then(res=>{
        cb(res.data);
    }).catch(e=>{
        console.log(e);
        
    })
}

export const serchImage=(query,cb)=>{
    axios.get('https://api.unsplash.com/search/photos?client_id='+key+'&query='+query+'&per_page=10').then(res=>{
        cb(res.data.results);
    }).catch(e=>{
        console.log(e);
    })
}