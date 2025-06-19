import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGif  = (category)=>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

   const loadImages = async (category) => {
     const images = await getGifts(category);
     setImages(images);
     setIsLoading(false)
   };

   useEffect(() => {
     loadImages(category);
   }, []);

    return ({
        images,
        isLoading
    })
}