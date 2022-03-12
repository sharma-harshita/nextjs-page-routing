import {useRouter} from "next/router";

function EmpDetails (){

    const router = useRouter();
    const empId = router.query.empId;

    return(
        <h1>Employee Details of {empId}</h1>
    )
}

export default EmpDetails