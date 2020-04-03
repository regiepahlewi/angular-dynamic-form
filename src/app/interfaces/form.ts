import { IField } from './field';

export interface IForm {
    formProperties: IField;
    formConfig(): void;
}
