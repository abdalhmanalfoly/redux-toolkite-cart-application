import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Home() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        const fetchposts = async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(id)}`)
            const data = res.data;
            setPosts(data)
            console.log(data);

        }
        fetchposts();
    }, [id])
  return (
      <div className='text-xl'>
        
      hello
      <div>
        <input type="text" className='border p-2 m-2' placeholder='Search...'
        value={id}
        onChange={(e) => setId(e.target.value)}
        />
      </div>
      {posts ? (
        <div key={posts.id} className='border p-2 m-2'>
            <h1 className='text-2xl font-bold'>{posts.title}</h1>
            <p className='text-lg'>{posts.body}</p>
        </div>
      ) : (
        <div className='text-red-500'>No Post Found</div>
      )
         
        
            
        
         }
</div>
  )
}

export default Home ;
