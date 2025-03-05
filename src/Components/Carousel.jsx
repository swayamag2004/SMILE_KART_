import { Left, Right } from "neetoicons";
import { Button } from "neetoui";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./Carousel.css";

const Carousel = ({ imageUrls ,title}) => {
  const timerRef=useRef(null);
  const [currentIndex,setCurrentIndex]=useState(0);
  const handleNext=()=>{
    setCurrentIndex(currentIndex=>(currentIndex+1)%imageUrls.length);
  }
  useEffect(()=>{
    timerRef.current=setInterval(handleNext,3000);
   return ()=>{
     clearInterval(timerRef.current);
   }
 },[]);
 const resetTimer=()=>{
   clearInterval(timerRef.current);
   timerRef.current=setInterval(handleNext,3000);
 }
  const handlePrev=()=>{
    setCurrentIndex(currentIndex=>(currentIndex-1+imageUrls.length)%imageUrls.length);
    resetTimer();
  }
 
return <div>
  <div className="flex items-center">
    <Button
      className="shrink-0 focus-within:ring-0 hover:bg-transparent"
      icon={Left}
      style="text"
      onClick={handlePrev}
    />
    <div>
    <img className="max-w-56 h-56 max-h-65 w-56" alt={title} src={imageUrls[currentIndex] } />
     <div className="align">{imageUrls.map((_,index)=>{
      let defaultClass="circle";
      const newClass="bb";
       defaultClass=index===currentIndex?defaultClass.concat(" "+newClass):defaultClass;
      return <div className={defaultClass} key={index} onClick={()=>setCurrentIndex(index)} ></div>
     })}</div>
    </div>
    <Button
      className="shrink-0 focus-within:ring-0 hover:bg-transparent"
      icon={Right}
      style="text"
      onClick={()=>{handleNext(),resetTimer()}}
    />
   
  </div>

</div>
  
};

export default Carousel;