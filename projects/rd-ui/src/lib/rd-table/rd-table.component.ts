import { Component, Input } from '@angular/core';

@Component({
  selector: 'rd-table',
  template: `
  <table>
  <tr *ngFor="let item of title">
    <th>{{item}}</th>
  </tr>
  <tr>
    <td>{{item}}</td>
  </tr>
</table>
  `,
  styleUrls: ['./rd-table.component.scss']
})
export class RdTableComponent {


  @Input()
  title: string[] = [];

}
