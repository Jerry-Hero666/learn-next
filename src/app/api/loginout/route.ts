import { NextRequest, NextResponse } from "next/server";

export async function DELETE() {
 const response = NextResponse.json(
   {
     success: true,
        msg: "Logged out successfully",
   });

   response.cookies.set("token",'',{
    maxAge:0,
   })
    return response;
}
