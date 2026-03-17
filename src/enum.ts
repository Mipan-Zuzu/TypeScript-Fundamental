export enum DeliveryStatus {
    SUCCSES = "SUCCSES",
    PENDING = "PENDING",
    CANCELED = "CANCELED"
}

export type delivery = {
    id: number
    name: string
    status: DeliveryStatus
}