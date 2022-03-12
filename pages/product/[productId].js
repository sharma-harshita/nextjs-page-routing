import {useRouter} from "next/router";


// This hooks is to fetch the id from the url . This hooks return router variable which contains query parameter which will give  us the product id

function ProductDetails (){

    const router = useRouter();
    const id = router.query.productId;
    
    return(
        <h1>Product Details {id}</h1>
    )
}

export default ProductDetails