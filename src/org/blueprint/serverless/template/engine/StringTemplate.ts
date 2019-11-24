import * as Mustache from 'Mustache';

type PlaceholderOptions = { [key: string]: any }

export class StringTemplate {
    constructor(private template: string) {
    }

    mergeWith(options: PlaceholderOptions): string {
        return Mustache.render(this.template, options);
    }
}