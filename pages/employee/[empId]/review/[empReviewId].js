import {useRouter} from "next/router";

function EmployeeReview (){

    const router = useRouter();
    const {empId, empReviewId} = router.query;

    return(
        <div>
            <h1>Hello Employee {empId} </h1>
            <h1>Your review is {empReviewId}</h1>
        </div>
    )
}

export default EmployeeReview