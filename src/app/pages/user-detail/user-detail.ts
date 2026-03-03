import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {

  usuario?: User;
  carregando = true;
  erro = false;
  naoEncontrado = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.erro = true;
      this.carregando = false;
      return;
    }

    this.userService.buscarUsuarioPorId(id).subscribe({
      next: (dados) => {
        this.usuario = dados;
        this.carregando = false;
      },
      error: () => {
        this.naoEncontrado = true;
        this.carregando = false;
      }
    });
  }
}