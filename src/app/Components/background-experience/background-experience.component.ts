import { Component, HostListener, OnInit } from '@angular/core';

interface InstagramPost {
  advogado: string;
  perfil: string;
  imagem: string;
  descricao: string;
  url: string;
}

@Component({
  selector: 'app-background-experience',
  standalone: false,
  templateUrl: './background-experience.component.html',
  styleUrls: ['./background-experience.component.css']
})
export class BackgroundExperienceComponent implements OnInit {
  currentPage = 0;
  itemsPerPage = 3;

  readonly profileUrl = 'https://www.instagram.com/moretticarvalhopires/';

  readonly posts: InstagramPost[] = [
    {
      advogado: 'Moretti Carvalho Pires',
      perfil: '@moretticarvalhopires',
      imagem: '/images/posts/post-1.jpg',
      descricao: 'Respeitar a lei é proteger a liberdade.',
      url: 'https://www.instagram.com/moretticarvalhopires/p/DaWEBRljxCQ/'
    },
    {
      advogado: 'Moretti Carvalho Pires',
      perfil: '@moretticarvalhopires',
      imagem: '/images/posts/post-2.jpg',
      descricao: 'Conheça a identidade do escritório Moretti Carvalho Pires.',
      url: 'https://www.instagram.com/moretticarvalhopires/p/DaWD9Q5DzSp/'
    },
    {
      advogado: 'Moretti Carvalho Pires',
      perfil: '@moretticarvalhopires',
      imagem: '/images/posts/post-3.jpg',
      descricao: 'Nossos canais oficiais para informação e atendimento jurídico.',
      url: 'https://www.instagram.com/moretticarvalhopires/p/DaWD5uuD8ib/'
    },
    {
      advogado: 'Moretti Carvalho Pires',
      perfil: '@moretticarvalhopires',
      imagem: '/images/posts/post-sucessao.jpg',
      descricao: 'Entenda como possíveis mudanças no Código Civil podem impactar a sucessão e o patrimônio da sua família.',
      url: 'https://www.instagram.com/moretticarvalhopires/reel/DaqJX0WhAb5/'
    },
    {
      advogado: 'Moretti Carvalho Pires',
      perfil: '@moretticarvalhopires',
      imagem: '/images/posts/post-apresentacao.jpg',
      descricao: 'Direito claro, prático e acessível para prevenir conflitos, proteger direitos e orientar decisões.',
      url: 'https://www.instagram.com/moretticarvalhopires/p/Dad5-VuD3w6/'
    }
  ];

  ngOnInit(): void {
    this.updateItemsPerPage();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateItemsPerPage();
  }

  get visiblePosts(): InstagramPost[] {
    const start = this.currentPage * this.itemsPerPage;
    return this.posts.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.posts.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages });
  }

  previousPage(): void {
    this.currentPage = Math.max(0, this.currentPage - 1);
  }

  nextPage(): void {
    this.currentPage = Math.min(this.totalPages - 1, this.currentPage + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  trackByUrl(_index: number, post: InstagramPost): string {
    return post.url;
  }

  private updateItemsPerPage(): void {
    const nextItemsPerPage = window.innerWidth < 768 ? 1 : window.innerWidth < 1100 ? 2 : 3;

    if (nextItemsPerPage !== this.itemsPerPage) {
      this.itemsPerPage = nextItemsPerPage;
      this.currentPage = Math.min(this.currentPage, this.totalPages - 1);
    }
  }
}
