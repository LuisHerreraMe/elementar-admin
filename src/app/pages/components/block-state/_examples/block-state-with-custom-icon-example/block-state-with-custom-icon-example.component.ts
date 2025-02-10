import { Component } from '@angular/core';
import {
  BlockStateComponent,
  BlockStateContentComponent,
  BlockStateIconComponent
} from '@elementar/components/block-state';
import { IconComponent } from '@elementar/components/icon';

@Component({
  selector: 'app-block-state-with-custom-icon-example',
  imports: [
    BlockStateComponent,
    BlockStateContentComponent,
    BlockStateIconComponent,
    IconComponent
  ],
  templateUrl: './block-state-with-custom-icon-example.component.html',
  styleUrl: './block-state-with-custom-icon-example.component.scss'
})
export class BlockStateWithCustomIconExampleComponent {

}
