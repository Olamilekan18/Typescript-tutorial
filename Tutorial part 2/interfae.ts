interface TakePhoto{
    camerMode : string;
    filter: string;
    burst: number;
}

class Instagram implements TakePhoto {
    constructor(
        public camerMode: string,
        public filter: string,
        public burst: number
    ) {}
} 