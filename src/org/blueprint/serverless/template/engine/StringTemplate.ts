import * as Mustache from 'Mustache';

type Placeholders = { [key: string]: any }

export class StringTemplate {
    constructor(private template: string) {
    }

    mergeWith(placeholders: Placeholders): string {
        return Mustache.render(this.template, placeholders);
    }
}