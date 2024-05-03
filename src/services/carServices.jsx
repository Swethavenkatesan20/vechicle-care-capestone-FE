import { instance, protectedInstance } from './instance';



const carServices={
    getServices: async()=>{
        return protectedInstance.get("/services");
    }
}

export default carServices

