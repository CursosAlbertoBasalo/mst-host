import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Go to <a routerLink="/">Home</a></p>
    <p>Go to <a routerLink="/remote-one">Remote One</a></p>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'mst-host';
}
