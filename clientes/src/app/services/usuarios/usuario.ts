export interface Usuario {
    id?: number,
    name: string,
    email: string,
    type_user: string,
    password: string,
    photo?: string,
    created_at?: string,
    updated_at?: string,
    remember_token?: string
}
