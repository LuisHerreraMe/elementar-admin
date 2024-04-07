import { Component } from '@angular/core';
import { EmrSegmentedModule } from '@components/segmented/segmented.module';

@Component({
  selector: 'app-segmented-disabled-example',
  standalone: true,
  imports: [
    EmrSegmentedModule
  ],
  templateUrl: './segmented-disabled-example.component.html',
  styleUrl: './segmented-disabled-example.component.scss'
})
export class SegmentedDisabledExampleComponent {

}
