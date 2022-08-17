import { useState,useEffect } from "react";
import Image from "./Image";

export default function Images() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchimages = async () =>{
            const response = await fetch(`https://api.unsplash.com/photos?client_id=TVbFsIO5OYfrP5zMtGPWeOjpGPOBFnoPSs1iDuJ1QpY`)
            // const response = await fetch(`https://api.unsplash.com/photos?page=1`)

            const data = await response.json()
            setImages(data)
            console.log(data)
        }

        fetchimages()
    }, [])
    return (
        <>
        {
            !images ? <h1 className="flex items-center justify-center h-screen font-bold text-center">Loading...</h1> :
            <div className="px-5 max-w7xl mx-auto">
              <h1 className="font-bold text-xl md:text-4xl lg:text-6xl my-2 lg:mt-5 lg:mb-1.5 capitalize mb-5">Gallery</h1>
              <hr className="mt-10 w-2/4" />
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-5 ">
                {
                    images.map((image) => (
                        <Image key={image.id} {...image} />
                    ))
                }
              </div>
            </div>
        }
        </>
    )
} 