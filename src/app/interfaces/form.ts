import { IField } from './field';

export interface IForm {
    formProperties: IField[];
    formConfig(): void;
    save(e: IEmitReturn): void;
}

export interface IEmitReturn {
    value: any;
    fields: IField[];
}
