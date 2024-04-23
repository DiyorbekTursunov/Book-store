import { NextResponse } from "next/server";
import prisma from '@/db/prisma'

const isAdmin: boolean = false

async function userVerification() {
    const verification_token = localStorage.getItem("verification_token")
    if (!verification_token)
        return null; // Return null or undefined if verification_token is not available

    const user = await prisma.user.findMany();
    
}

export function middleware(req: Request) {
    if (isAdmin) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
    matcher: ["/admin"]
}