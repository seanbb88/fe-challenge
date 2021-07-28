export interface ErrorModel {
    message: string, 
    status: string,
}

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}
