<template>
  <div>
    <div class="col-12 px-0">
      <h1 class="text-azul fs-xs-36 text-center fw-600">
        Nossos serviços
      </h1>
    </div>
    <div class="d-flex px-0 justify-content-lg-center row mx-auto mt-xs-40 mt-sm-60">
      <div class="col-xs-11 col-sm-11 col-lg col-lg px-0 mb-40 mt-lg-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 fw-600">
          Investigação conjugal
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 fw-600">
          A infidelidade conjugal atualmente está se tornando algo banal,
          mas para a parte traída não é bem assim. Muitos são os problemas gerados
          por uma traição, traumas psicológicos, danos morais e financeiros entre outros.
          Atualmente estamos vivenciando tempos em que os valores estão confusos.
          A era digital proporciona uma grande facilidade na comunicação através
          de sites e aplicativos que contribui para que tudo isso aconteça.
        </p>
        <div class="d-flex justify-content-start">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowInvestigacaoConjugalDesktop')">
            Investigação conjugal
          </button>
        </div>
      </div>
      <div class="col-1 px-0 position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
      <div class="col-xs-11 col-sm-11 col-lg px-0 mb-40 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 text-lg-right fw-600">
          Investigação empresarial
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 text-lg-right fw-600">
          Sua empresa está passando por problemas ou irregularidades? Você está desconfiado
          de seu sócio, funcionário ou até mesmo de seu concorrente? Muitas vezes quando
          isso ocorre, os empresários e diretores acabam recorrendo a ajuda de uma investigação
          empresarial para descobrirem o que há de errado na empresa.
          Monitore todo e qualquer tipo de comunicação na sua empresa para se
          proteger de funcionários e sócios desleais.
        </p>
        <div class="d-flex justify-content-lg-end">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowInvestigacaoEmpresarialDesktop')">
            Investigação empresarial
          </button>
        </div>
      </div>
      <div class="col-1 px-0 d-lg-none position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
    </div>
    <div class="d-flex px-0 justify-content-lg-center row mx-auto">
      <div class="col-xs-11 col-sm-11 col-lg col-lg px-0 mb-40 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 fw-600">
          Investigação política
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 fw-600">
          Atualmente tem se tornado cada dia mais frequente os casos envolvendo
          corrupção política e ao conjunto de Investigação Política em nosso Pais.
          As práticas ilícitas praticadas por políticos e seus assessores, durante
          a campanha ou até mesmo, no exercício da função, crescem assustadoramente.
          Quem nunca ouviu falar ou presenciou casos de irregularidades na política
          como compra de votos, propina ou desvio de verbas?
        </p>
        <div class="d-flex justify-content-start">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowInvestigacaoPoliticaDesktop')">
            Investigação política
          </button>
        </div>
      </div>
      <div class="col-1 px-0 position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
      <div class="col-xs-11 col-sm-11 col-lg col-lg px-0 mb-40 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 text-lg-right pr-lg-0 fw-600">
          Localização de pessoas
        </h3>
        <p class="fs-xs-16 fs-sm-17 text-lg-right mt-15 fw-600">
          Procurando algum parente? Sua empresa possui devedores que já não consegue mais localizá-los?
          A investigação de localização de pessoas é muito complexa, por isso nós da IUNDEP Detetives contamos com
          uma equipe experiente, capacitada e com técnicas investigativas que fornecem a nós informações atuais
          sobre o alvo.
        </p>
        <div class="d-flex justify-content-lg-end">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowLocalizacaoDePessoasDesktop')">
            Localização de pessoas
          </button>
        </div>
      </div>
      <div class="col-1 px-0 d-lg-none position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
    </div>
    <div class="d-flex px-0 justify-content-lg-center row mx-auto">
      <div class="col-xs-11 col-sm-11 col-lg px-0 mb-40 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 fw-600">
          Espião de celular para filhos
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 fw-600">
          Você precisa ter acesso ao que seu filho está fazendo na rua ou mesmo nas horas vagas em casa
          enquanto está trancado em seu quarto em frente ao computador ou telefone? Nosso Software espião
          de celular monitora todas essas atividades. Você tem acesso do seu celular ou computador do filho
          para saber todas as conversas de WhatsApp, Instagram, E-mail, Skype, Localização do aparelho,
          acesso a câmera e muito mais.
        </p>
        <div class="d-flex justify-content-start">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowSoftwareEspiaoDesktop')">
            Espião de celular para filhos
          </button>
        </div>
      </div>
      <div class="col-1 px-0 position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
      <div class="col-xs-11 col-sm-11 col-lg col-lg mb-xs-40 mb-sm-40 mb-lg-0 px-0 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 text-lg-right pr-lg-0 fw-600">
          Curso de detetive particular
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 text-lg-right fw-600">
          Venha se especializar com quem é líder no ramo de Investigação Particular. Realizando nosso Curso de Detetive
          Particular, você estará recebendo online um material de qualidade para estudar em suas horas vagas, sem sair de
          casa.
        </p>
        <div class="d-flex justify-content-lg-end">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowCursoDesktop')">
            Curso de detetive particular
          </button>
        </div>
      </div>
      <div class="col-1 px-0 d-lg-none position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
    </div>
    <div class="d-flex px-0 justify-content-lg-center row mx-auto">
      <div class="col-xs-11 col-sm-11 col-lg px-0 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 fw-600">
          Acompanhamento de filho
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 fw-600">
          Nos dias atuais a preocupação com nossos filhos é cada vez maior. Muitas sãos
          as razões desta grande preocupação, tais como: acesso à internet onde podem encontrar
          várias armadilhas e eles inocentemente acabam se deixando influenciar, envolvimento
          com más companhias que acabam influenciando eles a uma vida perigosa, entre outras situações.
        </p>
        <div class="d-flex justify-content-start">
          <button class="px-20 btn mt-1 btn-azul text-white pt-1 fs-17 fw-600" @click.prevent="$root.$emit('ShowAcompanhamentoDesktop')">
            Acompanhamento de filho
          </button>
        </div>
      </div>
      <div class="col-1 px-0 position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
      <div class="col-xs-11 col-sm-11 col-lg px-0 mt-30">
        <h3 class="text-azul pr-xs-4 pr-sm-4 pr-lg-0 text-lg-right fw-600">
          Entre em contato conoso!
        </h3>
        <p class="fs-xs-16 fs-sm-17 mt-15 text-lg-right fw-600">
          Seja qual for o tipo de investigação que você necessita, clique no botão abaixo
          e entre em contato com nossa equipe de detetives agora mesmo. A IUNDEP Detetives
          está disposta a estudar se caso e traçar a melhor estratégia para que você possa ter
          os melhores resultados em sua investigação.
        </p>
        <div class="d-flex justify-content-lg-end">
          <a v-smooth-scroll="{duration: 500, offset: -70}" href="#contato" class="px-20 btn mt-1 btn-azul text-white pt-1 border-radius-20 fs-17 fw-600">
            Fale conoso agora mesmo!
          </a>
        </div>
      </div>
      <div class="col-1 px-0 d-lg-none position-relative d-flex justify-content-center mx-0 row">
        <div class="bolinha-seta-servicos d-flex justify-content-center align-items-center">
          <i class="fa fa-angle-down text-white fw-300 fs-38" />
        </div>
        <div class="bl-azul h-100 position-absolute" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'LayoutServicos',
  head: {
    link: [
      { rel: 'alternate', href: 'https://iundep.com.br/servicos', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://iundep.com.br/servicos', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://iundepdetectives.pt/servicos', hreflang: 'pt' }
    ]
  },
  created () {
    this.$root.$on('ShowInvestigacaoConjugalDesktop', () => {
      this.$router.push('/servicos/investigacao-conjugal/')
    })
    this.$root.$on('ShowInvestigacaoEmpresarialDesktop', () => {
      this.$router.push('/servicos/investigacao-empresarial/')
    })
    this.$root.$on('ShowInvestigacaoPoliticaDesktop', () => {
      this.$router.push('/servicos/investigacao-politica/')
    })
    this.$root.$on('ShowLocalizacaoDePessoasDesktop', () => {
      this.$router.push('/servicos/localizacao-de-pessoas/')
    })
    this.$root.$on('ShowSoftwareEspiaoDesktop', () => {
      this.$router.push('/servicos/programa-de-celular-vip/')
    })
    this.$root.$on('ShowCursoDesktop', () => {
      this.$router.push('/servicos/curso-de-detetive-particular/')
    })
    this.$root.$on('ShowAcompanhamentoDesktop', () => {
      this.$router.push('/servicos/acompanhamento-de-filho/')
    })
  },
  mounted () {
    if (window.location.href === 'https://iundep.com.br/servicos/') {
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -70
      })
    }
  }
}
</script>
<style scoped>
  .fa-angle-down {
    margin-top: 2px;
  }

  .bl-azul {
    border-left: 1px solid var(--azul);
    z-index: -1;
  }

  @media (min-width: 1px) {
    .bolinha-seta-servicos {
      min-width: 40px;
      min-height: 40px;
      max-width: 40px;
      max-height: 40px;
      border-radius: 50%;
      background-color: var(--azul);
    }
  }

  @media (min-width: 576px) {
    .bolinha-seta-servicos {
      min-width: 45px;
      min-height: 45px;
      max-width: 45px;
      max-height: 45px;
      border-radius: 50%;
      background-color: var(--azul);
    }
  }
</style>
