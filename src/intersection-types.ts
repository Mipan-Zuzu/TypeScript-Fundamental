export interface HasPas {
    password: string
}

export interface HasId {
    id: string
}

export type ByCript = HasId & HasPas