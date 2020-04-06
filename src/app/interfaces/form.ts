import { IField } from './field';

export interface IForm {
    formProperties: IField[];
    formConfig(disabledField: boolean, values: any): void;
    save(e: IEmitReturn): void;
}

export interface IEmitReturn {
    value: any;
    fields: IField[];
}
