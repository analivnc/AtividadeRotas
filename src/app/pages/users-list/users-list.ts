import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList implements OnInit {

  usuarios: User[] = [];
  carregando = true;
  erro = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.carregando = false;
      },
      error: () => {
        this.erro = true;
        this.carregando = false;
      }
    });
  }
}