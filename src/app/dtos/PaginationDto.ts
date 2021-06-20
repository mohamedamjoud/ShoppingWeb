export class PaginationDto<T> {
    public currentPage = 1;
    public pageSize = 10;
    public data: [T];
    public lastPage: number;
    /**
     *
     */
    constructor() {
    }
}
