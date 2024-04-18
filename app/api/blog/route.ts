import dbConfig from "@/libs/dbConfig"
import blogModel from "@/models/blogModel";
import { auth, useAuth } from "@clerk/nextjs";
import { NextResponse } from "next/server"


export async function POST(req:any){
    try {
        await dbConfig();
        const {title, body, image} = await req.json();
        await blogModel.create({title, body, image});
        return NextResponse.json({message:"blog created"})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"failed to post blog"})
    }
}

export async function GET(req:any){
    try {
        await dbConfig();
        const blogs = await blogModel.find();
        return NextResponse.json({blogs})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"failed to get"})
    }
}

// export async function DELETE(req:any) {
//     try {
//         await dbConfig();
//         const { id } = req.params;
//         await blogModel.findByIdAndDelete(id);
//         return NextResponse.json({message:"deleted sucessfully"})
        
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json({message:"failed to delete"})
//     }
// }