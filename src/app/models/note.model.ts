export class Note {
    id?: string;
    title: string = '';
    content: string[] = [''];
    contentString?: string;
    color: string;

    constructor(params: INote) {
        this.id = params.id;
        this.title = params.title || '';
        this.content = params.content || [''];
        this.contentString = params.contentString || this.content.join('\n');
        this.color = params.color || 'white';
    }

    toSubmitModel(): Note {
        this.content = (this.contentString || '').split('\n');
        this.contentString = undefined;

        return this;
    }
}

export interface INote {
    id?: string;
    title?: string;
    content: string[];
    contentString?: string;
    color: string;
}