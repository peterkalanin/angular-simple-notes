export class Note {
    title: string = '';
    content: string[] = [''];
    id?: string;

    constructor(params: INote) {
        this.title = params.title || '';
        this.content = params.content || [''];
        this.id = params.id;
    }
}

export interface INote {
    title?: string;
    content: string[];
    id?: string;
}