export interface Category  {
    name: string,
    slug: string,
    id: string,
    flag?: string,
    alpha2?:string,
    sport: {
        name: string,
        slug: string
    }
}