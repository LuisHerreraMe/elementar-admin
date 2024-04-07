import { Component } from '@angular/core';
import { EmrNumberInputModule } from '@components/number-input/number-input.module';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-basic-number-input-example',
  standalone: true,
  imports: [
    EmrNumberInputModule,
    MatIcon,
    MatFormField
  ],
  templateUrl: './basic-number-input-example.component.html',
  styleUrl: './basic-number-input-example.component.scss'
})
export class BasicNumberInputExampleComponent {

}
