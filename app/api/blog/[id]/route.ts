import dbConfig from "@/libs/dbConfig"
import blogModel from "@/models/blogModel";
import { NextResponse } from "next/server"

export async function GET(req:any, {params}:any){
    try {
        await dbConfig();
        const {id} = params;
        const blog_by_id = await blogModel.findOne({_id: id});
        return NextResponse.json({blog_by_id}, {status:200});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"got error"})
    }
}
export async function DELETE(req:any, {params}:any) {
    try {
        await dbConfig();
        const { id } = params;
        await blogModel.findByIdAndDelete(id);
        return NextResponse.json({message:"deleted sucessfully"})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"failed to delete"})
    }
}