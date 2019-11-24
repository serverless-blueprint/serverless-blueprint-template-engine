import {expect} from 'chai';
import 'mocha';
import {StringTemplate} from "../../../../../../src/org/blueprint/serverless/template/engine/StringTemplate";

describe('String Template', () => {

    it('should return blank output given an empty string template', () => {
        let stringTemplate = new StringTemplate("");
        let merged: string = stringTemplate.mergeWith({});
        expect(merged).to.equal("");
    });

    it('should return an output which is same as input given no placeholders in the template', () => {
        let stringTemplate = new StringTemplate("serverless-blueprint");
        let merged: string = stringTemplate.mergeWith({});
        expect(merged).to.equal("serverless-blueprint");
    });

    it('should return an output where a placeholder in the template is replaced with value', () => {
        let stringTemplate = new StringTemplate("{{project}} is awesome");
        let merged: string = stringTemplate.mergeWith({"project": "serverless-blueprint"});
        expect(merged).to.equal("serverless-blueprint is awesome");
    });

    it('should return an output where multiple placeholders in the template are replaced with values', () => {
        let stringTemplate = new StringTemplate("{{project}} is awesome for generating {{cloud-vendor}} applications");
        let merged: string = stringTemplate.mergeWith({
            "project": "serverless-blueprint",
            "cloud-vendor": "AWS"
        });
        expect(merged).to.equal("serverless-blueprint is awesome for generating AWS applications");
    });
});