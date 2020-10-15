import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule} from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';


const materialModules = [
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,

  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatTabsModule,
    MatDividerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
