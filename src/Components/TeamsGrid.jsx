import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function TeamsGrid() {
    
    const [Teams , setTeams] = useState([]);
    
    
    useEffect ( () => {

        const getCachedData = async () => {
            const cachedData = sessionStorage.getItem('CachedTeamsData');
            if (cachedData) {
                setTeams(JSON.parse(cachedData));
            } else {   
                try {

                    const url = "https://react.visualjam.in/wp-json/wp/v2/teams/";  
                   axios.get(url).then((res)=>{
                       setTeams(res.data)
                       sessionStorage.setItem('CachedTeamsData', JSON.stringify(res.data));
                    })
                }catch(err){
                    console.log("Error", err)
                }        
            }
        }

        getCachedData();

    },[]) 

    console.log(Teams)
  return (
    <section className='WorkGrid grid md:grid-cols-3 md:gap-10 gap-4'>    
    {Teams && Teams.map( (work) => {
        return (
            <div key={work.id} className=''>                         
                
                <div>
                    <img src={work.meta.profile_image.url} alt="" className='w-full h-[400px] md:h-[400px] object-contain object-center' />
                </div>
                
                <h2 className='font-medium text-mob-h2 tracking-wider text-center' >
                {work.title.rendered}
                </h2>
                <h6 className='font-normal text-[18px] mt-2 tracking-wider text-center' >
                {work.meta.designation}
                </h6>                 
                </div>
        )
    })}
    </section>
  )
}
