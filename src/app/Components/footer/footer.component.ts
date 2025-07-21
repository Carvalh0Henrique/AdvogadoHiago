import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ngAfterViewInit() {
    const newsletterForm = document.getElementById('newsletterForm') as HTMLFormElement | null;

    const showNotification = (message: string) => {
      const notification = document.createElement('div');
      notification.textContent = message;
      notification.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    };

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Inscrição na newsletter realizada com sucesso! (Simulação)');
        newsletterForm.reset();
      });
    }
  }
}
