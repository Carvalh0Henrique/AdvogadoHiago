import { Component } from '@angular/core';

interface PracticeArea {
  title: string;
  description: string;
  icon: string;
  services: string[];
}

@Component({
  selector: 'app-area-activity',
  standalone: false,
  templateUrl: './area-activity.component.html',
  styleUrls: ['./area-activity.component.css']
})
export class AreaActivityComponent {
  readonly practiceAreas: PracticeArea[] = [
    {
      title: 'Compliance',
      description: 'Adequação normativa para mitigação de riscos.',
      icon: 'shield-check',
      services: ['Programas de integridade', 'Mapeamento de riscos', 'Políticas e controles internos']
    },
    {
      title: 'LGPD',
      description: 'Proteção de dados e privacidade.',
      icon: 'database',
      services: ['Diagnóstico de conformidade', 'Políticas de privacidade', 'Governança de dados pessoais']
    },
    {
      title: 'ESG',
      description: 'Sustentabilidade e responsabilidade corporativa.',
      icon: 'leaf',
      services: ['Práticas socioambientais', 'Responsabilidade corporativa', 'Gestão de riscos ESG']
    },
    {
      title: 'Planejamento Patrimonial',
      description: 'Organização e proteção do patrimônio.',
      icon: 'landmark',
      services: ['Organização de bens', 'Estruturas patrimoniais', 'Prevenção de riscos']
    },
    {
      title: 'Planejamento Sucessório',
      description: 'Transição segura entre gerações.',
      icon: 'git-branch',
      services: ['Organização da sucessão', 'Continuidade patrimonial', 'Prevenção de conflitos familiares']
    },
    {
      title: 'Governança',
      description: 'Estrutura e processos decisórios sólidos.',
      icon: 'network',
      services: ['Estruturação de responsabilidades', 'Processos decisórios', 'Regras e protocolos internos']
    },
    {
      title: 'Contratos',
      description: 'Segurança jurídica em cada relação.',
      icon: 'file-signature',
      services: ['Elaboração de contratos', 'Revisão de cláusulas', 'Prevenção de conflitos contratuais']
    },
    {
      title: 'Assessoria Empresarial Mensal',
      description: 'Acompanhamento jurídico contínuo.',
      icon: 'briefcase-business',
      services: ['Suporte jurídico recorrente', 'Revisão de documentos', 'Orientação estratégica']
    },
    {
      title: 'Consultoria Preventiva',
      description: 'Decisões seguras antes do problema.',
      icon: 'search-check',
      services: ['Diagnóstico de vulnerabilidades', 'Análise preventiva de riscos', 'Planos de ação personalizados']
    }
  ];
}
