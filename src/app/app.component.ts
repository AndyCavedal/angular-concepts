import { Component } from '@angular/core';
import { product } from '../app/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Andy';
  age = 21;
  img = 'http://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;

  register = {
    name: '',
    email: '',
    password: '',
  }

  person = {
    name:"Andy",
    age: 41,
    avatar: 'http://www.w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Nico', 'Juli', 'Andy', 'Santi'];
  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  products: product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.webp'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    }
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  addAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  delName() {
    this.names.pop()
  }

  onRegister() {
    console.log(this.register);
  }
}
