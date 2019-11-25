import * as Mustache from 'mustache';

type Placeholders = { [key: string]: any }

export class StringTemplate {
    constructor(private template: string) {
    }

    mergeWith(placeholders: Placeholders, includes?: any): string {
        return Mustache.render(this.template, placeholders, includes);
    }
}