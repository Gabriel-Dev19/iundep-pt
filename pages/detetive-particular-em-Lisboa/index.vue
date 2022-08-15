<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular em Lisboa.
          <br>
          Precisando de um detetive particular em Lisboa?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está em Lisboa e queremos ajudar você a solucionar suas dúvidas.
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
              A
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Alcobaca">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Alcobaça
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Alenquer">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Alenquer
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Almada">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Almada
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Amadora">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Amadora
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
              B
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Barreiro">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Barreiro
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
              C
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cascaes">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Cascaes
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lisboa">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Lisboa
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Loures">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Loures
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Mafra">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Mafra
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Moita">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Moita
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Montijo">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Montijo
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
              O
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Odivelas">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Odivelas
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Oeiras">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Oeiras
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Palmela">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Palmela
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Santarem">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Santarem
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sesimbra">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Sesimbra
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Setubal">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Setúbal
          </a>
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sintra">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Sintra
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
              T
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TorresVedras">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Torres Vedras
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VilaFrancaDeXira">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Vila Franca de Xira
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
    title: 'Detetive particular em Lisboa | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  },
  methods: {
    Alcobaca () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Alcobaca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Alenquer () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Alenquer#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Almada () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Almada#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Amadora () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Amadora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Barreiro () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Barreiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cascaes () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Cascaes#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lisboa () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Loures () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Loures#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Mafra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Moita () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Moita#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Montijo () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Montijo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Odivelas () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Odivelas#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Oeiras () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Oeiras#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Palmela () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Palmela#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Santarem () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sesimbra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Sesimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Setubal () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sintra () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Sintra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TorresVedras () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Torres-Vedras#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VilaFrancaDeXira () {
      this.$router.push('/detetive-particular-em-Lisboa/detetive-particular-em-Vila-Franca-de-Xira#sobre')
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
