import { IField } from './field';

export interface IForm {
    formProperties: IField[];
    formConfig(): void;
    save(e: Event): void;
}
