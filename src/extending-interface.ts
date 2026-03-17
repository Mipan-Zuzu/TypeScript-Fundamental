export interface ApiKit {
    method: string,
    type: string
}


export interface WeatherApi extends ApiKit {
    body: string[]
}