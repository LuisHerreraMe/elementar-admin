import { Component } from '@angular/core';
import { PlaygroundComponent } from '@meta/playground/playground.component';
import { BasicStepperExampleComponent } from '../_examples/basic-stepper-example/basic-stepper-example.component';
import {
  StepperVerticalExampleComponent
} from '../_examples/stepper-vertical-example/stepper-vertical-example.component';
import {
  StepperHeaderPositionExampleComponent
} from '../_examples/stepper-header-position-example/stepper-header-position-example.component';
import {
  StepperWithErrorsStateExampleComponent
} from '../_examples/stepper-with-errors-state-example/stepper-with-errors-state-example.component';
import {
  StepperResponsiveExampleComponent
} from '../_examples/stepper-responsive-example/stepper-responsive-example.component';
import {
  StepperLabelBottomPositionExampleComponent
} from '../_examples/stepper-label-bottom-position-example/stepper-label-bottom-position-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicStepperExampleComponent,
    StepperVerticalExampleComponent,
    StepperHeaderPositionExampleComponent,
    StepperWithErrorsStateExampleComponent,
    StepperResponsiveExampleComponent,
    StepperLabelBottomPositionExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
