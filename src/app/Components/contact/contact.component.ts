import { Component, OnInit } from '@angular/core';
import { EnviaEmailService } from '../../Services/envia-email.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  form!: FormGroup;

  constructor(private enviaEmail: EnviaEmailService, private fb: FormBuilder) {}

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


  enviar() {
    if (this.form.invalid) return;

    this.enviaEmail.enviarMensagem(this.form.value)
      .subscribe({
        next: (res) => {
          alert("Mensagem enviada com sucesso!");
          this.form.reset();
        },
        error: (err) => {
          alert("Erro ao enviar mensagem.");
          console.error(err);
        }
      });
  }

  ngAfterViewInit(): void {
    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;

    if (contactForm) {
      contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        this.showNotification('Mensagem enviada com sucesso! (Simulação)');
        contactForm.reset();
      });
    }
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
