import { NgModule } from '@angular/core';
import { ToCelsiusPipe } from './to-celsius/to-celsius';
import { TommHgPipe } from './tomm-hg/tomm-hg';
@NgModule({
	declarations: [ToCelsiusPipe,
    TommHgPipe],
	imports: [],
	exports: [ToCelsiusPipe,
    TommHgPipe]
})
export class PipesModule {}
