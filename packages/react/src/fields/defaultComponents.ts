import { TextField } from './TextField';
import { NumberField } from './NumberField';
import { EmailField } from './EmailField';
import { PasswordField } from './PasswordField';
import { TextAreaField } from './TextAreaField';
import { DateField } from './DateField';
import { SelectField } from './SelectField';
import { CheckboxField } from './CheckboxField';
import { RadioField } from './RadioField';
import { SwitchField } from './SwitchField';

export const defaultComponents = {
  text: TextField,
  number: NumberField,
  email: EmailField,
  password: PasswordField,
  textarea: TextAreaField,
  date: DateField,
  select: SelectField,
  checkbox: CheckboxField,
  radio: RadioField,
  switch: SwitchField,
};
