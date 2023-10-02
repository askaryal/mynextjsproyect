"use client"
import { useRouter } from "next/navigation"



export default function about() {

  const router = useRouter()

  return (
    <section>
       <h1>About</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quia ex obcaecati voluptate asperiores, hic vero totam architecto deserunt, cumque esse id nemo tempore, consequatur veritatis aperiam quo molestias repellat!</p>
      <button 
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={ () => {
          alert("ghola");
          router.push('/');
        }}
      >
        Click
      </button>
    </section>
  )
}
