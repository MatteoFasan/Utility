import { IStudente } from './istudente.store';

export class AddStudente {
    static readonly type = '[STUDENTE] Add';

    constructor(public payload: IStudente) {}
}


export class RemoveStudente {
    static readonly type = '[STUDENTE] Remove';

    constructor(public payload: string) {}
}

export class ModifyStudente {
    static readonly type = '[STUDENTE] Modify';

    constructor(public payload: IStudente, public cognome: string) {}
}