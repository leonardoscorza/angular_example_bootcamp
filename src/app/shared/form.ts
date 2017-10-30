import { Question } from './question';

export class Form {
    id: number;
    title: string;
    description: string;
    questions: Question[] = [];
    user_id: number;

    constructor(formInfo: any) {
        this.id = formInfo.id;
        this.title = formInfo.title;
        this.description = formInfo.description;
        this.user_id = formInfo.user_id;

        for(var count in formInfo.questions) {
            this.questions.push(new Question(formInfo.questions[count]));
        }
    }
}
