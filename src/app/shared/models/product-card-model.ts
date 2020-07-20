export class Card{
    constructor(
        public imagPath: string,
        public title: string,
        public caption: string,
        public price?: string,
    ) {}
}