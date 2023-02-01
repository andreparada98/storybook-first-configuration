import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rd-button',
  template:  `<button
  type="button"
  [ngClass]= classes
  (click)="onClick.emit($event)"
  [ngStyle]="{ 'background-color': backgroundColor }"
  >
  {{text}}
  </button>`,
  styleUrls: ['./rd-button.component.css']
})
export class RdButtonComponent {

  @Input()
  primary: boolean = false;

  @Input() 
  text: string = '';

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'rd-button--primary' : 'rd-button--secondary';

    return ['rd-button', `rd-button--${this.size}`, mode];
  }
}
