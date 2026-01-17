import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { readonly } from '@angular/forms/signals';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn implements OnInit {
  usuario: string = '';
  password: string = '';

  DisplayButtons: boolean = false;

  ngOnInit(): void {

  }

  DB: boolean = false;

  Display(): void {
    this.DB = true
    console.log("appu");
  }

  onLogin(): void {
    alert(`Usuario: ${this.usuario}\nContraseña: ${this.password}`);
  }
}
