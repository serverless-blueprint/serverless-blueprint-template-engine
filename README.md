## serverless-blueprint-template-engine
Template engine implementation for serverless-blueprint modules.

### Getting Started

* Import ```StringTemplate``` class
* Create an instance of ```StringTemplate``` class with template as a parameter
* Invoke ```mergeWith``` method passing the template placeholders 

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let template = "{{project}} is awesome";
let stringTemplate = new StringTemplate(template);
let merged: string = stringTemplate.mergeWith({"project": "serverless-blueprint"});

merged === "serverless-blueprint is awesome";
```

### FAQs

1. **How do I pass a nested placeholder?**

**Example**

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


2. **What happens if a placeholder is missing?**

Output will be generated with blank value for missing placeholder(s).

**Example**

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let stringTemplate = new StringTemplate("{{project}} is awesome");
let merged: string = stringTemplate.mergeWith({});

merged === " is awesome";
```


3. **What happens if a nested placeholder is missing?**

Output will be generated with blank value for missing nested placeholder(s).

**Example**

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let stringTemplate = new StringTemplate("{{project.name}} is awesome");
let merged: string = stringTemplate.mergeWith({
    "project": {}
});

merged === " is awesome";
```
