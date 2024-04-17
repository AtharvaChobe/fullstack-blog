import { currentUser } from "@clerk/nextjs"

const getCurrentUser = async () =>{
    const user = await currentUser();
    if(user) return user;
}

export default getCurrentUser;