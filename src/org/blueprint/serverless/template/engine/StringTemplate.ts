import * as Sqrl from 'squirrelly';

export class StringTemplate {
    constructor(private template: string) {
    }

    mergeWith(options: {}): string {
        return Sqrl.Render(this.template, options);
    }
}