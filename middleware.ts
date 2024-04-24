import { NextResponse } from "next/server";
import prisma from '@/db/prisma'


async function verifyUser(verification_token: string | null) {
    try {
        if (verification_token) {

            const allUsers = await prisma.user.findMany();
            const user = allUsers.find((user: any) => user.token === verification_token);
            if (!user)
                return { message: "Token invalid !!!", status: "400" };

            // Serialize user to plain JSON object
            const serializedUser = { role: user.role /* Add other necessary properties */ };

            return { message: "Fodalanuvchi ro'yhatdan o'tgan", status: "200", user: serializedUser };
        } else {
            return { message: "Token mavjud emas", status: "404" };
        }
    } catch (error) {
        return { message: "Server hatoligi iltimos keyinroq urunib ko'ring", status: "500" };
    }
}



async function verifyUserToken() {
    const verification_token = typeof window !== 'undefined' ? localStorage.getItem("verification_token") : null;
    if (verification_token) return;
    const new_verification_token = JSON.parse(verification_token)


    const response = await verifyUser(new_verification_token);

    if (response.status === "200" && response.user && response.user.role === "ADMIN") {
        return true;
    } 
}





export function middleware(req: Request) {
    const IsAdmin = verifyUserToken()
    if (!IsAdmin) {
        return NextResponse.next()
    }
    return NextResponse.redirect(new URL("/404", req.url))
}

export const config = {
    matcher: ["/admin"]
}