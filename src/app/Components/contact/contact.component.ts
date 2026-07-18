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
  private readonly whatsappPhone = '5515991456263';

  readonly areasAtuacao = [
    'Compliance',
    'LGPD',
    'ESG',
    'Planejamento Patrimonial',
    'Planejamento Sucessório',
    'Governança',
    'Contratos',
    'Assessoria Empresarial Mensal',
    'Consultoria Preventiva'
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializa o FormGroup com os campos usados no template
    this.form = this.fb.group({
      nome: ['', Validators.required],
      assunto: ['', Validators.required],
      mensagem: ['', Validators.required]
    });
  }


  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showNotification('Preencha os campos obrigatórios antes de enviar.');
      return;
    }

    const { nome, assunto, mensagem } = this.form.value;
    const texto = `${this.obterSaudacao()}\n\nSou ${nome}, e gostaria de falar sobre ${assunto}.\n\n${mensagem}`;
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  private obterSaudacao(): string {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 3 && horaAtual < 12) {
      return 'Olá, bom dia!';
    }

    if (horaAtual >= 12 && horaAtual < 18) {
      return 'Olá, boa tarde!';
    }

    return 'Olá, boa noite!';
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
