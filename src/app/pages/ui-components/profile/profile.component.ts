import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ MatCard, MatCardHeader],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: { nom: string; prenom: string; email: string } = {
    nom: 'Doe',
    prenom: 'John',
    email: 'john.doe@example.com'
  };

  constructor() {}

  ngOnInit(): void {
    // Vous pouvez intégrer une API pour récupérer les données utilisateur ici.
  }
}
