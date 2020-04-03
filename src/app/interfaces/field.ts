export interface IField {
    label?: string;
    name: string;
    component: string;
    type?: string;
    value?: any;
    disabled?: boolean;
    readOnly?: boolean;
    validations?: IValidator[];
    minlength?: number;
    maxlength?: number;
    options?: ISelectOptions[];
    // tslint:disable-next-line: ban-types
    actions?: Function;
}

export interface IValidator {
    name: string;
    validator: any;
    message: string;
}

export interface ISelectOptions {
    key: any;
    value: string;
}
