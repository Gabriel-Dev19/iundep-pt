<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular em Coimbra.
          <br>
          Precisando de um detetive particular em Coimbra?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está em Coimbra e queremos ajudar você a solucionar suas dúvidas.
          Com mais de 20 anos de experiência e centenas de casos resolvidos, atuamos em todo o território nacional
          e países do Mercosul. Nosso principal trabalho é esclarecer as dúvidas de nossos clientes, antes
          de tomar uma atitude perante a situação em que você está vivenciando, é importante que você tenha
          plena certeza de tudo que está acontecendo.
        </p>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          Nossa agência é especializada em investigações de caráter conjugal, industrial, empresarial,
          comercial, familiar, política e assuntos privados. Seja qual for o seu problema e complexidade
          do caso que você vem enfrentando, a IUNDEP DETETIVES terá a satisfação em ajuda-lo a desvendar.
        </p>
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <BtnAzulWhatsapp class="mt-2" />
        </div>
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <btn-azul-ligue-agora class="mt-10" />
        </div>
      </div>
      <div class="col-lg order-xs-1 d-xs-none d-sm-none d-lg-flex order-sm-1 order-lg-2 px-0 ml-lg-30">
        <card-sobre />
      </div>
    </div>
    <h2 class="text-azul fs-xs-36 fs-sm-40 fs-lg-32 mt-xs-70 mt-sm-70 mt-lg-100 text-center col-12 px-0 fw-600">
      Encontre um detetive particular na sua cidade
    </h2>
    <section class="col-12 px-0">
      <div class="container px-xs-0">
        <!-- Cidades C -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              C
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Coimbra">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Coimbra
          </a>
        </div>
      </div>
    </section>
    <section class="col-12 px-0">
      <div class="container px-xs-0">
        <!-- Cidades C -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              F
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="FigueiraDaFoz">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Figueira da Foz
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BtnAzulWhatsapp from '../../components/buttons/btn-azul-fale-no-whatsapp'
import BtnAzulLigueAgora from '../../components/buttons/btn-azul-ligue-agora.vue'
import cardSobre from '../../components/components-minus/card-sobre.vue'
export default {
  components: {
    cardSobre,
    BtnAzulWhatsapp,
    BtnAzulLigueAgora
  },
  layout: 'LayoutSobre',
  head: {
    title: 'Detetive particular em Coimbra | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  },
  methods: {
    Coimbra () {
      this.$router.push('/detetive-particular-em-Coimbra/detetive-particular-em-Coimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    FigueiraDaFoz () {
      this.$router.push('/detetive-particular-em-Coimbra/detetive-particular-em-Figueira-da-Foz#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    }
  }
}
</script>
<style scoped>

</style>
