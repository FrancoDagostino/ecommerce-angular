import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  @Input()
  public count: number = 0;

  @Output() contadorChange = new EventEmitter<number>();

  onCount(param: number): void {
    if ((this.count <= 0 && param < 0) || (this.count >= 5 && param > 0))
      return;
    this.count = this.count + param;
    this.contadorChange.emit(this.count);
  }
}
