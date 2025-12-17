import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  template: `
    <h1>Welcome to {{ title | async }}!</h1>
  `,
  styles: [],
})
export class App {
  protected readonly title = of('mfe').pipe(takeUntilDestroyed());
}
