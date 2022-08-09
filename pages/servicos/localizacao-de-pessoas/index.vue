<template>
  <div>
    <div class="col-12 px-0">
      <h1 class="text-azul fs-xs-36 text-center fw-600">
        Localização de pessoas
      </h1>
    </div>
    <div class="mt-xs-40 mt-sm-40 mt-lg-60 border-none">
      <div class="col-lg-4 mb-xs-50 mb-sm-50 mb-lg-20 mr-lg-30 float-left px-0">
        <div class="col-12 shadow-lg pb-30 pt-150 d-flex align-items-end px-0 bg-card border-radius-15">
          <div class="col-12 px-0">
            <h4 class="mx-3 text-xs-center text-sm-center text-lg-left text-white">
              Localização de pessoas
            </h4>
            <div class="col-10 mx-xs-auto mx-sm-auto mx-lg-0 bg-azul-claro h-3" />
            <p class="mx-3 text-white text-xs-center text-sm-center text-lg-left fs-16 fw-500 mt-1 mb-0">
              A investigação de localização de pessoas é muito complexa, por isso nós da IUNDEP Detetives contamos
              com uma equipe experiente, capacitada e com técnicas investigativas que fornecem a nós informações
              atuais sobre o alvo.
            </p>
            <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
              <btn-azul-ligue-agora class="mt-3 ml-3" />
            </div>
            <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
              <btn-azul-fale-no-whatsapp class="ml-3 mt-3" />
            </div>
          </div>
        </div>
      </div>
      <h3 class="text-azul fw-600 text-xs-center text-sm-center text-lg-left">
        Sobre a localização de pessoas
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Procurando algum parente? Sua empresa possui devedores que já não consegue
        mais localiza-os? Conheça os serviços que nós da IUNDEP Detetives podemos
        lhe oferecer a fim de beneficiá-lo na ajuda da localização da pessoa que
        você está procurando.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Sabemos que é muito difícil ficar sem notícias de um ente querido,
        chega a ser desesperador. Essa busca longa é difícil; como encontrar
        uma agulha no palheiro. Por isso através de nossas técnicas iremos proporcionar
        a você a ajuda nesta procura que você tanto almeja.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Consulte-nos sobre o nosso serviço para encontrar, um amor do passado, um amigo, um familiar,
        um devedor ou ainda alguma outra situação que você possa ter para encontrar uma pessoa.
        Possuímos inúmeras fontes de informação e ferramentas
        modernas capazes de localizar uma pessoa desejada.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Cada caso é particularmente estudado, a investigação realizada de acordo
        com a necessidade do cliente.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Não perca mais tempo, <a v-smooth-scroll="{duration: 500, offset: -70}" href="#contato" class="fw-600 p-0 btn-link">entre em contato agora</a> mesmo e consulte-nos sobre
        nossos serviços. Consulta sem compromisso.
      </p>
      <h3 class="text-azul mt-30 fw-600 text-xs-center text-sm-center text-lg-left">
        Como funciona nosso trabalho
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        A localização de pessoas tem por objetivo encontrar desaparecidos.
        Para que tenhamos êxito em nosso trabalho é fundamental que nosso cliente nos relate
        o maior número de informações possíveis relacionadas a pessoa investigada.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Para iniciarmos a investigação é necessários termos em mãos dados básicos, como:
        fotos, nome completo, última localização que o investigado foi visto e contatos
        de telefone pessoal ou de amigos próximos.
      </p>
      <h3 class="text-azul mt-30 fw-600 text-xs-center text-sm-center text-lg-left">
        A Localização de pessoas na IUNDEP Detetives
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Nossos profissionais possuem experiência em investigações estratégicas,
        aptidão extremamente relevantes no sucesso neste tipo de serviço.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Não perca mais tempo, as primeiras 48 horas são muito importantes
        para se obter sucesso. <a v-smooth-scroll="{duration: 500, offset: -70}" href="#contato" class="fw-600 p-0 btn-link">Entre em contato agora</a> mesmo e consulte-nos
        sobre nossos serviços. Consulta sem compromisso.
      </p>
    </div>
    <div id="buttonVoltar">
      <btn-voltar-servicos />
    </div>
  </div>
</template>
<script>
import btnAzulFaleNoWhatsapp from '../../../components/buttons/btn-azul-fale-no-whatsapp.vue'
import BtnAzulLigueAgora from '../../../components/buttons/btn-azul-ligue-agora.vue'
import BtnVoltarServicos from '../../../components/buttons/btn-voltar-servicos.vue'

export default {
  components: { btnAzulFaleNoWhatsapp, BtnAzulLigueAgora, BtnVoltarServicos },
  layout: 'LayoutServicos',
  head: {
    link: [
      { rel: 'alternate', href: 'https://iundep.com.br/servicos/localizacao-de-pessoas', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://iundep.com.br/servicos/localizacao-de-pessoas', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://iundepdetectives.pt/servicos/localizacao-de-pessoas', hreflang: 'pt' }
    ]
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('servicos'),
      duration: 500,
      offset: -60
    })
  }
}
</script>
<style scoped>
  .bg-card{
    background: linear-gradient(0deg, #000000c4, #00000067), url(../../../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    background-size: cover;
  }
  .border-none{
    border: 1px solid #ffffff00;
  }
  #buttonVoltar{
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 20;
  }
</style>
