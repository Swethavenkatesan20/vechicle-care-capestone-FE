import { useRouteLoaderData } from "react-router-dom";
import carServices from "../services/carServices"



export const loader=async()=>{
    const services =await carServices.getServices();
    return {services};
}

const Services=()=>{

    const {services}=useRouteLoaderData()

    console.log(services);


    return(
        <div></div>
    )
}

export default Services;