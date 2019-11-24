import * as Mustache from 'Mustache';

export class StringTemplate {
    constructor(private template: string) {
    }

    mergeWith(options: {}): string {
        return Mustache.render(this.template, options);
    }
}