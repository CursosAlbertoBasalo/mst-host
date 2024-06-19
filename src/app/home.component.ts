import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
  effect,
  viewChild,
} from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h3>Home of to {{ title }}!</h3>
    <ng-container #remoteWidget></ng-container>
    <ng-container #remoteWidgetSignal></ng-container>
  `,
})
export class HomeComponent implements AfterViewInit {
  title = 'mst-host';
  @ViewChild('remoteWidget', { static: true, read: ViewContainerRef })
  remoteWidget!: ViewContainerRef;

  remoteWidgetSignal = viewChild<ViewContainerRef>('remoteWidgetSignal');

  #signalEffect = effect(() => {
    const myWidget: ViewContainerRef | undefined = this.remoteWidgetSignal();
    // if (!myWidget) {
    //   return;
    // }
    // console.log('myWidget', myWidget);
    // loadRemoteModule('mfe1', './Widget').then((m) =>
    //   myWidget.createComponent(m.default)
    // );
  });

  async ngAfterViewInit() {
    const moduleJs = await loadRemoteModule('mfe1', './Widget');
    this.remoteWidget.createComponent(moduleJs.default);
  }
}
