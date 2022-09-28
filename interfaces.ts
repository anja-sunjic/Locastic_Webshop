import { CartType, ContentType, WorkshopData } from "./types";

export interface CartInterface {
    cart: CartType,
    setCart: any
}

export interface WsCartInterface {
    workshop: ContentType,
    cart: CartType,
    setCart: any
}

export interface SingleWsInterface {
    data: WorkshopData,
    cart: CartType,
    setCart: any
}

export interface WorkshopDataSidebar {
    data: WorkshopData,
    setData: any
}

export interface CheckoutInterface {
    cart: CartType,
    setCart: any,
    isOpen: boolean,
    setIsOpen: any
}