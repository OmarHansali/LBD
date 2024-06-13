export interface iUserType {
    id?:number,
    username?: string,
    phoneNumber?: string,
    email?: string,
    password?: string,
    role?:string,
    profile?:string,
    CEN?: string
}


export interface iSalleType {
    id?: number,
    type: string,
    material: [],
    number: string,
    capacity: number,
    availability: string,
    startHour?: string,
    endHour?: string
}

export interface iMaterialType {
    id?: number,
    name: string,
    quantity: number | null,
    availability?: boolean
    createdAt?: string
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

export interface iContactProps {
    id: number | string;
    username: string;
    profile: string;
    email: string;
    messages: [
        {
            createdAt: string;
            title: string;
            content: string;
        }
    ]
}
