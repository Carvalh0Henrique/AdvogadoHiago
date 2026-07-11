import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializa o FormGroup com os campos usados no template
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      assunto: [''],
      mensagem: ['', Validators.required]
    });
  }


  enviar(): void {
    this.showNotification('Feature em desenvolvimento');
  }

  showNotification(message: string): void {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}
