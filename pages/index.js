import Link from "next/link";
import {useRouter} from "next/router";

function Home(){

  const router = useRouter();

  return(
    <div>
      <h1>
        Hello World
      </h1>
      <Link href="/blog"> 
        <a>Blog</a> 
      </Link>
      <br/>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br/>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <br/>
      <Link href="/product" replace>
        <a>Product</a>
      </Link>
      <br/>
      <Link href="/employee">
        <a>Employee</a>
      </Link>

      <br/>

      <button onClick={()=>router.push("/docs")}>Click to go to Docs</button>
    </div>
  )
}

export default Home