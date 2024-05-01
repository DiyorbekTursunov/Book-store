import { NextResponse } from "next/server"

const POST = async (request: Request) => {
    const data = await request.json()
    console.log(data);
    
    return NextResponse.json({
        data
    })
}

export { POST }