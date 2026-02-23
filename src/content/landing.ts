
// Mock of the landing page content centralized in one file
import {
    Users,
    MonitorSmartphone,
    TrendingUp,
    BadgeCheck,
    Zap,
    ShieldCheck,
    Award,
    Clock,
    Target
} from 'lucide-react';

export const landing = {
    header: {
        items: [
            { label: "Soluções", href: "#solucoes" },
            { label: "Secretária", href: "/secretaria" },
            { label: "IA", href: "#ia" },
            { label: "Resultados", href: "#resultados" },
            { label: "FAQ", href: "#faq" },
        ],
        cta: "Social Media"
    },
    hero: {
        badge: "EXCLUSIVO PARA DENTISTAS",
        title: "FAZEMOS DO SEU CONSULTÓRIO UM DOS",
        highlight: "MAIS INTELIGENTES E LUCRATIVOS",
        suffix: "DESSA GERAÇÃO",
        description: "Implemente inteligência artificial no seu atendimento, vendas e gestão. Aumente seu faturamento enquanto recupera seu tempo livre.",
        cta: "Quero Modernizar Meu Consultório",
        videoPlaceholder: "Assista ao vídeo e descubra como a IA pode transformar sua clínica em 30 dias."
    },
    solutions: {
        title: "Soluções personalizadas para seu consultório vender mais com",
        highlight: "processos, tecnologia e inteligência artificial.",
        cards: [
            {
                id: 1,
                title: "Atendimento 24/7 com IA",
                description: "Sua secretária virtual que nunca dorme. Responde pacientes, tira dúvidas e agenda consultas automaticamente no WhatsApp, Instagram e Site.",
                icon: Clock,
                cta: "Saiba Mais"
            },
            {
                id: 2,
                title: "Recuperação de Pacientes",
                description: "Automação inteligente que identifica pacientes inativos e envia ofertas personalizadas para trazê-los de volta ao consultório.",
                icon: Users,
                cta: "Saiba Mais"
            },
            {
                id: 3,
                title: "Gestão Financeira Automatizada",
                description: "Dashboards em tempo real do seu fluxo de caixa, previsibilidade de receita e controle total das finanças sem planilhas complexas.",
                icon: TrendingUp,
                cta: "Saiba Mais"
            }
        ]
    },
    benefits: {
        title: "Seja bem-vindo à Odontologia com Inteligência Artificial",
        subtitle: "A nova era da gestão de clínicas já começou.",
        items: [
            {
                icon: Zap,
                title: "Velocidade na Resposta",
                description: "O paciente não espera. Responda instantaneamente e garanta o agendamento antes do concorrente."
            },
            {
                icon: Target,
                title: "Precisão no Diagnóstico",
                description: "Ferramentas que auxiliam na análise de exames e propõem tratamentos com base em dados."
            },
            {
                icon: ShieldCheck,
                title: "Segurança de Dados",
                description: "Seus dados e dos seus pacientes protegidos com criptografia de ponta a ponta."
            },
            {
                icon: Award,
                title: "Experiência Premium",
                description: "Ofereça uma jornada digital impecável desde o primeiro contato até o pós-atendimento."
            }
        ]
    },
    results: {
        title: "Resultados que você pode esperar",
        cards: [
            { icon: TrendingUp, text: "Aumento de 30% no faturamento em 3 meses" },
            { icon: Clock, text: "Economia de 20h semanais em gestão manual" },
            { icon: BadgeCheck, text: "Redução drástica de faltas com confimação via IA" }
        ],
        cta: "Quero Esses Resultados"
    },
    comparison: {
        title: "Qual será a Realidade do seu consultório?",
        bad: {
            title: "Consultório Analógico",
            items: [
                "Dependência total da secretária humana",
                "Retorno demorado ao paciente (perda de leads)",
                "Agenda com buracos e faltas constantes",
                "Gestão baseada em 'achismo', sem dados",
                "Estresse e sobrecarga operacional"
            ]
        },
        good: {
            title: "Consultório com IA (Futuro)",
            items: [
                "Atendimento imediato 24h por dia",
                "Confirmação automática de agenda",
                "Fluxo de caixa previsível e organizado",
                "Decisões baseadas em dashboards reais",
                "Você foca apenas em atender e lucrar"
            ]
        },
        cta: "Escolha o Futuro Agora"
    },
    audience: {
        title: "Para Quem é o Programa GMV",
        cards: [
            {
                icon: Users,
                title: "Clínicas Consolidadas",
                text: "Que já faturam bem mas sentem que a operação está caótica e dependente demais de processos manuais antigos."
            },
            {
                icon: MonitorSmartphone,
                title: "Dentistas Empreendedores",
                text: "Que desejam escalar o consultório, abrir novas unidades ou simplesmente ter mais liberdade de tempo usando tecnologia."
            }
        ],
        cta: "Verificar Minha Aplicação"
    },
    team: {
        title: "Quem Fará a GMV Educação",
        founders: {
            name: "Dr. Victor & Dra. Amanda",
            role: "Fundadores da GMV",
            description: "Dentistas e empresários que transformaram a gestão odontológica no Brasil através da tecnologia e processos validados."
        }
    },
    testimonials: {
        title: "O que Falam sobre a GMV Educação",
        items: [
            {
                text: "Minha clínica mudou da água para o vinho. A automação do WhatsApp salvou meu atendimento.",
                author: "Dra. Juliana M."
            },
            {
                text: "Consegui viajar com minha família sem me preocupar se os pacientes estavam sendo respondidos. Sensacional.",
                author: "Dr. Ricardo S."
            },
            {
                text: "O investimento se pagou no primeiro mês apenas recuperando pacientes antigos. Recomendo muito.",
                author: "Dra. Patrícia L."
            }
        ]
    },
    stats: {
        number: "150+",
        text: "Clínicas transformadas em todo o Brasil"
    },
    faq: {
        title: "Tire suas Dúvidas",
        items: [
            {
                question: "Preciso entender de programação?",
                answer: "Absolutamente não. Nós configuramos tudo e entregamos o sistema pronto para você usar."
            },
            {
                question: "Serve para consultório pequeno?",
                answer: "Sim! A tecnologia nivela o jogo. Um consultório pequeno com IA pode ser mais eficiente que uma clínica grande analógica."
            },
            {
                question: "E se eu não gostar?",
                answer: "Oferecemos garantia incondicional de 7 dias. Se não for para você, devolvemos seu investimento."
            },
            {
                question: "Quanto custa a implementação?",
                answer: "Agende uma sessão estratégica para entendermos sua estrutura e passarmos o orçamento adequado."
            }
        ],
        cta: "Ainda tenho dúvidas"
    },
    form: {
        title: "Implemente a IA no seu consultório",
        subtitle: "Preencha os dados abaixo para nossa equipe entrar em contato.",
        fields: {
            name: "Nome Completo",
            email: "Melhor E-mail",
            whatsapp: "WhatsApp (com DDD)",
            submit: "Enviar Solicitação"
        }
    },
    footer: {
        rights: "© 2024 GMV Educação. Todos os direitos reservados.",
        links: ["Termos de Uso", "Política de Privacidade"]
    }
};
