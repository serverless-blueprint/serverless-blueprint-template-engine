## serverless-blueprint-template-engine
Template engine implementation for serverless-blueprint modules.

### Getting Started

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let template = "{{project}} is awesome";
let stringTemplate = new StringTemplate(template);
let merged: string = stringTemplate.mergeWith({"project": "serverless-blueprint"});

merged === "serverless-blueprint is awesome";
```

### FAQs

1. How do I pass nested placeholders

*Usage*

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let stringTemplate = new StringTemplate("{{project.name}} is awesome");
let merged: string = stringTemplate.mergeWith({
    "project": {
        "name": "serverless-blueprint"
    }
});
merged === "serverless-blueprint is awesome";
```  

2.  What happens if the placeholder is missing?

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let stringTemplate = new StringTemplate("{{project}} is awesome");
let merged: string = stringTemplate.mergeWith({});
merged === " is awesome";
```