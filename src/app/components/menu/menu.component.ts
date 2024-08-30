import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaService } from '../../services/pizza.service';
import { IPizza } from '../../../interfaces/IPizza';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private route: Router, private pizzaService: PizzaService) {}
  ngOnInit(): void {}

  navigateToinitPage() {
    this.route.navigate(['']);
    console.log('clique');
  }

  getPizzas() {
    this.pizzaService.getPizzas().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
