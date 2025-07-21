import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
