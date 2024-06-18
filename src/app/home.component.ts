import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: ` <h3>Home of to {{ title }}!</h3> `,
})
export class HomeComponent {
  title = 'mst-host';
}
