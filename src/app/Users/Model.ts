export interface IUser{
    id: string,
    name: string,
    surname: string,
    mail: string,
    imageUrl: string,
    address: IAddress,
} 
    
export interface IAddress {
      address: string,
      city: string,
      cap: number
}
    
export interface ISelling{
        id: string,
        date: Date,
        product: IProduct
}
export interface IProduct{
        name: string,
        price: number,
        quantity: number
}