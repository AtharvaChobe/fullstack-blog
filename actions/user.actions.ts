import dbConfig from "@/libs/dbConfig"
import userModel from "@/models/userModel";
import { NextResponse } from "next/server";

export const addUser = async (user:any) =>{
    try {
        await dbConfig();
        const newUser = await userModel.create(user);
        return NextResponse.json({newUser})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error})
    }
}