import { Component } from '@angular/core';

interface PracticeArea {
  title: string;
  description: string;
  icon: string;
  services: string[];
  whatsappMessage: string;
}

@Component({
  selector: 'app-area-activity',
  standalone: false,
  templateUrl: './area-activity.component.html',
  styleUrls: ['./area-activity.component.css']
})
export class AreaActivityComponent {
  private readonly whatsappPhone = '5515991456263';

  readonly practiceAreas: PracticeArea[] = [
    {
      title: 'Compliance',
      description: 'Adequação normativa para mitigação de riscos.',
      icon: 'shield-check',
      services: ['Programas de integridade', 'Mapeamento de riscos', 'Políticas e controles internos'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre os serviços de Compliance.'
    },
    {
      title: 'LGPD',
      description: 'Proteção de dados e privacidade.',
      icon: 'database',
      services: ['Diagnóstico de conformidade', 'Políticas de privacidade', 'Governança de dados pessoais'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre os serviços relacionados à LGPD e proteção de dados.'
    },
    {
      title: 'ESG',
      description: 'Sustentabilidade e responsabilidade corporativa.',
      icon: 'leaf',
      services: ['Práticas socioambientais', 'Responsabilidade corporativa', 'Gestão de riscos ESG'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre os serviços relacionados a ESG.'
    },
    {
      title: 'Planejamento Patrimonial',
      description: 'Organização e proteção do patrimônio.',
      icon: 'landmark',
      services: ['Organização de bens', 'Estruturas patrimoniais', 'Prevenção de riscos'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre Planejamento Patrimonial.'
    },
    {
      title: 'Planejamento Sucessório',
      description: 'Transição segura entre gerações.',
      icon: 'git-branch',
      services: ['Organização da sucessão', 'Continuidade patrimonial', 'Prevenção de conflitos familiares'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre Planejamento Sucessório.'
    },
    {
      title: 'Governança',
      description: 'Estrutura e processos decisórios sólidos.',
      icon: 'network',
      services: ['Estruturação de responsabilidades', 'Processos decisórios', 'Regras e protocolos internos'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre os serviços de Governança.'
    },
    {
      title: 'Contratos',
      description: 'Segurança jurídica em cada relação.',
      icon: 'file-signature',
      services: ['Elaboração de contratos', 'Revisão de cláusulas', 'Prevenção de conflitos contratuais'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre elaboração e revisão de Contratos.'
    },
    {
      title: 'Assessoria Empresarial Mensal',
      description: 'Acompanhamento jurídico contínuo.',
      icon: 'briefcase-business',
      services: ['Suporte jurídico recorrente', 'Revisão de documentos', 'Orientação estratégica'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre a Assessoria Empresarial Mensal.'
    },
    {
      title: 'Consultoria Preventiva',
      description: 'Decisões seguras antes do problema.',
      icon: 'search-check',
      services: ['Diagnóstico de vulnerabilidades', 'Análise preventiva de riscos', 'Planos de ação personalizados'],
      whatsappMessage: 'Olá! Acessei o site da Moretti Carvalho Pires e gostaria de obter mais informações sobre a Consultoria Preventiva.'
    }
  ];

  openWhatsApp(area: PracticeArea): void {
    const url = `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(area.whatsappMessage)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
