interface RegisterType {
    id?: string,
    name: string
    email: string
    password: string
    token?: string
    role?: string
}



interface LoginType {
    id?: string,
    name?: string
    email: string
    password: string
    token?: string
    role?: string
}



interface errorMassageType {
    readMore: boolean
    massage: string
}
