import Posts from '../page'
import { Suspense } from 'react'

async function loadPost(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return data;
}
export default async function page({ params }) {

 
  const posts = await loadPost( params.postId );

  return (
    <div>
      <h1>{ posts.id } .- { posts.title } </h1>
      <p>{ posts.body } </p>
      
      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={ <div>loading...</div>}>
        <Posts/>  
      </Suspense>
      


    </div>
  )
}
