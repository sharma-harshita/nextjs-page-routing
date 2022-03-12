import Link from "next/link"
import { useState } from "react"

function Product(){
    const [products, setProducts] = useState([{id:1,name:"Product 1"},{id:2,name:"Product 2"}, {id:3, name:"Product 3"}])
    return(
        <>
            {products.map((value, index)=>{
                return(
                    <div>
                        <Link href={`/product/${value.id}`}>
                        <a><h1>{value.name}</h1></a>
                        </Link> 
                    </div>
                )
            })}

            <Link href="/">
                <a>Go to Home Page</a>
            </Link>
        </>
    )
}

export default Product