"use server"
import * as dotenv from 'dotenv';
dotenv.config();

import prisma from '@/db/prisma';
import jwt from 'jsonwebtoken';

interface returnType {
    message: string,
    fullMessage?: string,
    status: "200" | "400" | "404" | "409" | "500",
    error?: any
    token?: string
}

export async function register(userData: RegisterType): Promise<returnType> {
    //this code distract  user fields data
    const { name, email, password } = userData;

    try {
        if (name.length >= 3 && email.length >= 12 && password.length >= 6) {
            //this code creates an verification token for the frontend
            const verification_token = jwt.sign({ data: new Date().toDateString() }, process.env.JWT_PASSWORD as string);
            //this code for hashing is for security
            const jwt_password = jwt.sign({ data: password }, process.env.JWT_PASSWORD as string);
            //this code will find all users
            const allUsers = await prisma.user.findMany()

            //if user entered data is exits on the data base code return user already exits  
            const filteredUser = allUsers.filter((user) => {
                if (user.email.toLocaleLowerCase() === email.toLocaleLowerCase() || user.name.toLocaleLowerCase() === name.toLocaleLowerCase())
                    return user;
            });

            if (filteredUser.length) {
                return { message: "Foydalanuvchi allaqachon ro'yhatdan o'tgan", status: "409" };
            }

            //if all will be ok create new user and return massage
            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: jwt_password,
                    token: verification_token
                }
            });
            return { message: "Foydalanuvchi muvaffaqiyatli yaratildi !", status: "200", token: newUser.token };

        } else {
            //if user won't entered all fields returned error
            return { message: "Hatolik malumot toliq kiritilmagan", fullMessage: "Parol uzunligi 6 tadan kam bo'lmasligi kerak, Foydalanuvchi ismi uzunligi 3 tadan kam bo'lmasligi kerak", status: "400" };
        }
    } catch (error) {
        return { message: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", status: "500", error };
    }
}


interface DecodedJwt {
    data: string; // Assuming 'data' is a string property
}

export async function login(userData: LoginType) {
    const { email, password } = userData;

    try {
        if (email.length >= 12 && password.length >= 6) {
            //this code will find all users
            const allUsers = await prisma.user.findMany();
            //if user entred fields will equal to all users data returt user
            const filteredUser = allUsers.find(user => {
                const decodedPassword = jwt.verify(user.password, process.env.JWT_PASSWORD as string) as DecodedJwt;
                return decodedPassword.data === password && user.email === email;
            });

            //if user data will be return succsecc else return error
            if (filteredUser) {
                return { message: "Foydalanuvchi muvaffaqiyatli ilovaga kirdi !", status: "200", token: filteredUser.token };
            } else {
                return { message: "Hatolik parol yoki email noto'g'ri !", status: "404" };
            }
        } else {
            //if user won't entered all fields returned error
            return { message: "Hatolik malumot toliq kiritilmagan", fullMessage: "Parol uzunligi 6 tadan kam bo'lmasligi kerak", status: "400" };
        }
    } catch (error) {
        return { message: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering')", status: "500", error };
    }
}

export async function verifyUser(verification_token: string | null) {
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


export async function getAllUsers() {
    try {
        const allUsers = await prisma.user.findMany()
        if (!allUsers)
            return { message: "Hatolik foydalanuvchilar topilmadi", status: "404" };

        return { message: "Success, hamma foydalanuvchilar", status: "200", allUsers };
    } catch (error) {
        return { message: "Server hatoligi iltimos keyinroq urunib ko'ring", status: "500" };
    }
}

export async function createAdmin(userID: string) {
    try {
        if (!userID)
            return { message: "Hatolik malumot toliq kiritilmagan", status: "400" };

        
        const user = await prisma.user.update({
            where: { id: userID },
            data: {
                role: 'ADMIN'
            },
        });
        
        if (!user)
            return { message: "Hatolik foydalanuvchilar topilmadi", status: "404" };

        return { message: "Admin yaratildi", status: "201" };


    } catch (error) {
        return { message: "Server hatoligi iltimos keyinroq urunib ko'ring", status: "500" };
    }
}



// export async function del() {
//     try {
//         const user = await prisma.user.deleteMany()

//         console.log(user);
        
//     } catch (error) {
//         return { message: "Server hatoligi iltimos keyinroq urunib ko'ring", status: "500" };
//     }
// }

