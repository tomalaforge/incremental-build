import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from '@incremental/shell';

@Component({
  standalone: true,
  imports: [RouterModule, ShellComponent],
  selector: 'app-root',
  template: `Shell <lib-shell />`,
})
export class AppComponent {
  title = 'demo';
}
