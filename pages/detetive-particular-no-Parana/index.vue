<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular no Paraná.
          <br>
          Precisando de um detetive particular no Paraná?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está no Paraná e queremos ajudar você a solucionar suas dúvidas.
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
        <!-- Cidades A -->
        <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-1">
              A
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Adrianopolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Adrianópolis - PR
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AgudosDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Agudos do Sul - PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Antonina">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Antonina - PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Araucaria">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Araucária - PR
            </a>
          </div>
        </div>
        <!-- Cidades B -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              B
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalsaNova">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Balsa Nova - PR
          </a>
          <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BocaiuvaDoSul">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Bocaiuva do Sul - PR
          </a>
        </div>
        <!-- Cidades C -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              C
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampoDoTenente">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campo do Tenente – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampoLargo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campo Largo – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cascavel">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cascavel – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampinaGrandeDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campina Grande do Sul – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampoMagro">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campo Magro – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CerroAzul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cerro Azul – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Contenda">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Contenda – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Curitiba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Curitiba – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Colombo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Colombo – PR
            </a>
          </div>
        </div>
        <!-- Cidades D -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              D
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg mt-4 px-0">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DoutorUlysses">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Doutor Ulysses – PR
            </a>
          </div>
        </div>
        <!-- Cidades F -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              F
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="FozDoIguacu">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Foz do Iguaçu – PR
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="FazendaRioGrande">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Fazenda Rio Grande – PR
          </a>
        </div>
        <!-- Cidades G -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              G
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Guaraquecaba">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Guaraqueçaba – PR
          </a>
          <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Guaratuba">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Guaratuba – PR
          </a>
        </div>
        <!-- Cidades I -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              I
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itaperucu">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Itaperuçu – PR
          </a>
        </div>
        <!-- Cidades L -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              L
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lapa">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Lapa – PR
          </a>
          <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Londrina">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Londrina – PR
          </a>
        </div>
        <!-- Cidades M -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              M
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Mandirituba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mandirituba – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Matinhos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Matinhos – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Maringa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Maringá – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Morretes">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Morretes – PR
            </a>
          </div>
        </div>
        <!-- Cidades P -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              P
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Pinhais">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pinhais – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Piraquara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Piraquara – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PontalDoParana">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pontal do Paraná – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PontaGrossa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ponta Grossa – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Paranagua">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Paranaguá – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Piên">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Piên – PR
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PatoBranco">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pato Branco – PR
            </a>
          </div>
        </div>
        <!-- Cidades Q -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              Q
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Quitandinha">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Quitandinha – PR
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="QuatroBarras">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Quatro Barras – PR
          </a>
        </div>
        <!-- Cidades R -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              R
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioBrancoDoSul">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio Branco do Sul – PR
          </a>
        </div>
        <!-- Cidades S -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              S
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoseDosPinhais">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> São José dos Pinhais – PR
          </a>
        </div>
        <!-- Cidades T -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              T
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TijucasDoSul">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Tijucas do Sul – PR
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TunasDoParana">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Tunas do Paraná – PR
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Toledo">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Toledo – PR
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
    title: 'Detetive particular no Paraná | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  },
  methods: {
    Adrianopolis () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Adrianopolis-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AgudosDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Agudos-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Antonina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Antonina-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Araucaria () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Araucaria-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalsaNova () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Balsa-Nova-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BocaiuvaDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Bocaiuva-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampoDoTenente () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-do-Tenente-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampoLargo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Largo-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cascavel () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cascavel-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampinaGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campina-Grande-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampoMagro () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Magro-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CerroAzul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cerro-Azul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Contenda () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Contenda-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Curitiba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Curitiba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Colombo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Colombo-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DoutorUlysses () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Doutor-Ulysses-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    FozDoIguacu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Foz-do-Iguacu-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    FazendaRioGrande () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Fazenda-Rio-Grande-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guaraquecaba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaraquecaba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guaratuba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaratuba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itaperucu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Itaperucu-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lapa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Lapa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Londrina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Londrina-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Mandirituba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Mandirituba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Matinhos () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Matinhos-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Maringa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Maringa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Morretes () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Morretes-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Pinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pinhais-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Piraquara () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Piraquara-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PontalDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pontal-do-Parana-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PontaGrossa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Ponta-Grossa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Paranagua () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Paranagua-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Piên () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pien-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PatoBranco () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pato-Branco-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Quitandinha () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quitandinha-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    QuatroBarras () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quatro-Barras-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioBrancoDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Rio-Branco-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoseDosPinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Sao-Jose-dos-Pinhais-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TijucasDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tijucas-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TunasDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tunas-do-Parana-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Toledo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Toledo-PR#sobre')
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
