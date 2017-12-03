import { ActionReducer, Action } from '@ngrx/store';
import { WordComponet } from '../word/word.component';




export function naviReducer(state: string = 'hello', action: Action) {
    switch (action.type) {
        case 'adder':
            state = state + 1;
            console.log(state);
            return state;
        default:
            return state;
    }
}
