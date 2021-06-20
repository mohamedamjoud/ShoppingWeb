export class ProductDto {
   constructor(
       private id: number,
       private title: string,
       private price: number,
       private category: number,
       private imageUrl: string,
   ) {}
}
export class ProductForCreationDto {
    constructor(
        private title: string,
        private price: number,
        private category: number,
        private imageUrl: string,
    ) {}
}
export class ProductDtoPagination {
    constructor(
        public id: number,
        public price: number,
        public title: string
    ) {}
 }
