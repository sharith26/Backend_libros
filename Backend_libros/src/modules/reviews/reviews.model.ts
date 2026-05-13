export interface Review {
    _id?: string;
    userId: string;
    bookId: string;
    rating: number; // 1 a 5 estrellas
    comment: string;
    createdAt?: Date;
}