export interface iEditUser {
        username?: string,
        phoneNumber?: string,
        email?: string,
        password?: string,
}


export interface iSalleType {
    id?: number,
    type: string,
    material: string,
    number: string,
    capacity: number,
    availability: string
}