import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from 'src/app/interfaces/field';
import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { RadiobuttonComponent } from '../radiobutton/radiobutton.component';
import { DobComponent } from '../dob/dob.component';

const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    dob: DobComponent,
    radiobutton: RadiobuttonComponent,
};

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[dynamicField]'
})
export class FieldsDirective implements OnInit {

    @Input() field: IField;
    @Input() group: FormGroup;
    componentRef: any;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.component]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
}
