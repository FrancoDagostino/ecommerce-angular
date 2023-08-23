import { Component } from '@angular/core';

@Component({
  selector: 'shared-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  public count: number = 0;

  onCount(param: number): void {
    if ((this.count <= 0 && param < 0) || (this.count >= 5 && param > 0))
      return;
    this.count = this.count + param;
  }
}
