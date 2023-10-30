import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"


export default function WorkGrid() {
    
    const [Works , setWorks] = useState([]);
    
    
    useEffect ( () => {

        const getCachedData = async () => {
            const cachedData = sessionStorage.getItem('CachedWorkData');
            if (cachedData) {
                setWorks(JSON.parse(cachedData));
            } else {   
                try {

                    const url = "https://react.visualjam.in/wp-json/wp/v2/works/?order=asc";  
                   axios.get(url).then((res)=>{
                       setWorks(res.data)
                       sessionStorage.setItem('CachedWorkData', JSON.stringify(res.data));
                    })
                }catch(err){
                    console.log("Error", err)
                }        
            }
        }

        getCachedData();

    },[]) 

  return (
    <section className='WorkGrid grid md:grid-cols-2 md:gap-10 gap-4'>    
    {Works && Works.map( (work , i) => {
        return (
            <motion.div 
            initial={{opacity:0 , translateY:"10px"}}
            whileInView={{opacity:1 , translateY:0}}
            transition={{ duration:0.3, delay: i * 0.2}}
            viewport={{once:true}}            
            key={work.id}>
                <Link to={`/work/${work.slug}`}>             
                
                <div className='ImageHolder'>
                    <img src={work.meta.cover_image.url} alt="" className='WorkImagehover w-full h-[300px] md:h-[600px] object-cover object-center' />
                </div>
                
                <h2 className='font-normal text-mob-h5 md:text-mob-h2 mt-5 tracking-wider text-center md:text-left' >
                {work.title.rendered}
                </h2>                
                </Link>
                </motion.div>
        )
    })}
    </section>
  )
}
