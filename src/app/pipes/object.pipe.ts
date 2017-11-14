
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'object' })
export class ObjectPipe implements PipeTransform {
    transform(value, args: any): any {
        const val = [];
        for (const v of value) {
            val.push(JSON.stringify(v));
        }
        return val;
    }
}
