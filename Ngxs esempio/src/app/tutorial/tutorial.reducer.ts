import { State, Action, StateContext, Selector } from '@ngxs/store';
import { IStudente } from './istudente.store';
import { AddStudente, RemoveStudente, ModifyStudente } from './studente.actions';

export class Classe {
    studenti: IStudente[];
    sezione: string;
    annoscolastico: string;
}

@State<Classe>({
    name: 'classe',
    defaults: {
        studenti: [],
        sezione: '1A',
        annoscolastico: '2018/2019'
    }
})

export class ClasseReducer {


    @Selector()
    static getStudenti(state: Classe) {
        return state.studenti;
    }

    @Selector()
    static getClasse(state: Classe) {
        return state;
    }

    @Action(AddStudente)
    add({getState, patchState }: StateContext<Classe>, { payload }: AddStudente) {
        const state = getState();
        state.studenti.push(payload);
        patchState({
            studenti: state.studenti
        });
    }

    @Action(RemoveStudente)
    remove({getState, patchState }: StateContext<Classe>, { payload }: RemoveStudente) {
        patchState({
            studenti: getState().studenti.filter( x => x.cognome !== payload)
        });
    }

    @Action(ModifyStudente)
    modify({getState, patchState }: StateContext<Classe>, { payload, cognome }: ModifyStudente) {
        const studente = getState().studenti.filter( x => x.cognome !== cognome);
        studente.push(payload);
        patchState({
            studenti: studente
        });
    }
}