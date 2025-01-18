abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
   ){}
   abstract getCamera (): void
}

// abstract class is when you want to create a class taht cannot create an object
// can create froom those that extend it

class Facebook extends TakePhoto{
     constructor (
        public cameraMode: string,
        public filter: string,
        public username: string
    ){
        super(cameraMode, filter)
    }
}