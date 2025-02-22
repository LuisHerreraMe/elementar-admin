import { Component } from '@angular/core';
import { MchartBarComponent } from '@elementar/components/micro-chart';
import { ShuffleArrayPipe } from '../../../../../@meta/shuffle-array.pipe';

@Component({
    selector: 'app-mchart-bar-custom-radius-example',
    imports: [
        MchartBarComponent,
        ShuffleArrayPipe
    ],
    templateUrl: './mchart-bar-custom-radius-example.component.html',
    styleUrl: './mchart-bar-custom-radius-example.component.scss'
})
export class MchartBarCustomRadiusExampleComponent {

}
