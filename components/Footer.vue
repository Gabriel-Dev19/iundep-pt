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
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Programa de celular VIP
            </a>
            <a class="col-12 cursor-pointer no-underline fw-600 text-light mt-2 d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('ShowCursoDesktop')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Curso de detetive particular
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
        <div class="col-lg-4 mt-xs-50 mt-sm-50 d-flex justify-content-center row mx-auto mt-lg-0 px-0">
          <div>
            <h6 class="d-flex justify-content-xs-center text-white fs-19 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Estados atendidos
            </h6>
            <a class="col-12 fw-600 mt-3 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SantaCatarinaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Santa Catarina
            </a>
            <a class="col-12 fw-600 mt-3 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SantaCatarina">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Santa Catarina
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="ParanaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Paraná
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Parana">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Paraná
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="RioGrandeDoSulMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Rio Grande do Sul
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="RioGrandeDoSul">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Rio Grande do Sul
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SaoPauloMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em São Paulo
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SaoPaulo">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em São Paulo
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="RioDeJaneiroMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Rio de Janeiro
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="RioDeJaneiro">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Rio de Janeiro
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="MinasGeraisMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Minas Gerais
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="MinasGerais">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Minas Gerais
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="DistritoFederalMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Distrito Federal
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="DistritoFederal">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Distrito Federal
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="MatoGrossoDoSulMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Mato Grosso do Sul
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="MatoGrossoDoSul">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive no Mato Grosso do Sul
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="GoiasMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Goiás
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center text-light justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Goias">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detetive em Goiás
            </a>
          </div>
        </div>
        <div class="col-lg-4 mt-xs-50 mt-sm-50 mt-lg-0 px-0 col-xl-4">
          <div id="icons-cartoes" class="d-flex col-12 pl-2 justify-content-xs-center justify-content-sm-center justify-content-lg-start pr-0 row mx-auto">
            <h6 class="d-flex justify-content-xs-center text-white fs-19 mb-3 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Aceitamos
            </h6>
            <i class="fab mr-2 fa-cc-paypal fs-60" />
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pix.png" class="img-fluid" alt="PIX">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-elo.png" class="img-fluid" alt="ELO">
              </div>
            </div>
            <i class="fab mr-2 fa-cc-diners-club fs-60" />
            <i class="fab mr-2 fa-cc-amex fs-60" />
            <i class="fab mr-2 fa-cc-visa fs-60" />
            <i class="fab fa-cc-mastercard fs-60" />
            <div class="icon-card ml-7-px d-flex justify-content-center align-items-center mr-2">
              <div class="px-1">
                <img src="../assets/img/icons/icon-hiper.png" class="img-fluid" alt="HIPER">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-wu.png" class="img-fluid" alt="WU">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-money-gram.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pag.png" class="img-fluid" alt="PAG">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
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
            A IUNDEP DETETIVES (instituída sob o <span style="text-decoration: underline;">CNPJ: 46.127.513/0001-69</span>) é uma empresa que preza e respeita a privacidade e confidencialidade do
            cliente. Constituída de acordo com a lei federal <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13432.htm" class="text-light" target="_blank" rel="noopener noreferrer">13.432/2017</a>
          </div>
        </div>
        <div class="col-12 px-0 d-flex justify-content-between row mx-auto mt-60">
          <div class="col-lg-6 px-0 text-xs-center fs-15 fw-600 text-sm-center text-white text-lg-left">
            &copy; 2021 - IUNDEP DETETIVES - Todos os direitos reservados
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
    SantaCatarina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Parana () {
      this.$router.push('/detetive-particular-no-Parana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoPaulo () {
      this.$router.push('/detetive-particular-em-Sao-Paulo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioDeJaneiro () {
      this.$router.push('/detetive-particular-no-Rio-de-Janeiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MinasGerais () {
      this.$router.push('/detetive-particular-em-Minas-Gerais')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DistritoFederal () {
      this.$router.push('/detetive-particular-no-Distrito-Federal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MatoGrossoDoSul () {
      this.$router.push('/detetive-particular-no-Mato-Grosso-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Goias () {
      this.$router.push('/detetive-particular-em-Goias')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },

    // Chamada cidades mobile
    SantaCatarinaMobile () {
      this.$router.push('/detetive-particular-em-Santa-Catarina')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    ParanaMobile () {
      this.$router.push('/detetive-particular-no-Parana')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    RioGrandeDoSulMobile () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    SaoPauloMobile () {
      this.$router.push('/detetive-particular-em-Sao-Paulo')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    RioDeJaneiroMobile () {
      this.$router.push('/detetive-particular-no-Rio-de-Janeiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    MinasGeraisMobile () {
      this.$router.push('/detetive-particular-em-Minas-Gerais')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    DistritoFederalMobile () {
      this.$router.push('/detetive-particular-no-Distrito-Federal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    MatoGrossoDoSulMobile () {
      this.$router.push('/detetive-particular-no-Mato-Grosso-do-Sul')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -60
      })
    },
    GoiasMobile () {
      this.$router.push('/detetive-particular-em-Goias')
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
