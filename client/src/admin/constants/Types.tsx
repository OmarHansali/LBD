export interface iUserType {
        username?: string,
        phoneNumber?: string,
        email?: string,
        password?: string,
}


export interface iSalleType {
    id?: number,
    type: string,
    material: [],
    number: string,
    capacity: number,
    availability: string
}

export interface iReservationType {
    id?: number,
    userId: number | null,
    salleId: number | null,
    startDate: Date,
    endDate: Date,
    duration: number | null,
    material: [],
}