export class Note {
    title: string = '';
    content: string = '';

    constructor(params: INote) {
        this.title = params.title || '';
        this.content = params.content || '';
    }
}

export interface INote {
    title?: string;
    content: string;
}