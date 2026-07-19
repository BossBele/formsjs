"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  schema: () => form_config_schema_default
});
module.exports = __toCommonJS(index_exports);

// src/form-config.schema.json
var form_config_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://form-os.dev/form-config.schema.json",
  title: "Form OS Form Config",
  description: "Schema for a Form OS form configuration.",
  type: "object",
  required: [
    "fields"
  ],
  properties: {
    id: {
      type: "string"
    },
    title: {
      type: "string"
    },
    submitLabel: {
      type: "string"
    },
    fields: {
      type: "array",
      items: {
        $ref: "#/$defs/FieldConfig"
      }
    }
  },
  $defs: {
    Choice: {
      type: "object",
      required: [
        "label",
        "value"
      ],
      properties: {
        label: {
          type: "string"
        },
        value: {
          type: "string"
        }
      },
      additionalProperties: false
    },
    Dependency: {
      type: "object",
      required: [
        "name",
        "value",
        "type"
      ],
      properties: {
        name: {
          type: "string"
        },
        value: {},
        type: {
          enum: [
            "hidden",
            "show",
            "required",
            "disabled",
            "readonly"
          ]
        }
      },
      additionalProperties: false
    },
    ValidationRules: {
      type: "object",
      properties: {
        required: {
          type: [
            "boolean",
            "string"
          ]
        },
        min: {
          type: "number"
        },
        max: {
          type: "number"
        },
        minLength: {
          type: "number"
        },
        maxLength: {
          type: "number"
        },
        pattern: {
          type: "string"
        },
        disabled: {
          type: "boolean"
        },
        readonly: {
          type: "boolean"
        }
      },
      additionalProperties: false
    },
    FieldConfig: {
      type: "object",
      required: [
        "name",
        "type"
      ],
      properties: {
        name: {
          type: "string"
        },
        type: {
          type: "string"
        },
        label: {
          type: "string"
        },
        description: {
          type: "string"
        },
        placeholder: {
          type: "string"
        },
        defaultValue: {},
        dependencies: {
          type: "array",
          items: {
            $ref: "#/$defs/Dependency"
          }
        },
        rules: {
          $ref: "#/$defs/ValidationRules"
        },
        options: {
          type: "array",
          items: {
            $ref: "#/$defs/Choice"
          }
        },
        props: {
          type: "object"
        }
      },
      additionalProperties: false
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  schema
});
//# sourceMappingURL=index.cjs.map