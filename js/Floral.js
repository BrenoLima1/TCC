export class Floral{
    constructor() {
        this.data = {
            perguntas: [
                { categoria: 'medo', text: 'Simplesmente entro em estado de pânico. Não consigo me mover quando tenho certos pensamentos.', nome: 'Rock Rose' },
                { categoria: 'medo', text: 'Temo coisas ruins existentes no mundo real, como dor, doenças, acidentes, pobreza, escuro, entre outros acontecerem comigo.', nome: 'Mimulus' },
                { categoria: 'medo', text: 'Temo seguir pensamentos e impulsos e fazer coisas que sei que são erradas.', nome: 'Cherry Plum' },
                { categoria: 'medo', text: 'Sinto de que algo terrível vai acontecer, mas não sei exatamente o que.', nome: 'Aspen' },
                { categoria: 'medo', text: 'Temo que aqueles que amo sofram. Antecipo que algo desafortunado lhes aconteça.', nome: 'Red Chestnut' },

                { categoria: 'incerteza', text: 'Não tenho autoconfiança suficiente para tomar minhas próprias decisões. Constantemente procuro o conselho dos outros, sendo frequentemente mal orientado/a.', nome: 'Cerato' },
                { categoria: 'incerteza', text: 'Sou incapaz de decidir entre duas ou mais opções.', nome: 'Scleranthus' },
                { categoria: 'incerteza', text: 'Sou facilmente desencorajado/a. Qualquer pequeno atraso ou obstáculo ao meu progresso causa dúvida e desânimo.', nome: 'Gentian' },
                { categoria: 'incerteza', text: 'Sinto grande desesperança. Não acredito que possa fazer algo.', nome: 'Gorse' },
                { categoria: 'incerteza', text: 'Não possuo força física e/ou mental o suficiente para carregar o fardo da vida. Alguma parte de minha mente e/ou meu corpo deve ser fortalecida antes que eu possa facilmente completar meu trabalho.', nome: 'Hornbeam' },
                { categoria: 'incerteza', text: 'Apesar de desejar alcançar um alto nível de sucesso, reconhecimento ou fama, possuo dificuldade em determinar qual ocupação seguir.', nome: 'Wild Oat' },

                { categoria: 'desinteresseNoPresente', text: 'Não tenho interesse na vida. Vivo mais em esperanças de tempos mais felizes, nos quais meus ideais poderão se tornar realidade.', nome: 'Clematis' },
                { categoria: 'desinteresseNoPresente', text: 'Não espero felicidade maior da que tive no passado.', nome: 'Honeysuckle' },
                { categoria: 'desinteresseNoPresente', text: 'Apenas deslizo pela vida, não me esforço para melhorar as coisas. Apenas aceito a vida como ela é.', nome: 'Wild Rose' },
                { categoria: 'desinteresseNoPresente', text: 'A vida diária é um trabalho duro. Já sofri tanto que estou esgotado/a, sentindo que não possuo força para fazer nenhum esforço.', nome: 'Olive' },
                { categoria: 'desinteresseNoPresente', text: 'Não consigo impedir que pensamentos, ideias e argumentos indesejados entrem em minha cabeça. Após um tempo tendo descartado estes pensamentos, eles simplesmente retornam.', nome: 'White Chestnut' },
                { categoria: 'desinteresseNoPresente', text: 'Sou suscetível a tempos de melancolia ou desespero. É muito difícil mostrar-me feliz ou alegre.', nome: 'Mustard' },
                { categoria: 'desinteresseNoPresente', text: 'Levo muito tempo para aprender as lições da vida diária, pois não tiro proveito da observação e experiência.', nome: 'Chestnut Bud' },

                { categoria: 'solidao', text: 'Na saúde ou na doença gosto de ficar sozinho/a. Sou uma pessoa muito quieta.', nome: 'Water Violet' },
                { categoria: 'solidao', text: 'Eu luto com a dificuldade de ser paciente com pessoas lentas e anseio por fazer as coisas no meu próprio ritmo.', nome: 'Impatiens' },
                { categoria: 'solidao', text: 'Sempre busco a companhia de alguém disponível, não importando quem seja, pois a acho necessária. Ficar sozinho/a por qualquer período de tempo me deixa infeliz.', nome: 'Heather' },

                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Concordo em abrir mão de muito para não haver nenhuma briga ou discussão e escondo minhas preocupações por trás de humor e brincadeira.', nome: 'Agrimony' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Sou excessivamente ansioso/a para servir aos outros, negligenciando minha própria missão particular na vida.', nome: 'Centaury' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Embora eu tenha ideais ambiciosos na vida, às vezes sou tentado desviar de meus próprios ideais, metas e trabalho pelo entusiasmo, convicções ou opiniões fortes dos outros.', nome: 'Walnut' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Algumas vezes sou atacado/a por pensamentos dos tipos ciúmes, inveja, vingança, suspeição, entre outros. Dentro de mim sofro muito, mesmo quando não há uma causa real para minha infelicidade.', nome: 'Holly' },

                { categoria: 'desanimoOuDesespero', text: 'Não me considero tão bom/boa ou capaz quanto aqueles ao meu redor, espero fracassar e sinto que nunca serei um sucesso, portanto não me arrisco ou não faço uma tentativa forte o suficiente para ter sucesso.', nome: 'Larch' },
                { categoria: 'desanimoOuDesespero', text: 'Eu me culpo e nunca estou satisfeito/a com meus esforços ou resultados, trabalho duro e sofro muito com os fracassos que atribuo a mim mesmo. Às vezes, há um erro por parte de outra pessoa, mas assumo a responsabilidade por isso.', nome: 'Pine' },
                { categoria: 'desanimoOuDesespero', text: 'Estou fazendo um bom trabalho, seguindo a vocação da minha vida e espero fazer algo de importância para mim e/ou demais pessoas. No entanto, às vezes há períodos de depressão quando sinto que a tarefa que abracei é muito difícil e não está ao meu alcance.', nome: 'Elm' },
                { categoria: 'desanimoOuDesespero', text: 'Em momentos de angústia, sinto uma sobrecarga, como se minha mente e corpo tivessem atingido seu limite, e parece que não resta nada além de destruição e aniquilação.', nome: 'Sweet Chestnut' },
                { categoria: 'desanimoOuDesespero', text: 'Estou em grande sofrimento sob condições que produzem grande infelicidade (como o choque de notícias graves, a perda de uma pessoa querida, ou o terror subsequente a um acidente).', nome: 'Star of Bethlehem' },
                { categoria: 'desanimoOuDesespero', text: 'Sinto amargura e ressentimento em relação às tribulações da vida, sinto que não mereço tais tribulações e perdi o interesse em coisas que antes apreciava.', nome: 'Willow' },
                { categoria: 'desanimoOuDesespero', text: 'Luto com as dificuldades da vida diária, mantendo a coragem para continuar lutando.', nome: 'Oak' },
                { categoria: 'desanimoOuDesespero', text: 'Sinto que sou uma pessoa impura, indigna ou insatisfeita com minha aparência física ou personalidade. Preocupo-me constantemente em eliminar impurezas e imperfeições de meu corpo e do ambiente em que me encontro.', nome: 'Crab Apple' },

                { categoria: 'preocupacaoBemEstarAlheio', text: 'Atento-me excessivamente às necessidades dos outros, sempre buscando corrigir o que consideram errado e desejando que aqueles por quem me preocupo permaneçam perto de mim.', nome: 'Chicory' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Possuo ideias e princípios fixos, força de vontade e coragem. Desejo converter todos ao meu redor para meu próprio ponto de vista sobre a vida.', nome: 'Vervain' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Sou muito capaz, seguro/a de minhas habilidades e acredito que seria benéfico para os outros se pudessem ser persuadidos a fazerem as coisas como faço.', nome: 'Vine' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Sinto a necessidade de ver mais o bem e a beleza em tudo ao meu redor, sou capaz de ser mais tolerante, indulgente e compreensivo/a com as diferenças individuais.', nome: 'Beech' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Nego muitas alegrias e prazeres da vida em nome do trabalho, pois sou muito estrito/a em meu modo de viver. Sou duro/a comigo mesmo/a e disponho-me a fazer qualquer coisa para me manter bem, forte e ativo/a.', nome: 'Rock Water' }
            ],
        };
    }

    obterCategoria(categoria) {
        return this.data.perguntas.filter(q => q.categoria === categoria);
    }
}
