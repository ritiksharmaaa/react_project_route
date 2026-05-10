import { useLoaderData } from 'react-router-dom';

function Github(){
const data = useLoaderData()

    
    //  this is not efficient beacuse we have another method to do that at the time of click 
    // const [data , setdate ] = useState("Fetching ....")
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ritiksharmaaa')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setdate(data)

    //     })
    // } , [])
    return(
        <div className='bg-red-100 text-3xl text-center font-mono p-4 '> 
        Github Follower :  {data.following}  
              {/* we can use one more optemization we fetch data on route site  when we hover on the link it fetch data automatically and cache it . loder() in route attribute   */}

        <img src={data.avatar_url}  alt="Git Profile " width={300}  />
        </div>

    )
}

export default Github;
