import {Pipe} from "@angular/core";

@Pipe({
    name:"default"
})
export class DefaultPipe{
    transform(value: string, fallback:string): string {
        let image ="";
        if(value){
            image =value ;
        }else{
            image = fallback;
        }
        return image;
    }
}