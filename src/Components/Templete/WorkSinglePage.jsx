import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TextAnimation from '../TextAnimation';
import { Helmet } from 'react-helmet';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function WorkSinglePage() {

    const [Post , setPost] = useState([]);
    const {slug} = useParams();


    useEffect(()=>{
        const url = `https://react.visualjam.in/wp-json/wp/v2/works/?slug=${slug}`
        axios.get(url).then((res)=>{
            setPost(res.data)
            
        })
    },[slug])
 
    const PostName =Object.keys(Post).length ? ( Post[0].title.rendered) : "Visual Jam" ;

  return (
        
    <main>

<Helmet>
                <meta charSet="utf-8" />
                <title>{PostName}</title>
            </Helmet>   

        {Object.keys(Post).length ? (
            <div className='my-10'>
                <TextAnimation>
                <h1 className='text-center font-medium text-mob-h1 md:text-[80px] md:my-[50px]'>{Post[0].title.rendered}</h1>
                </TextAnimation>
                <div className='flex flex-col md:flex-row md:my-10 gap-4 md:gap-10 justify-between'>
                    <TextAnimation>
                    <h2 className='text-center my-5 text-mob-h3 font-normal md:text-desk-h2 md:text-left md:w-[80%]'>{Post[0].meta.header_text}</h2>
                    </TextAnimation>
                    <div className='bg-[#f8f8f8] w-full p-4 md:w-[40%] md:p-10'>
                        <h3 className='text-center font-bold text-mob-h4 my-4 md:text-left md:text-desk-h3'>Application</h3>
                        <p className='font-medium text-mob-h5 text-center md:text-left'>{Post[0].meta.application_text}</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-5 md:my-14 my-8'>
                    {Post[0].meta.image_gallery.map((image)=>{
                        return (
                            <img src={image} className='w-[100%] h-[450px] object-cover object-center'  />
                        )
                    })}
                </div>

            </div>

        ) : (<DotLottiePlayer
            src="/Loading.lottie"
            autoplay
            loop
            className='w-[30%] m-auto'
          >
            
          </DotLottiePlayer>) 
        
        }
        

    </main>
    )
}
