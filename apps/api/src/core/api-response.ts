
export class ApiResponse<T> {
    constructor(
        private readonly success: boolean = true,
        private readonly code: number = 0,
        private readonly msg: string = 'ok',
        private readonly data: T = null
    ) { }

    public static ok<T>(data: T): ApiResponse<T> {
        return new ApiResponse<T>(true, 0, 'ok', data);
    }
}