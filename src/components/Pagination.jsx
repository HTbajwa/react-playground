import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [posts, setPosts] = useState([]);
const [page, setPage] = useState(1);
const [search, setsearch] = useState("")
const filteredpost=posts.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then(res => res.json())
    .then(data => setPosts(data));
}, [page]);

  return (
    <div>
        <input type="text" placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)} />
    <h1>
     {
         filteredpost.map((post,key)=><div key={key}>
            
           {
            search?  <li>
                {post.title}
            </li> :""
           }
            </div>)
    }   
        </h1>
    <ul>
        {
         posts.map((post,key)=><div key={key}>
            
            <li>
                {post.title}
            </li>
            </div>)
    }
    </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
<button onClick={() => setPage(page + 1)}>Next</button>

    </div>
  )
}

export default Pagination
