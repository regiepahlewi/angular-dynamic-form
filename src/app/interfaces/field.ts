export interface IField {
    label?: string;
    name?: string;
    options?: any[];
    type: string;
    value?: any;
    disabled?: boolean;
    readOnly?: boolean;
    dataSource?: string;
    isEditable?: any;
    validations?: IValidator[];
    minlength?: number;
    maxlength?: number;
}

export interface IValidator {
    name: string;
    validator: any;
    message: string;
}
