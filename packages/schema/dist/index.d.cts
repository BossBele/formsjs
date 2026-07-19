var $schema = "http://json-schema.org/draft-07/schema#";
var $id = "https://formsjs.dev/form-config.schema.json";
var title = "FormsJS Form Config";
var description = "Schema for a FormsJS form configuration.";
var type = "object";
var required = [
	"fields"
];
var properties = {
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
};
var $defs = {
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
			value: {
			},
			type: {
				"enum": [
					"hidden",
					"show",
					"required",
					"disabled"
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
			defaultValue: {
			},
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
};
var formConfig_schema = {
	$schema: $schema,
	$id: $id,
	title: title,
	description: description,
	type: type,
	required: required,
	properties: properties,
	$defs: $defs
};

interface Choice {
    label: string;
    value: string;
}
type DependencyType = 'hidden' | 'show' | 'required' | 'disabled';
interface Dependency {
    name: string;
    value: any;
    type: DependencyType;
}
interface ValidationRules {
    required?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string | RegExp;
}
interface FieldConfig {
    name: string;
    type: string;
    label?: string;
    description?: string;
    placeholder?: string;
    defaultValue?: any;
    dependencies?: Dependency[];
    rules?: ValidationRules;
    options?: Choice[];
    props?: Record<string, any>;
}
interface FormConfig {
    id?: string;
    title?: string;
    submitLabel?: string;
    fields: FieldConfig[];
}

export { type Choice, type Dependency, type DependencyType, type FieldConfig, type FormConfig, type ValidationRules, formConfig_schema as schema };
