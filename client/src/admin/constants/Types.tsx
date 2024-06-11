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

export interface iMaterialType {
    id?: number,
    material: string,
    quantity: number | null,
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
