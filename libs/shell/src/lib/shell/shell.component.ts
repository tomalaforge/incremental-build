import { Component } from '@angular/core';
import { Lib1Component } from '@incremental/lib1';
import { Lib2Component } from '@incremental/lib2';

@Component({
  selector: 'lib-shell',
  standalone: true,
  template: `
    <lib-lib1 />
    <lib-lib2 />
  `,
  imports: [Lib1Component, Lib2Component],
})
export class ShellComponent {}
