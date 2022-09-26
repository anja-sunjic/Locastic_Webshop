export type ItemType = {
    id: number,
    imageUrl: string,
    title: string,
    price: number,
    quantity: number,
    totalPrice: number,
}

export type ProductType = {
    items: Array<ItemType>,
    totalQuantity: number,
    totalCartPrice: number,
}

export type OrderType = {
    products: Array<ProductType>,
    totalPrice: number,
    id: number,
}