<template>
  <div>
    <header>
      <nav v-scroll="ScrollNav" class="nav navbar pb-xs-3 fixed-top" :class="{'bg-azul shadow pt-xs-3' : BgAzulNav, 'pt-xs-20 pt-sm-30 pt-lg-30 pt-xl-50' : !BgAzulNav}">
        <div class="container">
          <a href="" class="no-underline">
            <img src="../assets/img/logo-branca.webp" class="width-logo" alt="Logo">
          </a>
          <div class="d-flex">
            <div class="position-relative d-xs-none d-sm-none d-lg-block">
              <button class="btn d-flex px-20 align-items-center fs-18 pt-1 fw-600" :class="{'btn-outline-light': !ShowDropdownServicos, 'btn-light': ShowDropdownServicos}" @click.prevent="ToggleDropdownServices">
                <i class="fa fa-cog fw-300 mr-2" /> Serviços <i class="fa ml-2 mt-1" :class="{'fa-angle-down': !ShowDropdownServicos, 'fa-times fs-15': ShowDropdownServicos}" />
              </button>
              <transition enter-active-class="animate-show-dropdown" leave-active-class="animate-hide-dropdown">
                <div v-show="ShowDropdownServicos" class="dropdown-servicos border-radius-5 shadow">
                  <div class="col-12 bg-dropdown overflow-hidden border-radius-5 border px-0 h-100 position-relative">
                    <div class="bg-dropdown blur-dropdown h-100 px-0 border-radius-5 col-12" />
                    <div class="content-dropdown px-10 py-2 col-12 h-100">
                      <div class="d-flex">
                        <div class="col-6 px-0">
                          <h6 class="mb-1 fs-19 ml-10 fw-600">
                            Investigações gerais
                          </h6>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="InvestigacaoConjugalDesktopNavbar">
                            Investigação conjugal
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="InvestigacaoEmpresarialDesktopNavbar">
                            Investigação empresarial
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="InvestigacaoPoliticaDesktopNavbar">
                            Investigação polítca
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="LocalizacaoDesktopNavbar">
                            Localização de pessoas
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="TodosOsServicosNavbar">
                            Todos os serviços
                          </button>
                        </div>
                        <div class="col-6 px-0">
                          <h6 class="mb-1 fs-19 ml-10 fw-600">
                            Outros serviços
                          </h6>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="SoftwareEspiaoDesktopNavbar">
                            Programa de celular VIP
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="CursoDesktopNavbar">
                            Curso de detetive particular
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="AcompanhamentoDesktopNavbar">
                            Acompanhamento de filhos
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="Politica">
                            Política de privacidade
                          </button>
                          <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="Trabalhe">
                            Trabalhe com a IUNDEP
                          </button>
                        </div>
                      </div>
                      <div class="col-12 mt-20 px-0">
                        <h6 class="mb-1 fs-19 ml-10 fw-600">
                          Dicas e artigos
                        </h6>
                        <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="QuandoContratar">
                          Quando contratar uma investigação conjugal?
                        </button>
                        <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="InstalarSoftware">
                          Instalação do Programa de celular
                        </button>
                        <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="FilhosConduta">
                          Filhos rebeldes
                        </button>
                        <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="ComoRealizamosConjugal">
                          Como realizamos a investigação conjugal
                        </button>
                        <button class="btn btn-azul fw-600 fs-17 mt-2 pt-1 text-white px-20" @click.prevent="EmpresaFraudada">
                          Como saber se sua empresa está sendo prejudicada?
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <div class="position-relative d-xs-none d-sm-none d-lg-block">
              <button class="btn ml-20 d-flex px-20 align-items-center fs-18 pt-1 fw-600" :class="{'btn-outline-light': !ShowDropdownEstados, 'btn-light': ShowDropdownEstados}" @click.prevent="ToggleDropdownEstados">
                <i class="fa fa-map-marker-alt fw-300 mr-2" /> Estados atendidos <i class="fa ml-2 mt-1" :class="{'fa-angle-down': !ShowDropdownEstados, 'fa-times fs-15': ShowDropdownEstados}" />
              </button>
              <transition enter-active-class="animate-show-dropdown" leave-active-class="animate-hide-dropdown">
                <div v-show="ShowDropdownEstados" class="dropdown-estados shadow">
                  <div class="col-12 bg-dropdown overflow-hidden border-radius-5 px-0 h-100 position-relative">
                    <div class="bg-dropdown blur-dropdown h-100 border-radius-5 col-12 px-0" />
                    <div class="content-dropdown col-12 h-100 px-10 py-2">
                      <h6 class="mb-0 fs-19 ml-10 fw-600">
                        Localidades
                      </h6>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="AveiroDesktop">
                        Aveiro
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="BragaDesktop">
                        Braga
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="BragancaDesktop">
                        Bragança
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="CasteloBrancoDesktop">
                        Castelo Branco
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="CoimbraDesktop">
                        Coimbra
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="EvoraDesktop">
                        Évora
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="FaroDesktop">
                        Faro
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="GuardaDesktop">
                        Guarda
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="LeiriaDesktop">
                        Leiria
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="LisboaDesktop">
                        Lisboa
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="PortalegreDesktop">
                        Portalegre
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="PortoDesktop">
                        Porto
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="SantaremDesktop">
                        Santarem
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="SetubalDesktop">
                        Setúbal
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="VianaDoCasteloDesktop">
                        Viana do Castelo
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="VilaRealDesktop">
                        Vila Real
                      </button>
                      <button class="btn btn-azul fw-600 fs-18 col-12 mt-2 pt-1 text-white px-20" @click.prevent="ViseuDesktop">
                        Viseu
                      </button>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
            <button class="btn-light ml-lg-20 btn d-flex pl-25 pr-20 align-items-center fs-18 pt-1 fw-700" @click.prevent="OpenNav">
              Menu <i class="fa fa-th-list fs-17 ml-2" />
            </button>
            <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
              <div v-show="ShowNavEvent" class="offset-nav" @click.prevent="CloseNav">
                <div class="container h-100 d-xs-none d-sm-none d-xl-flex align-items-center">
                  <div class="col-12 d-flex row mx-auto px-0">
                    <h3 class="col-12 mb-30 fw-600">
                      Assuntos em destaque <i class="fa fa-arrow-right fs-20 fw-400" />
                    </h3>
                    <div class="col-4 shadow-lg pb-30 d-flex align-items-end px-0 bg-card-nav-1 border-radius-15" @click.stop="">
                      <div class="col-12 px-0">
                        <h4 class="mx-3 text-white">
                          Investigação conjugal
                        </h4>
                        <div class="col-10 bg-azul-claro h-3" />
                        <p class="mx-3 text-white fs-15 mt-1 fw-500 mb-0">
                          A infidelidade conjugal atualmente está se tornando algo banal,
                          mas para a parte traída não é bem assim. Muitos são os problemas gerados
                          por uma traição, traumas psicológicos, danos morais e financeiros entre outros.
                        </p>
                        <button class="btn btn-azul fs-17 ml-3 mt-3 px-20 pt-1 fw-600 text-white" @click.prevent="InvestigacaoConjugalDesktopNavbar">
                          Investigação conjugal
                        </button>
                      </div>
                    </div>
                    <div class="col-4 shadow-lg pb-30 ml-4 d-flex align-items-end px-0 bg-card-nav-2 border-radius-15" @click.stop="">
                      <div class="col-12 px-0">
                        <h4 class="mx-3 text-white">
                          Investigação empresarial
                        </h4>
                        <div class="col-10 bg-azul-claro h-3" />
                        <p class="mx-3 text-white fs-15 fw-500 mt-1 mb-0">
                          Sua empresa está passando por problemas ou irregularidades? Você está desconfiado de seu sócio,
                          funcionário ou até mesmo de seu concorrente? Procure ajuda profissional agora mesmo! Ligue pra gente
                          ou mande uma mensagem.
                        </p>
                        <button class="btn btn-azul fs-17 ml-3 mt-3 px-20 pt-1 fw-600 text-white" @click.prevent="InvestigacaoEmpresarialDesktopNavbar">
                          Investigação empresarial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
            <transition enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutRight">
              <aside v-show="ShowNavEvent" class="nav-event pl-20 pt-15 pb-50">
                <button class="btn pl-0 text-white fs-20 d-flex fw-500 align-items-center" @click.prevent="CloseNav">
                  <i class="fa fa-arrow-left text-white fs-16 mr-2 fw-400" /> Voltar
                </button>
                <h4 class="text-white mt-10 fw-600">
                  Menu principal
                </h4>
                <div class="pl-10 mt-20">
                  <button class="btn btn-outline-light d-flex fs-17 px-20 align-items-center pt-1 fw-600" @click.prevent="ScrollHomeDesktop">
                    <i class="fa fa-arrow-left fs-15 mr-2" /> Início
                  </button>
                  <button class="btn btn-outline-light d-xs-flex d-sm-flex d-lg-none mt-10 fs-17 px-20 align-items-center pt-1 fw-600" @click.prevent="ScrollSobreMobile">
                    <i class="fa fa-arrow-left fs-15 mr-2" /> Sobre nós
                  </button>
                  <button class="btn btn-outline-light d-xs-none d-sm-none d-lg-flex mt-10 fs-17 px-20 align-items-center pt-1 fw-600" @click.prevent="ScrollSobreDesktop">
                    <i class="fa fa-arrow-left fs-15 mr-2" /> Sobre nós
                  </button>
                  <button class="btn btn-outline-light d-xs-flex d-sm-flex d-lg-none mt-10 fs-17 px-20 align-items-center pt-1 fw-600" @click.prevent="ScrollContatoMobile">
                    <i class="fa fa-arrow-left fs-15 mr-2" /> Contato
                  </button>
                  <button class="btn btn-outline-light d-xs-none d-sm-none d-lg-flex mt-10 fs-17 px-20 align-items-center pt-1 fw-600" @click.prevent="ScrollContatoDesktop">
                    <i class="fa fa-arrow-left fs-15 mr-2" /> Contato
                  </button>
                  <div class="border-radius-20 borda-branca pt-15 pb-15 mt-10 col-11 px-20">
                    <h5 class="text-white bb-white fw-600 mb-0 pb-10 fs-17">
                      <i class="fa fa-arrow-left fs-15 mr-1" /> Nossos serviços
                    </h5>
                    <button class="btn btn-link text-white fs-17 mt-10 pl-0 py-0 fw-600" @click.prevent="InvestigacaoConjugalDesktopNavbar">
                      # Investigação conjugal
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="InvestigacaoEmpresarialDesktopNavbar">
                      # Investigação empresarial
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="InvestigacaoPoliticaDesktopNavbar">
                      # Investigação política
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="LocalizacaoDesktopNavbar">
                      # Localização de pessoas
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="SoftwareEspiaoDesktopNavbar">
                      # Programa de celular VIP
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="CursoDesktopNavbar">
                      # Curso de detetive
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="AcompanhamentoDesktopNavbar">
                      # Acompanhamento de filho
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="Politica">
                      # Políticas de privacidade
                    </button>
                    <button class="btn btn-link text-white fs-17 pl-0 py-0 fw-600" @click.prevent="Trabalhe">
                      # Trabalhe com a IUNDEP
                    </button>
                  </div>
                  <div class="border-radius-20 d-xs-block d-sm-block d-lg-none borda-branca pt-15 pb-15 mt-10 col-11 px-20">
                    <h5 class="text-white bb-white fw-600 mb-0 pb-10 fs-17">
                      <i class="fa fa-arrow-left fs-15 mr-1" /> Localidades atendidas
                    </h5>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="AveiroMobile">
                      # Aveiro
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="BragaMobile">
                      # Braga
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="BragancaMobile">
                      # Bragança
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="CasteloBrancoMobile">
                      # Castelo Branco
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="CoimbraMobile">
                      # Coimbra
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="EvoraMobile">
                      # Évora
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="FaroMobile">
                      # Faro
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="GuardaMobile">
                      # Guarda
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="LeiriaMobile">
                      # Leiria
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="LisboaMobile">
                      # Lisboa
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="PortalegreMobile">
                      # Portalegre
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="PortoMobile">
                      # Porto
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="SantaremMobile">
                      # Santarem
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="SetubalMobile">
                      # Setúbal
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="VianaDoCasteloMobile">
                      # Viana do Castelo
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="VilaRealMobile">
                      # Vila Real
                    </button>
                    <button class="btn btn-link text-white col-12 px-0 text-left fs-17 pl-0 py-0 fw-600" @click.prevent="ViseuMobile">
                      # Viseu
                    </button>
                  </div>
                </div>
                <h4 class="text-white mt-40 fw-600">
                  Nossas redes sociais
                </h4>
                <div class="d-flex justify-content-center mt-20 pl-0 pr-20 col-12">
                  <a href="https://www.facebook.com/Detetives-Iundep-103095312037313" target="_blank" class="no-underline" rel="noopener noreferrer">
                    <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center">
                      <i class="fab fa-facebook-f text-dark fs-26" />
                    </div>
                  </a>
                  <a href="https://twitter.com/iundepdetetives" target="_blank" class="no-underline mx-10" rel="noopener noreferrer">
                    <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center">
                      <i class="fab fa-twitter text-dark fs-26" />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCIRIGfLBfPF4GfcXNC9kEtQ" target="_blank" class="no-underline" rel="noopener noreferrer">
                    <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center">
                      <i class="fab fa-youtube text-dark fs-26" />
                    </div>
                  </a>
                  <a href="https://br.pinterest.com/iundepdetetives/_saved/" target="_blank" class="no-underline mx-10" rel="noopener noreferrer">
                    <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center">
                      <i class="fab fa-pinterest text-dark fs-26" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/iundepdetetives/" target="_blank" class="no-underline" rel="noopener noreferrer">
                    <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center">
                      <i class="fab fa-instagram fw-700 text-dark fs-27" />
                    </div>
                  </a>
                </div>
                <h4 class="text-white mt-40 fw-600">
                  Telefones para contato
                </h4>
                <div class="pr-35 mt-20 col-10 mx-auto">
                  <btn-quatro-sete />
                  <btn-quatro-oito class="mt-15" />
                  <btn-quatro-um class="mt-15" />
                  <btn-quatro-nove class="mt-15" />
                </div>
              </aside>
            </transition>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
import BtnQuatroNove from './buttons/BtnQuatroNove.vue'
import BtnQuatroOito from './buttons/BtnQuatroOito.vue'
import BtnQuatroSete from './buttons/BtnQuatroSete.vue'
import BtnQuatroUm from './buttons/BtnQuatroUm.vue'
export default {
  components: { BtnQuatroSete, BtnQuatroOito, BtnQuatroUm, BtnQuatroNove },
  data () {
    return {
      ShowDropdownServicos: false,
      ShowDropdownEstados: false,
      ShowNavEvent: false,
      BgAzulNav: false
    }
  },
  methods: {
    Politica () {
      this.$router.push('/politicas-de-privacidade/')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
      this.CloseNav()
    },
    Trabalhe () {
      this.$router.push('/trabalhe-conosco/')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
      this.CloseNav()
    },
    ScrollNav () {
      if (window.scrollY > 10) {
        this.BgAzulNav = true
      } else {
        this.BgAzulNav = false
      }
    },
    ToggleDropdownServices () {
      this.ShowDropdownServicos = !this.ShowDropdownServicos
      this.ShowDropdownEstados = false
    },
    ToggleDropdownEstados () {
      this.ShowDropdownEstados = !this.ShowDropdownEstados
      this.ShowDropdownServicos = false
    },
    OpenNav () {
      this.ShowNavEvent = true
      document.body.classList.add('overflow-hidden')
    },
    CloseNav () {
      this.ShowNavEvent = false
      document.body.classList.remove('overflow-hidden')
    },
    TodosOsServicosNavbar () {
      this.$router.push('/servicos/')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    InvestigacaoConjugalDesktopNavbar () {
      this.$root.$emit('ShowInvestigacaoConjugalDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    QuandoContratar () {
      this.$router.push('/servicos/investigacao-conjugal#quando-contratar-a-investigacao-conjugal')
      if (window.location.href === 'https://iundep.com.br/servicos/investigacao-conjugal#como-realizamos-a-investigacao-conjugal') {
        this.$smoothScroll({
          scrollTo: document.getElementById('quando-contratar-a-investigacao-conjugal'),
          duration: 500,
          offset: -150
        })
      }
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    ComoRealizamosConjugal () {
      this.$router.push('/servicos/investigacao-conjugal#como-realizamos-a-investigacao-conjugal')
      if (window.location.href === 'https://iundep.com.br/servicos/investigacao-conjugal#quando-contratar-a-investigacao-conjugal') {
        this.$smoothScroll({
          scrollTo: document.getElementById('como-realizamos-a-investigacao-conjugal'),
          duration: 500,
          offset: -150
        })
      }
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    InvestigacaoEmpresarialDesktopNavbar () {
      this.$root.$emit('ShowInvestigacaoEmpresarialDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    EmpresaFraudada () {
      this.$router.push('/servicos/investigacao-empresarial#saber-se-sua-empresa-esta-sendo-prejudicada')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    InvestigacaoPoliticaDesktopNavbar () {
      this.$root.$emit('ShowInvestigacaoPoliticaDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    LocalizacaoDesktopNavbar () {
      this.$root.$emit('ShowLocalizacaoDePessoasDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    SoftwareEspiaoDesktopNavbar () {
      this.$root.$emit('ShowSoftwareEspiaoDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    InstalarSoftware () {
      this.$router.push('/servicos/programa-de-celular-vip#como-instalar-o-software-espiao')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    CursoDesktopNavbar () {
      this.$root.$emit('ShowCursoDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    AcompanhamentoDesktopNavbar () {
      this.$root.$emit('ShowAcompanhamentoDesktop')
      this.CloseNav()
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    FilhosConduta () {
      this.$router.push('/servicos/acompanhamento-de-filho#filhos-com-desvios-de-conduta')
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 500)
    },
    ScrollHomeDesktop () {
      this.$smoothScroll({
        scrollTo: document.getElementById('home'),
        duration: 500,
        offset: -70
      })
      this.CloseNav()
    },
    ScrollSobreDesktop () {
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.CloseNav()
    },
    ScrollContatoDesktop () {
      this.$smoothScroll({
        scrollTo: document.getElementById('contato'),
        duration: 500,
        offset: -70
      })
      this.CloseNav()
    },
    ScrollSobreMobile () {
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    ScrollContatoMobile () {
      this.$smoothScroll({
        scrollTo: document.getElementById('contato'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    // FUNÇÕES DAS CIDADES DESKTOP
    AveiroDesktop () {
      this.$router.push('/detetive-particular-em-Aveiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    BragaDesktop () {
      this.$router.push('/detetive-particular-em-Braga#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    BragancaDesktop () {
      this.$router.push('/detetive-particular-em-Braganca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    CasteloBrancoDesktop () {
      this.$router.push('/detetive-particular-em-Castelo-Branco#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    CoimbraDesktop () {
      this.$router.push('/detetive-particular-em-Coimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    EvoraDesktop () {
      this.$router.push('/detetive-particular-em-Evora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    FaroDesktop () {
      this.$router.push('/detetive-particular-em-Faro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    GuardaDesktop () {
      this.$router.push('/detetive-particular-em-Guarda#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    LeiriaDesktop () {
      this.$router.push('/detetive-particular-em-Leiria#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    LisboaDesktop () {
      this.$router.push('/detetive-particular-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    PortalegreDesktop () {
      this.$router.push('/detetive-particular-em-Portalegre#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    PortoDesktop () {
      this.$router.push('/detetive-particular-em-Porto#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    SantaremDesktop () {
      this.$router.push('/detetive-particular-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    SetubalDesktop () {
      this.$router.push('/detetive-particular-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    VianaDoCasteloDesktop () {
      this.$router.push('/detetive-particular-em-Viana-do-Castelo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    VilaRealDesktop () {
      this.$router.push('/detetive-particular-em-Vila-Real#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    ViseuDesktop () {
      this.$router.push('/detetive-particular-em-Viseu#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      setTimeout(() => {
        this.ShowDropdownEstados = false
      }, 300)
    },
    // FUNÇÕES DAS CIDADES MOBILE
    AveiroMobile () {
      this.$router.push('/detetive-particular-em-Aveiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    BragaMobile () {
      this.$router.push('/detetive-particular-em-Braga#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    BragancaMobile () {
      this.$router.push('/detetive-particular-em-Braganca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    CasteloBrancoMobile () {
      this.$router.push('/detetive-particular-em-Castelo-Branco#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    CoimbraMobile () {
      this.$router.push('/detetive-particular-em-Coimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    EvoraMobile () {
      this.$router.push('/detetive-particular-em-Evora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    FaroMobile () {
      this.$router.push('/detetive-particular-em-Faro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    GuardaMobile () {
      this.$router.push('/detetive-particular-em-Guarda#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    LeiriaMobile () {
      this.$router.push('/detetive-particular-em-Leiria#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    LisboaMobile () {
      this.$router.push('/detetive-particular-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    PortalegreMobile () {
      this.$router.push('/detetive-particular-em-Portalegre#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    PortoMobile () {
      this.$router.push('/detetive-particular-em-Porto#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    SantaremMobile () {
      this.$router.push('/detetive-particular-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    SetubalMobile () {
      this.$router.push('/detetive-particular-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    VianaDoCasteloMobile () {
      this.$router.push('/detetive-particular-em-Viana-do-Castelo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    VilaRealMobile () {
      this.$router.push('/detetive-particular-em-Vila-Real#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    },
    ViseuMobile () {
      this.$router.push('/detetive-particular-em-Viseu#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
      this.CloseNav()
    }
  }
}
</script>
<style scoped>
  nav{
    transition: all .3s;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
  }
  .animate__animated{
    animation-duration: .4s !important;
    -o-animation-duration: .4s !important;
    -moz-animation-duration: .4s !important;
    -webkit-animation-duration: .4s !important;
  }
  .bb-white{
    border-bottom: 1px solid #ffffff;
  }
  .fa-cog{
    margin-top: 2px;
  }
  .fa-map-marker-alt{
    margin-top: 1px;
  }
  .fa-angle-left{
    margin-top: 1px;
  }
  .fa-th-list{
    margin-top: 2px;
  }
  .fa-arrow-left{
    margin-top: 2px;
  }
  .bolinha-redes-sociais{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .offset-nav{
    background-color: #fffffff5;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2000;
  }
  @media (min-width: 1px) {
    .nav-event{
      position: fixed;
      top: 0;
      right: 0;
      width: 360px;
      height: 100%;
      background-color: var(--azul);
      z-index: 2001;
      overflow-y: scroll;
    }
    .width-logo{
      width: 150px;
    }
  }
  @media (min-width: 576px) {
    .nav-event{
      position: fixed;
      top: 0;
      right: 0;
      width: 380px;
      height: 100%;
      background-color: var(--azul);
      z-index: 2001;
      overflow-y: scroll;
    }
    .width-logo{
      width: 180px;
    }
  }
  @media (min-width: 992px) {
    .width-logo{
      width: 260px;
    }
  }
  .bg-card-nav-1{
    background: linear-gradient(0deg, #000000c4, #00000067), url(../assets/img/adulterio.webp) center center no-repeat;
    background-size: cover;
    height: 400px;
  }
  .bg-card-nav-2{
    background: linear-gradient(0deg, #000000c4, #00000067), url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
    background-size: cover;
    height: 400px;
  }
  .dropdown-servicos{
    position: absolute;
    top: 45px;
    right: -50px;
    width: 624px;
    height: 498px;
  }
  .dropdown-estados{
    position: absolute;
    top: 45px;
    left: 20px;
    width: 100%;
    height: 471px;
  }
  .content-dropdown{
    position: absolute;
    top: 0;
    overflow: auto;
  }
  .bg-dropdown{
    background-color: #ffffffe7;
  }
  .blur-dropdown{
    filter: blur(15px);
  }
  @keyframes AnimateShowDropdown {
    from {
      transform: scale3d(0, 0, 0);
      -o-transform: scale3d(0, 0, 0);
      -moz-transform: scale3d(0, 0, 0);
      -webkit-transform: scale3d(0, 0, 0);
    }
    50% {
      transform: scale3d(1.1, 1.1, 1.1);
      -o-transform: scale3d(1.1, 1.1, 1.1);
      -moz-transform: scale3d(1.1, 1.1, 1.1);
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
  @-o-keyframes AnimateShowDropdown {
    from {
      transform: scale3d(0, 0, 0);
      -o-transform: scale3d(0, 0, 0);
      -moz-transform: scale3d(0, 0, 0);
      -webkit-transform: scale3d(0, 0, 0);
    }
    50% {
      transform: scale3d(1.1, 1.1, 1.1);
      -o-transform: scale3d(1.1, 1.1, 1.1);
      -moz-transform: scale3d(1.1, 1.1, 1.1);
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
    }
    to {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
  @-moz-keyframes AnimateShowDropdown {
    from {
      transform: scale3d(0, 0, 0);
      -o-transform: scale3d(0, 0, 0);
      -moz-transform: scale3d(0, 0, 0);
      -webkit-transform: scale3d(0, 0, 0);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
      -o-transform: scale3d(1.05, 1.05, 1.05);
      -moz-transform: scale3d(1.05, 1.05, 1.05);
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes AnimateShowDropdown {
    from {
      transform: scale3d(0, 0, 0);
      -o-transform: scale3d(0, 0, 0);
      -moz-transform: scale3d(0, 0, 0);
      -webkit-transform: scale3d(0, 0, 0);
    }
    50% {
      transform: scale3d(1.05, 1.05, 1.05);
      -o-transform: scale3d(1.05, 1.05, 1.05);
      -moz-transform: scale3d(1.05, 1.05, 1.05);
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
  .animate-show-dropdown{
    animation-name: AnimateShowDropdown;
    -o-animation-name: AnimateShowDropdown;
    -moz-animation-name: AnimateShowDropdown;
    -webkit-animation-name: AnimateShowDropdown;
    animation-duration: .5s;
    -o-animation-duration: .5s;
    -moz-animation-duration: .5s;
    -webkit-animation-duration: .5s;
  }
  .animate-hide-dropdown{
    animation-name: AnimateShowDropdown;
    -o-animation-name: AnimateShowDropdown;
    -moz-animation-name: AnimateShowDropdown;
    -webkit-animation-name: AnimateShowDropdown;
    animation-duration: .3s;
    -o-animation-duration: .3s;
    -moz-animation-duration: .3s;
    -webkit-animation-duration: .3s;
    animation-direction: reverse;
    -o-animation-direction: reverse;
    -moz-animation-direction: reverse;
    -webkit-animation-direction: reverse;
  }
</style>
