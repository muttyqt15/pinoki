export interface FormItemProps {
  type: "text" | "password" | "checkbox" | "email";
  name: string;
  placeholder: string;
  property: string;
  value: string | boolean;
  checked?: boolean;
  className?: string;
  required: boolean;
}

export interface FormProps {
  fields: Array<FormItemProps>;
  onSubmit: <T>(data: T) => void;
}

export interface OutputProps {
  onChange: (property: string, value: string | boolean) => void;
}

