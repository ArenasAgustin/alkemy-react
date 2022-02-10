export default interface CardInterface {
    id: number;
    title: string;
    summary?: string;
    image: string;
    sourceUrl?: string;
    healthScore: number;
    pricePerServing: number;
    vegan: boolean;
    vegetarian?: boolean;
    glutenFree?: boolean;
}