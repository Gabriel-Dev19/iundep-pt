<template>
  <div>
    <footer class="pt-50 pb-30 mt-xs-70 mt-sm-70 mt-lg-150 bg-azul">
      <div class="container d-flex row mx-auto">
        <div class="col-lg-4 d-flex justify-content-center row mx-auto px-xs-0 px-sm-0">
          <div>
            <h6 class="d-flex justify-content-xs-center text-white fs-19 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Nossos serviços
            </h6>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-3 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowInvestigacaoConjugalDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação conjugal
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowInvestigacaoEmpresarialDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação empresarial
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowInvestigacaoPoliticaDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação política
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowLocalizacaoDePessoasDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Localização de pessoas
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowSoftwareEspiaoDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Programa de telemóvel VIP
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowCursoDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Curso de detective privado
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowAcompanhamentoDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Acompanhamento de filho
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 align-items-center d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="Politica">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Políticas de privacidade
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 align-items-center d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="Trabalhe">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Trabalhe com a IUNDEP
            </a>
          </div>
        </div>
        <div class="col-lg-4 mt-xs-50 mt-sm-50 d-flex row mt-lg-0">
          <h6 class="d-flex justify-content-xs-center text-white fs-19 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
            <div class="bl-temas mr-2" /> Distritos atendidos
          </h6>
          <a class="col-12 fw-600 mt-3 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="AveiroMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Aveiro
          </a>
          <a class="col-12 fw-600 mt-3 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Aveiro">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Aveiro
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="BragaMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Braga
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Braga">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Braga
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="BragancaMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Bragança
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Braganca">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Bragança
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="CasteloBrancoMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Castelo Branco
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="CasteloBranco">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Castelo Branco
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="CoimbraMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Coimbra
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Coimbra">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Coimbra
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="EvoraMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Évora
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Evora">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Évora
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="FaroMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Faro
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Faro">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Faro
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="GuardaMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Guarda
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Guarda">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Guarda
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="LeiriaMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Leiria
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Leiria">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Leiria
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="LisboaMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Lisboa
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Lisboa">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Lisboa
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="PortalegreMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Portalegre
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Portalegre">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Portalegre
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="PortoMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Porto
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Porto">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Porto
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SantaremMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Santarém
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Santarem">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Santarém
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SetubalMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Setúbal
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Setubal">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Setúbal
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="VianaDoCasteloMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Viana do Castelo
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="VianaDoCastelo">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Viana do Castelo
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="VilaRealMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Vila Real
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="VilaReal">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Vila Real
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="ViseuMobile">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Viseu
          </a>
          <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Viseu">
            <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Viseu
          </a>
        </div>
        <div class="col-lg-4 mt-xs-50 mt-sm-50 mt-lg-0 px-0 col-xl-4">
          <div id="icons-cartoes" class="d-flex col-12 pl-2 justify-content-xs-center justify-content-sm-center justify-content-lg-start pr-0 row mx-auto">
            <h6 class="d-flex justify-content-xs-center text-white fs-19 mb-3 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Aceitamos
            </h6>
            <i class="fab mx-1 fa-cc-paypal fs-60" />
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pix.png" class="img-fluid" alt="PIX">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-elo.png" class="img-fluid" alt="ELO">
              </div>
            </div>
            <i class="fab mx-1 fa-cc-diners-club fs-60" />
            <i class="fab mx-1 fa-cc-amex fs-60" />
            <i class="fab mx-1 fa-cc-visa fs-60" />
            <i class="fab mx-1 fa-cc-mastercard fs-60" />
            <div class="icon-card mx-1 d-flex justify-content-center align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-hiper.png" class="img-fluid" alt="HIPER">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-wu.png" class="img-fluid" alt="WU">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-money-gram.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pag.png" class="img-fluid" alt="PAG">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mx-1 align-items-center">
              <div class="px-2">
                <img src="../assets/img/icons/icon-mercado-pago.png" class="img-fluid" alt="MP">
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-xs-center px-1 justify-content-sm-center justify-content-lg-start">
            <div class="mt-4">
              <img src="../assets/img/selo-garantia-iundep.webp" width="110" alt="Grantia 100%">
            </div>
          </div>
        </div>
        <div class="col-12 px-0 d-flex justify-content-center row mx-auto mt-70">
          <div class="col-lg-10 col-xl-9 px-0 text-center fw-500 fs-16 text-white">
            A IUNDEP DETECTIVES (instituída sob o <span style="text-decoration: underline;">CNPJ: 46.127.513/0001-69</span>) é uma empresa que preza e respeita a privacidade e confidencialidade do
            cliente. Constituída de acordo com a lei federal <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13432.htm" class="text-light" target="_blank" rel="noopener noreferrer">13.432/2017</a>
          </div>
        </div>
        <div class="col-12 px-0 d-flex justify-content-between row mx-auto mt-60">
          <div class="col-lg-6 px-0 text-xs-center fs-15 fw-600 text-sm-center text-white text-lg-left">
            &copy; 2021 - IUNDEP DETECTIVES - Todos os direitos reservados
          </div>
          <div class="col-lg-6 mt-xs-4 mt-sm-4 mt-lg-0 fw-600 px-0 text-xs-center text-sm-center fs-15 text-lg-right">
            <a href="https://portfoliogabrieldev.000webhostapp.com/" class="no-underline d-flex align-items-center text-light justify-content-xs-center justify-content-sm-center justify-content-lg-end" target="_blank">
              Desenvolvido por Gabriel Camurça <i class="fab fs-24 fw-300 ml-1 fa-vuejs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    Politica () {
      this.$router.push('/politicas-de-privacidade/')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -70
      })
    },
    Trabalhe () {
      this.$router.push('/trabalhe-conosco/')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -70
      })
    },
    // Chamadas cidades desktop
    Aveiro () {
      this.$router.push('/detetive-particular-em-Aveiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Braga () {
      this.$router.push('/detetive-particular-em-Braga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Braganca () {
      this.$router.push('/detetive-particular-em-Braganca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CasteloBranco () {
      this.$router.push('/detetive-particular-em-Castelo-Branco')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Coimbra () {
      this.$router.push('/detetive-particular-em-Coimbra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Evora () {
      this.$router.push('/detetive-particular-em-Evora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Faro () {
      this.$router.push('/detetive-particular-em-Faro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guarda () {
      this.$router.push('/detetive-particular-em-Guarda')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Leiria () {
      this.$router.push('/detetive-particular-em-Leiria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lisboa () {
      this.$router.push('/detetive-particular-em-Lisboa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Portalegre () {
      this.$router.push('/detetive-particular-em-Portalegre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Porto () {
      this.$router.push('/detetive-particular-em-Porto')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Santarem () {
      this.$router.push('/detetive-particular-em-Santarem')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Setubal () {
      this.$router.push('/detetive-particular-em-Setubal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VianaDoCastelo () {
      this.$router.push('/detetive-particular-em-Viana-do-Castelo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VilaReal () {
      this.$router.push('/detetive-particular-em-Vila-Real')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Viseu () {
      this.$router.push('/detetive-particular-em-Viseu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    // Chamada cidades mobile
    AveiroMobile () {
      this.$router.push('/detetive-particular-em-Aveiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    BragaMobile () {
      this.$router.push('/detetive-particular-em-Braga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    BragancaMobile () {
      this.$router.push('/detetive-particular-em-Braganca')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    CasteloBrancoMobile () {
      this.$router.push('/detetive-particular-em-Castelo-Branco')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    CoimbraMobile () {
      this.$router.push('/detetive-particular-em-Coimbra')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    EvoraMobile () {
      this.$router.push('/detetive-particular-em-Evora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    FaroMobile () {
      this.$router.push('/detetive-particular-em-Faro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    GuardaMobile () {
      this.$router.push('/detetive-particular-em-Guarda')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    LeiriaMobile () {
      this.$router.push('/detetive-particular-em-Leiria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    LisboaMobile () {
      this.$router.push('/detetive-particular-em-Lisboa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    PortalegreMobile () {
      this.$router.push('/detetive-particular-em-Portalegre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    PortoMobile () {
      this.$router.push('/detetive-particular-em-Porto')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    SantaremMobile () {
      this.$router.push('/detetive-particular-em-Santarem')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    SetubalMobile () {
      this.$router.push('/detetive-particular-em-Setubal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    VianaDoCasteloMobile () {
      this.$router.push('/detetive-particular-em-Viana-do-Castelo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    VilaRealMobile () {
      this.$router.push('/detetive-particular-em-Vila-Real')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    ViseuMobile () {
      this.$router.push('/detetive-particular-em-Viseu')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    }
  }
}
</script>
<style scoped>
  footer a {
    color: #23303dc9;
  }
  .bl-temas {
    border-left: 4px solid var(--white);
  }
  footer a:hover {
    color: #ffffff;
  }

  #icons-cartoes i {
    color: #ffffffd4;
  }

  #icons-cartoes i:hover {
    color: #ffffff;
  }

  .icon-card {
    width: 67.5px;
    height: 53px;
    background-color: #ffffffd4;
    margin-top: 3px;
    border-radius: 6px;
  }

  .icon-card:hover {
    background-color: #ffffff;
  }

  .ml-7-px {
    margin-left: 7px;
  }

  .mr-7-px {
    margin-right: 7.5px;
  }
</style>
