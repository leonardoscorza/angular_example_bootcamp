export class Question {
    id: number;
    title: string;
    kind: string;

    constructor(questionInfo:any) {
        this.id = questionInfo.id;
        this.title = questionInfo.title;
        this.kind = questionInfo.kind;
    }
}