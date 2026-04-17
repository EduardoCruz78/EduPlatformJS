import { AppError } from '../errors/app-error.ts';

export abstract class UseCase<Input, Output> {
    async execute(input: Input): Promise<Output> {
        try {
            return await this.handle(input);
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }

            throw AppError.internal(
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    protected abstract handle(input: Input): Promise<Output>;
}
