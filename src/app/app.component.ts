import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PlatformStore } from '@mst/srv';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Go to <a routerLink="/">Home</a></p>
    <p>Go to <a routerLink="/remote-one">Remote One</a></p>
    <p><a routerLink="remote2/alfa">Remote alfa</a></p>
    <p>
      <a routerLink="remote2/beta" [queryParams]="{ q: 'Minsait MFE' }"
        >Remote beta</a
      >
    </p>
    <router-outlet />
    <hr />
    <p>Host footer</p>
    <p>With data from platform store: {{ data().appName }}</p>
  `,
  styles: [],
})
export class AppComponent {
  title = 'mst-host';
  #platform = inject(PlatformStore);
  data = this.#platform.data;
}
//http://localhost:4200/remote2/beta?q=Minsait%20MFE
