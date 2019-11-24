import {expect} from 'chai';
import 'mocha';
import {StringTemplate} from "../../../../../../src/org/blueprint/serverless/template/engine/StringTemplate";

describe('String Template', () => {
    it('should return blank given an empty string template', () => {
        let stringTemplate = new StringTemplate("");
        let merged: string = stringTemplate.mergeWith({});
        expect(merged).to.equal("");
    });
});