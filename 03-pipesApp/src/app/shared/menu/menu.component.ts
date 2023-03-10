import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  items: MenuItem[]=[];

  ngOnInit() {
      this.items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                  {label: 'Textos y fechas', icon: 'pi pi-align-left', routerLink:'2'},
                  {label: 'Numeros', icon: 'pi pi-dollar', routerLink:'numeros'},
                  {label: 'No comunes', icon: 'pi pi-globe', routerLink:'noComunes'}
              ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            routerLink: 'ordenar'
        }
      ];
  }
}
