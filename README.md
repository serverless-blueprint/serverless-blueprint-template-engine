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


4. **How do I include sub-template(s)?**

Following code explains the way to include sub-templates by passing the second parameter to mergeWith method which
includes an object containing the name of the template to include and its content.

**Example**

```typescript
import {StringTemplate} from "src/org/blueprint/serverless/template/engine/StringTemplate";

let template = "<h2>Name</h2> {{>project}}";
let subTemplate = "<strong>{{name}}</strong>";

let stringTemplate = new StringTemplate(template);

let merged: string = stringTemplate.mergeWith({"name": "serverless-blueprint"},
                                              {"project": subTemplate});

merged === "<h2>Name</h2> <strong>serverless-blueprint</strong>";
```