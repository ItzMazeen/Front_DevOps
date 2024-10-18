import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UniversiteService } from '../universite.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-universite',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Add ReactiveFormsModule here
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universites: any[] = [];
  universiteForm: FormGroup;

  constructor(
    private universiteService: UniversiteService,
    private fb: FormBuilder
  ) {
    this.universiteForm = this.fb.group({
      idUniversite: [0],
      nomUniversite: [''],
      adresse: ['']
    });
  }

  ngOnInit(): void {
    this.getAllUniversites();
  }

  getAllUniversites(): void {
    this.universiteService.getAllUniversites().subscribe(
      data => {
        this.universites = data;
      },
      error => {
        console.error('Error fetching universites', error);
      }
    );
  }

  addOrUpdateUniversite(): void {
    const formValue = this.universiteForm.value;

    this.universiteService.addOrUpdateUniversite(formValue).subscribe(
      response => {
        console.log('Universite added/updated successfully', response);
        this.getAllUniversites(); // Refresh the list after adding/updating
        this.universiteForm.reset(); // Reset the form after submission
      },
      error => {
        console.error('Error adding/updating universite', error);
      }
    );
  }
}
