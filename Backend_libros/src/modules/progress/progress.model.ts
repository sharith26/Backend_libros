export interface Progress {
    _id?: string;
    userId: string;
    bookId: string;
    currentPage: number;
    totalPages: number; // Necesario para calcular el %
    status: 'reading' | 'finished' | 'dropped';
    startDate?: Date;
    finishDate?: Date;
}