import prisma from '@/db/prisma';
import jwt from 'jsonwebtoken';

export async function register(userData: RegisterType) {
    const { name, email, password } = userData;

    try {
        if (name.length >= 3 && email.length >= 12 && password.length >= 6) {
            const jwt_password = jwt.sign({ data: password }, process.env.JWT_PASSWORD as string);
            const verification_token = jwt.sign({ data: new Date().toDateString() }, process.env.JWT_PASSWORD as string);

            const newUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    password: jwt_password,
                    token: verification_token
                }
            });

            return { message: "Foydalanuvchi muvaffaqiyatli yaratildi !", newUser };
        } else {
            return { message: "Hatolik malumot toliq kiritilmagan" };
        }
    } catch (error) {
        return { message: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering", error };
    }
}


interface DecodedJwt {
    data: string; // Assuming 'data' is a string property
}

export async function login(userData: LoginType) {
    const { email, password } = userData;

    try {
        if (email.length >= 12 && password.length >= 6) {
            const allUsers = await prisma.user.findMany();
            const filteredUser = allUsers.find(user => {
                const decodedPassword = jwt.verify(user.password, process.env.JWT_PASSWORD as string) as DecodedJwt;
                return decodedPassword.data === password && user.email === email;
            });

            if (filteredUser) {
                return { message: "Foydalanuvchi muvaffaqiyatli ilovaga kirdi !", token: filteredUser.token };
            } else {
                return { message: "Hatolik foydalanuvchi mavjud emas" };
            }
        } else {
            return { message: "Hatolik malumot toliq kiritilmagan" };
        }
    } catch (error) {
        return { message: "server hatoligi iltimos keyinroq urunib ko'ring, ('Agar siz foydalanuvchi bo'lsangiz bizga habar bering')", error };
    }
}