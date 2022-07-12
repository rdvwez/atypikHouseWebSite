export interface Reservation {
    id?:string;
    TtcPrice: number;
    bookingStartDate?: Date;
    bookingEndDate?: Date;
    bookingDate?: Date;
    location: string;
    comments?: string ;
    reservationState: boolean;

}