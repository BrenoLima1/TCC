export class Floral{
    constructor() {
        this.data = {
            perguntas: [
                { categoria: 'medo', text: 'Simplesmente entro em estado de pânico. Não consigo me mover quando tenho certos pensamentos.', nome: 'Rock Rose', descricao:  'É o remédio contra o terror e, como tal, um importante ingrediente da fórmula de emergência.'},
                { categoria: 'medo', text: 'Temo coisas ruins existentes no mundo real, como dor, doenças, acidentes, pobreza, escuro, entre outros acontecerem comigo.', nome: 'Mimulus', descricao: 'Para os medos conhecidos, como quando você se sente assustado ou ansioso sobre algo que sabe nomear, que conhece.' },
                { categoria: 'medo', text: 'Temo seguir pensamentos e impulsos e fazer coisas que sei que são erradas.', nome: 'Cherry Plum', descricao: 'Esse é o floral para quando se perdeu o controle, pois esse estado em si mesmo produz um tipo de medo pavoroso e frenético.' },
                { categoria: 'medo', text: 'Sinto de que algo terrível vai acontecer, mas não sei exatamente o que.', nome: 'Aspen', descricao: 'Por um lado, o medo Aspen pode ser apenas a sensação de um pressentimento, a ansiedade desconfortável de pressentir que algo vai se passar. Por outro lado, pode ser um sentimento de medo profundo com sintomas físicos, como pele de galinha ou cabelos em pé.' },
                { categoria: 'medo', text: 'Temo que aqueles que amo sofram. Antecipo que algo desafortunado lhes aconteça.', nome: 'Red Chestnut', descricao: 'Os medos de Red Chestnut são naturais, preocupações normais exageradas ao ponto de surtir um efeito negativo sobre a pessoa objeto de preocupação, minando sua confiança e auto estima.' },

                { categoria: 'incerteza', text: 'Não tenho autoconfiança suficiente para tomar minhas próprias decisões. Constantemente procuro o conselho dos outros, sendo frequentemente mal orientado/a.', nome: 'Cerato', descricao: 'Nos ajuda a ter mais confiança em nosso discernimento, escutando assim nossa voz interior e confiar em nossa intuição' },
                { categoria: 'incerteza', text: 'Sou incapaz de decidir entre duas ou mais opções.', nome: 'Scleranthus', descricao: 'Tomar este remédio nos ajuda a conhecer-nos e a saber o que queremos. Ajuda-nos também a reconectar com nossa intuição e a nos tornarmos capazes de escolher de forma simples e assertiva.' },
                { categoria: 'incerteza', text: 'Sou facilmente desencorajado/a. Qualquer pequeno atraso ou obstáculo ao meu progresso causa dúvida e desânimo.', nome: 'Gentian', descricao: 'Pode ser usado para acelerar o processo para que nos possamos concentrar em agir para que as coisas dêem certo, em vez de ficar esperando que não tivessem dado errado.' },
                { categoria: 'incerteza', text: 'Sinto grande desesperança. Não acredito que possa fazer algo.', nome: 'Gorse', descricao: 'O problema central em Gorse é a falta de fé, a perda de esperança e de confiança em si mesmo. Quando a gente se permite ver as situações de um prisma diferente, sempre tem uma saída.' },
                { categoria: 'incerteza', text: 'Não possuo força física e/ou mental o suficiente para carregar o fardo da vida. Alguma parte de minha mente e/ou meu corpo deve ser fortalecida antes que eu possa facilmente completar meu trabalho.', nome: 'Hornbeam', descricao: 'Para combater o cansaço e a exaustão quando ocorrem antes mesmo do esforço ser feito.' },
                { categoria: 'incerteza', text: 'Apesar de desejar alcançar um alto nível de sucesso, reconhecimento ou fama, possuo dificuldade em determinar qual ocupação seguir.', nome: 'Wild Oat', descricao: 'Para aqueles que sentem que querem fazer algo com sua vida que realmente valha a pena, porém não sabem que direção tomar. Eles andam à deriva, de uma coisa para a outra, sem encontrar seu caminho verdadeiro. Como resultado, se frustam e se desanimam.' },

                { categoria: 'desinteresseNoPresente', text: 'Não tenho interesse na vida. Vivo mais em esperanças de tempos mais felizes, nos quais meus ideais poderão se tornar realidade.', nome: 'Clematis', descricao: 'Esse floral ajuda a nos trazer de volta para a terra e a cair em si para que a pessoa possa construir uma vida melhor em vez de continuar sonhando acordado' },
                { categoria: 'desinteresseNoPresente', text: 'Não espero felicidade maior da que tive no passado.', nome: 'Honeysuckle', descricao: 'Ajuda a aprender com o passado e a recordá-lo sem necessidade de o reviver, para que consigam se adentrar no presente e desfrutar tanto do dia de hoje como do amanhã.' },
                { categoria: 'desinteresseNoPresente', text: 'Apenas deslizo pela vida, não me esforço para melhorar as coisas. Apenas aceito a vida como ela é.', nome: 'Wild Rose', descricao: 'Em estado positivo, Wild Rose é a típica pessoa feliz e despreocupada. Em vez de apatia, um sentimento de propósito lhe traz uma satisfação e uma felicidade sempre crescente.' },
                { categoria: 'desinteresseNoPresente', text: 'A vida diária é um trabalho duro. Já sofri tanto que estou esgotado/a, sentindo que não possuo força para fazer nenhum esforço.', nome: 'Olive', descricao: 'É o remédio para o cansaço e a exaustão depois de qualquer tipo de esforço físico ou mental intenso ou depois de um período prolongado de convalescença.' },
                { categoria: 'desinteresseNoPresente', text: 'Não consigo impedir que pensamentos, ideias e argumentos indesejados entrem em minha cabeça. Após um tempo tendo descartado estes pensamentos, eles simplesmente retornam.', nome: 'White Chestnut', descricao: 'É o remédio para os pensamentos indesejados e para as discussões mentais que se introduzem em nossa linha de pensamento e não nos permitem concentrar.' },
                { categoria: 'desinteresseNoPresente', text: 'Sou suscetível a tempos de melancolia ou desespero. É muito difícil mostrar-me feliz ou alegre.', nome: 'Mustard', descricao: 'Este floral dissipa as nuvens negras que se apoderam de nós para que possamos de novo apreciar a alegria e a paz de nossas vidas.' },
                { categoria: 'desinteresseNoPresente', text: 'Levo muito tempo para aprender as lições da vida diária, pois não tiro proveito da observação e experiência.', nome: 'Chestnut Bud', descricao: 'É importante saber deixar seu passado para traz e prosseguir. No entanto, Chestnut Bud está, por assim dizer, “demasiado preparado” para isso! Ele dá tão pouca relevância ao passado que não aprende e acaba estando condenado a repetir seus erros.' },

                { categoria: 'solidao', text: 'Na saúde ou na doença gosto de ficar sozinho/a. Sou uma pessoa muito quieta.', nome: 'Water Violet', descricao: '' },
                { categoria: 'solidao', text: 'Eu luto com a dificuldade de ser paciente com pessoas lentas e anseio por fazer as coisas no meu próprio ritmo.', nome: 'Impatiens', descricao: '' },
                { categoria: 'solidao', text: 'Sempre busco a companhia de alguém disponível, não importando quem seja, pois a acho necessária. Ficar sozinho/a por qualquer período de tempo me deixa infeliz.', nome: 'Heather', descricao: '' },

                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Concordo em abrir mão de muito para não haver nenhuma briga ou discussão e escondo minhas preocupações por trás de humor e brincadeira.', nome: 'Agrimony', descricao: '' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Sou excessivamente ansioso/a para servir aos outros, negligenciando minha própria missão particular na vida.', nome: 'Centaury', descricao: '' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Embora eu tenha ideais ambiciosos na vida, às vezes sou tentado a desviar de meus próprios ideais, metas e trabalho pelo entusiasmo, convicções ou opiniões fortes dos outros.', nome: 'Walnut', descricao: '' },
                { categoria: 'sensivelAInfluenciasEIdeias', text: 'Algumas vezes sou atacado/a por pensamentos dos tipos ciúmes, inveja, vingança, suspeição, entre outros. Dentro de mim sofro muito, mesmo quando não há uma causa real para minha infelicidade.', nome: 'Holly', descricao: '' },

                { categoria: 'desanimoOuDesespero', text: 'Não me considero tão bom/boa ou capaz quanto aqueles ao meu redor, espero fracassar e sinto que nunca serei um sucesso, portanto não me arrisco ou não faço uma tentativa forte o suficiente para ter sucesso.', nome: 'Larch', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Eu me culpo e nunca estou satisfeito/a com meus esforços ou resultados, trabalho duro e sofro muito com os fracassos que atribuo a mim mesmo. Às vezes, há um erro por parte de outra pessoa, mas assumo a responsabilidade por isso.', nome: 'Pine', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Estou fazendo um bom trabalho, seguindo a vocação da minha vida e espero fazer algo de importância para mim e/ou demais pessoas. No entanto, às vezes há períodos de depressão quando sinto que a tarefa que abracei é muito difícil e não está ao meu alcance.', nome: 'Elm', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Em momentos de angústia, sinto uma sobrecarga, como se minha mente e corpo tivessem atingido seu limite, e parece que não resta nada além de destruição e aniquilação.', nome: 'Sweet Chestnut', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Estou em grande sofrimento sob condições que produzem grande infelicidade (como o choque de notícias graves, a perda de uma pessoa querida, ou o terror subsequente a um acidente).', nome: 'Star of Bethlehem', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Sinto amargura e ressentimento em relação às tribulações da vida, sinto que não mereço tais tribulações e perdi o interesse em coisas que antes apreciava.', nome: 'Willow', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Luto com as dificuldades da vida diária, mantendo a coragem para continuar lutando.', nome: 'Oak', descricao: '' },
                { categoria: 'desanimoOuDesespero', text: 'Sinto que sou uma pessoa impura, indigna ou insatisfeita com minha aparência física ou personalidade. Preocupo-me constantemente em eliminar impurezas e imperfeições de meu corpo e do ambiente em que me encontro.', nome: 'Crab Apple', descricao: '' },

                { categoria: 'preocupacaoBemEstarAlheio', text: 'Atento-me excessivamente às necessidades dos outros, sempre buscando corrigir o que consideram errado e desejando que aqueles por quem me preocupo permaneçam perto de mim.', nome: 'Chicory', descricao: '' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Possuo ideias e princípios fixos, força de vontade e coragem. Desejo converter todos ao meu redor para meu próprio ponto de vista sobre a vida.', nome: 'Vervain', descricao: '' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Sou muito capaz, seguro/a de minhas habilidades e acredito que seria benéfico para os outros se pudessem ser persuadidos a fazerem as coisas como faço.', nome: 'Vine', descricao: '' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Sinto a necessidade de ver mais o bem e a beleza em tudo ao meu redor, sou capaz de ser mais tolerante, indulgente e compreensivo/a com as diferenças individuais.', nome: 'Beech', descricao: '' },
                { categoria: 'preocupacaoBemEstarAlheio', text: 'Nego muitas alegrias e prazeres da vida em nome do trabalho, pois sou muito estrito/a em meu modo de viver. Sou duro/a comigo mesmo/a e disponho-me a fazer qualquer coisa para me manter bem, forte e ativo/a.', nome: 'Rock Water', descricao: '' }
            ],
        };
    }

    obterCategoria(categoria) {
        return this.data.perguntas.filter(q => q.categoria === categoria);
    }

    obterDescricao(nome) {
        const question = this.data.perguntas.find(q => q.nome === nome);
        return question ? question.descricao : '';
    }

}
