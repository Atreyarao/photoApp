import React,{useEffect,useState} from "react";
import {getImages,serchImage} from "./api/getImages";
import ImageObj from "./ImageObj";
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Navbar from "./Navbar";





const WrapperImages = styled.section`
  max-width: 100rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
const MainStyle = styled.section`
*{
    padding:0;
    margin:0
}
`;


function Main(){
    const [images,setImages]=useState([]);
    const [photoIndex,setPhotoIndex]=useState(0);
    const [open,setOpen]=useState(false);
const [query,setQuery]=useState("");
    useEffect(()=>{

getMoreImg();
    },[])

function getMoreImg(){
    getImages(data=>{
        console.log(data);
        setImages([...images,...data]);
    })
}
function sortImages(){
if(query===''){
    getMoreImg();
    return;
}
serchImage(query,data=>{
    console.log(data);
    setImages([...data])
})

}
    return(
        <>
        <MainStyle>
<Navbar />
<div style={{width:"100%",display:'flex',justifyContent:'center',marginBottom:30}}>
    <div>
    <h1>Welcome!</h1>
    <h5>Unlimited photos</h5>
    </div>
</div>
<div style={{width:"100%",display:'flex',justifyContent:'center'}}>
<div class="input-group mb-3" style={{width:"80%",}}>
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
  </div>
  <input onChange={(e)=>{
     setQuery(e.target.value)
  }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
</div>
<button onClick={sortImages} className="btn btn-lg btn-primary" style={{height:'5vh'}}>Search</button>
</div>

{open && (
          <Lightbox
            mainSrc={images[photoIndex].urls.full}
            nextSrc={images[(photoIndex + 1) % images.length].urls.full}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].urls.full}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>  setPhotoIndex((photoIndex + images.length - 1) % images.length) }
            onMoveNextRequest={() =>setPhotoIndex((photoIndex + 1) % images.length) }
          />
        )}



<InfiniteScroll
        dataLength={images.length}
        next={ getMoreImg}
        hasMore={true}
        
      >
          <div className='container' style={{display:'flex',justifyContent:'center'}}>
<WrapperImages>
{images.map((ele,index)=>{
    return(
     <div onClick={()=>{
         setPhotoIndex(index);
         setOpen(true);
     }}>   <ImageObj url={ele.urls.thumb} key={ele.id} /></div>
    )
})}
</WrapperImages>
</div>
</InfiniteScroll>
</MainStyle>
        </>
    )
}



export default Main;