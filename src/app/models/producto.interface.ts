export interface ProductoModel{
  id:number | 0
    title: string | "",
  price: number | 0,
  description: string|"",
  categoryId: number | 0,
  images?: any | null
}