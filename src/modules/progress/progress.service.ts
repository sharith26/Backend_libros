import { ProgressRepository } from "./progress.repository";

export class ProgressService {
    private repository = new ProgressRepository();

    async saveProgress(data: any) {
        // Lógica de negocio: Calcular porcentaje
        const percentage = (data.currentPage / data.totalPages) * 100;
        
        // Si llegó al final, cambiar estado automáticamente
        if (percentage >= 100) {
            data.status = 'finished';
            data.finishDate = new Date();
        }

        const result = await this.repository.updateProgress(data);
        return {
            ...result?.toObject(),
            percentage: percentage.toFixed(2) + '%'
        };
    }

    async getUserLibrary(userId: string) {
        return await this.repository.findByUser(userId);
    }
}