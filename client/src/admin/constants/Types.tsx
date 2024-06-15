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
    materiels: [],
    number: string,
    capacity: number,
    availability: string | boolean,
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
dateReservation: string,
    heureReservation: string,
    duration: number | null,    
    code: number,
}

export interface iContactProps {
    id: number;
    name: string;
    email: string;
    object: string;
    body: string,
    seen: boolean,
}
