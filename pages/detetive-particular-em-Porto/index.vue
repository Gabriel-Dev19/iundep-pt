<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detective privado em Porto.
          <br>
          Precisando de um detective privado em Porto?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETECTIVES está em Porto e queremos ajudar você a solucionar suas dúvidas.
          Com mais de 20 anos de experiência e centenas de casos resolvidos, atuamos em todo o território nacional
          e países do Mercosul. Nosso principal trabalho é esclarecer as dúvidas de nossos clientes, antes
          de tomar uma atitude perante a situação em que você está vivenciando, é importante que você tenha
          plena certeza de tudo que está acontecendo.
        </p>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          Nossa agência é especializada em investigações de caráter conjugal, industrial, empresarial,
          comercial, familiar, política e assuntos privados. Seja qual for o seu problema e complexidade
          do caso que você vem enfrentando, a IUNDEP DETECTIVES terá a satisfação em ajuda-lo a desvendar.
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
      Encontre um detective privado na sua cidade
    </h2>
    <section class="col-12 px-0">
      <div class="container px-xs-0">
        <!-- Cidades C -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              A
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Amarante">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Amarante
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Felgueiras">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Felgueiras
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
              G
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Gondomar">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Gondomar
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
              L
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lousada">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Lousada
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
              M
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Maia">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Maia
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MarcoDeCanaveses">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Marco de Canaveses
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Matosinhos">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Matosinhos
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
              P
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PacosDeFerreira">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Paços de Ferreira
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Paredes">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Paredes
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Penafiel">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Penafiel
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Porto">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Porto
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PovoaDeVarzim">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Póvoa de Varzim
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
              S
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaMariaDeFeira">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Maria de Feira
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantoTirso">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Santo Tirso
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
              V
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Valongo">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Valongo
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VilaDoConde">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Vila do Conde
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VilaNovaDeGaia">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Vila Nova de Gaia
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
    title: 'Detective privado em Porto | Porto | Évora  | Braga | Faro | Coimbra | Aveiro '
  },
  methods: {
    Amarante () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Amarante#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Felgueiras () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Felgueiras#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Gondomar () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Gondomar#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lousada () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Lousada#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Maia () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Maia#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MarcoDeCanaveses () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Marco-de-Canaveses#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Matosinhos () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Matosinhos#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PacosDeFerreira () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Pacos-de-Ferreira#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Paredes () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Paredes#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Penafiel () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Penafiel#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Porto () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Porto#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PovoaDeVarzim () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Povoa-de-Varzim#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaMariaDeFeira () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Santa-Maria-de-Feira#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantoTirso () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Santo-Tirso#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Valongo () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Valongo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VilaDoConde () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Vila-do-Conde#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VilaNovaDeGaia () {
      this.$router.push('/detetive-particular-em-Porto/detetive-particular-em-Vila-Nova-de-Gaia#sobre')
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
