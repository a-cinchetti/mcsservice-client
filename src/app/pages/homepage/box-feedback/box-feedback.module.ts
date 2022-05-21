import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxFeedbackComponent } from './box-feedback.component';



@NgModule({
    declarations: [
        BoxFeedbackComponent
    ],
    exports: [
        BoxFeedbackComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BoxFeedbackModule { }
