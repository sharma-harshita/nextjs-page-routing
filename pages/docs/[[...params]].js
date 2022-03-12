import {useRouter} from "next/router"

function Docs (){
    const router = useRouter();
    const {params=[]} = router.query;

    if (params.length>1) {
        return(
            <>
                <h1>{params[0]}</h1>
                <h1>{params[1]}</h1>
            </>
        )
    } else if(params.length===1){
        return(
            <>
                <h1>{params[0]}</h1>
            </>
        )
    }
    return(
        <>
            <h1>DOCS PAGE </h1>
        </>
    )
}

export default Docs