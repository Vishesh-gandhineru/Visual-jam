import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    {Works && Works.map( (work) => {
        return (
            <div key={work.id} className=''>
                <Link to={`/work/${work.slug}`}>             
                
                <div className='ImageHolder'>
                    <img src={work.meta.cover_image.url} alt="" className='WorkImagehover w-full h-[400px] md:h-[600px] object-cover object-center' />
                </div>
                
                <h2 className='font-normal text-mob-h2 mt-5 tracking-wider' >
                {work.title.rendered}
                </h2>                
                </Link>
                </div>
        )
    })}
    </section>
  )
}
