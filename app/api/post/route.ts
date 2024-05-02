
import { NextResponse } from 'next/server';

// Метод CheckPerformTransaction
const POST = async (req: Request) => {
    try {
        const { method, params } = await req.json()


        // Проверяем наличие параметров
        if (!params.amount || !params.account || !params.account.phone) {
            return NextResponse.json({ error: 'Invalid request parameters' });
        }

        // Здесь вы можете выполнить дополнительные проверки и логику в зависимости от вашего приложения

        // Предположим, что ваше приложение решает, что транзакция возможна
        const allow = true;

        // Отправляем результат в ответе
        return NextResponse.json({ allow });
    } catch (error) {
        return NextResponse.json({ status: "500", massage: "Internal server error" })
    }
};

export { POST }