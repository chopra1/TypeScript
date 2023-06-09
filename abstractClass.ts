abstract class TakePhoto {
    constructor(
        public takePhoto: string,
        public filter: string
    ){}
    abstract getsepia(): void
    getReelTime():number {
        return 8;
    }
}

class Instagram extends TakePhoto {
    constructor(
        public takePhoto: string,
        public filter: string,
        public burst: number
    ){
        super(takePhoto, filter);
    }
    getsepia(): void {
        console.log("sepia");
    }

}
const feature = new Instagram("click it", "filter mode-on", 8)
feature.getReelTime()