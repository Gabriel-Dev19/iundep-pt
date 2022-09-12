<template>
  <div>
    <div class="col-12 px-0">
      <h1 class="text-azul fs-xs-36 text-center fw-600">
        Curso de detective privado
      </h1>
    </div>
    <div class="mt-xs-40 mt-sm-40 mt-lg-60 border-none">
      <div class="col-lg-4 mb-xs-50 mb-sm-50 mb-lg-20 mr-lg-30 float-left px-0">
        <div class="col-12 shadow-lg pb-30 pt-150 d-flex align-items-end px-0 bg-card border-radius-15">
          <div class="col-12 px-0">
            <h4 class="mx-3 text-xs-center text-sm-center text-lg-left text-white">
              Curso de detective privado
            </h4>
            <div class="col-10 mx-xs-auto mx-sm-auto mx-lg-0 bg-azul-claro h-3" />
            <p class="ml-3 text-white text-xs-center text-sm-center text-lg-left fs-16 fw-500 mt-1 mb-0">
              Venha se especializar com quem é líder no ramo de Investigação Privada. Realizando
              nosso Curso de Detective Privado, você estará recebendo online um material de qualidade para estudar em suas horas vagas.
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
        Curso de detective privado da IUNDEP
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Venha se especializar com quem é líder no ramo de Investigação Privada. Realizando nosso Curso de Detective
        Privado, você estará recebendo online um material de qualidade para estudar em suas horas vagas, sem sair de
        casa e tudo dentro do seu próprio ritmo.
      </p>
      <h3 class="text-azul fw-600 text-xs-center text-sm-center text-lg-left">
        Apostila completa
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Apostila baseada em todo conhecimento adquirido em mais de 20 anos de atuação no ramo da investigação particular.
        Preparamos para você um material simples e objetivo, para você tirar todas as suas dúvidas e se tornar um detective
        particular de sucesso.
      </p>
      <h3 class="text-azul fw-600 text-xs-center text-sm-center text-lg-left">
        Certificado de conclusão
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Após conclusão e aprovação do curso, você receberá o certificado de Detective Privado Profissional impresso
        e autenticado por nossa empresa.
      </p>
      <h3 class="text-azul fw-600 text-xs-center text-sm-center text-lg-left">
        Carteira de detective privado
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Além do certificado, ao concluir nosso curso você receberá também sua Carteira
        de Detective Privado Profissional.
      </p>
      <h3 class="text-azul fw-600 text-xs-center text-sm-center text-lg-left">
        Como adquirir nosso curso?
      </h3>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-10 fs-17">
        Iremos lhe oferecer o curso de duas formas:
      </p>
      <div class="d-flex row mx-auto">
        <div class="border col-lg py-20 rounded shadow">
          <div class="d-flex justify-content-center">
            <ion-icon class="fs-55 text-azul mr-2" name="book-outline" />
          </div>
          <h4 class="text-azul text-center fw-600 mt-10">
            Material impresso
          </h4>
          <p class=" fw-600 text-center fs-17">
            Enviaremos para sua casa o material didático, impresso com acabamento de primeira linha e você terá
            em suas mãos a melhor apostila sobre Detective Privado.
          </p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-azul text-white px-20 " @click.prevent="$root.$emit('ShowModalWhatsapp')">
              <ion-icon class="fs-22 mr-2" style="margin-bottom: -5px;" name="book-outline" /> Comprar a partir de € 1189,90
            </button>
          </div>
        </div>
        <div class="border col-lg py-20 rounded ml-lg-3 mt-xs-3 mt-sm-3 mt-lg-0 shadow">
          <div class="d-flex justify-content-center">
            <ion-icon class="fs-55 text-azul mr-2" name="desktop-outline" />
          </div>
          <h4 class="text-azul text-center fw-600 mt-10">
            Material online
          </h4>
          <p class=" fw-600 text-center fs-17">
            Enviaremos para sua casa o material didático, impresso com acabamento de primeira linha e você terá
            em suas mãos a melhor apostila sobre Detective Privado.
          </p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-azul text-white px-20 " @click.prevent="$root.$emit('ShowModalWhatsapp')">
              <ion-icon class="fs-22 mr-2" style="margin-bottom: -5px;" name="desktop-outline" /> Comprar a partir de € 989,90
            </button>
          </div>
        </div>
      </div>
      <h3 class="text-azul fw-600 text-xs-center mt-40 text-sm-center text-lg-left">
        Perguntas frequentes
      </h3>
      <div class="accordion mt-20" role="tablist">
        <div class="col-12 px-0">
          <button v-b-toggle.accordion-1 class="btn btn-azul text-white d-flex align-items-center justify-content-between fw-600 text-left px-20 col-12">
            O curso também é presencial ou apenas na modalidade a distância? <i class="fa fa-angle-down fw-300 fs-25" />
          </button>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body class="border py-3 bg-cinza border-radius-20 mt-2">
              <p class="fw-600 fs-17 mb-0 text-xs-center text-sm-center text-lg-left">
                O nosso Curso de Detective Privado é ministrado somente à distância e por meio de apostila,
                que é fornecida ao aluno. Neste curso o aluno terá a comodidade de aprender tudo sobre investigação
                sem sair de casa, usando suas horas livres e finais de semana, dentro do seu próprio ritmo e
                onde desejar. Além disso poderá contar com a ajuda de nossos profissionais se houver alguma
                dúvida no decorrer de seus estudos.
              </p>
            </b-card-body>
          </b-collapse>
        </div>
        <div class="col-12 px-0">
          <button v-b-toggle.accordion-2 class="btn btn-azul text-white mt-2 d-flex align-items-center justify-content-between fw-600 text-left px-20 col-12">
            Após a finalização do curso os alunos recebem indicações para trabalhos? <i class="fa fa-angle-down fw-300 fs-25" />
          </button>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body class="border py-3 bg-cinza border-radius-20 mt-2">
              <p class="fw-600 fs-17 mb-0 text-xs-center text-sm-center text-lg-left">
                Nossa própria Agência dará a você a oportunidade de fazer parte da nossa equipa. Além disso o mercado de
                Investigação Privada tem carências de profissionais para atuação
                em todo o território nacional, ou seja, você sendo qualificado sempre surgirá oportunidades para você.
              </p>
            </b-card-body>
          </b-collapse>
        </div>
        <div class="col-12 px-0">
          <button v-b-toggle.accordion-3 class="btn btn-azul text-white mt-2 d-flex align-items-center justify-content-between fw-600 text-left px-20 col-12">
            O que recebo quando finalizar o curso de detective? <i class="fa fa-angle-down fw-300 fs-25" />
          </button>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body class="border py-3 bg-cinza border-radius-20 mt-2">
              <p class="fw-600 fs-17 mb-0 text-xs-center text-sm-center text-lg-left">
                O Certificado de Conclusão é emitido havendo um acerto mínimo de 70% das questões da prova.
                Carteira Profissional de Detective Privado.
              </p>
            </b-card-body>
          </b-collapse>
        </div>
        <div class="col-12 px-0">
          <button v-b-toggle.accordion-4 class="btn btn-azul text-white mt-2 d-flex align-items-center justify-content-between fw-600 text-left px-20 col-12">
            Como o pagamento pode ser feito? <i class="fa fa-angle-down fw-300 fs-25" />
          </button>
          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
            <b-card-body class="border py-3 bg-cinza border-radius-20 mt-2">
              <p class="fw-600 fs-17 mb-0 text-xs-center text-sm-center text-lg-left">
                Aceitamos os cartões de crédito, boleto bancário e também em depósito em conta corrente
                pessoa física com desconto, consulte-nos para mais informações.
              </p>
            </b-card-body>
          </b-collapse>
        </div>
        <div class="col-12 px-0">
          <button v-b-toggle.accordion-5 class="btn btn-azul text-white mt-2 d-flex align-items-center justify-content-between fw-600 text-left px-20 col-12">
            Quanto ganha um detective privado? <i class="fa fa-angle-down fw-300 fs-25" />
          </button>
          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
            <b-card-body class="border py-3 bg-cinza border-radius-20 mt-2">
              <p class="fw-600 fs-17 mb-0 text-xs-center text-sm-center text-lg-left">
                Dependendo do seu fluxo de trabalho o detective pode alcançar
                remunerações de € 15.000 á € 20.000
              </p>
            </b-card-body>
          </b-collapse>
        </div>
      </div>
      <div class="d-flex mt-30 row mx-auto">
        <div class="d-flex col-xl px-0 row mx-auto">
          <div class="col-md border shadow border-radius-10 py-20">
            <div class="d-flex justify-content-center">
              <ion-icon class="fs-55 mr-2" name="card-outline" />
            </div>
            <h6 class="text-center mt-10 mb-1 text-uppercase fw-600">
              Investimento
            </h6>
            <p class="mb-0 text-center fw-500 fs-13">
              O valor mínimo de investimento no curso de Detective Privado é de apenas € 499,00,
              e você recebe o material completo.
            </p>
          </div>
          <div class="col-md border mt-xs-3 mt-sm-3 mt-md-0 shadow border-radius-10 ml-md-3 py-20">
            <div class="d-flex justify-content-center">
              <ion-icon class="fs-55 mr-2" name="wallet-outline" />
            </div>
            <h6 class="text-center mt-10 mb-1 text-uppercase fw-600">
              Pagamento
            </h6>
            <p class="mb-0 text-center fw-500 fs-13">
              Facilitamos seu pagamento através de cartões de crédito, boleto bancário,
              depósito, Pix, PagSeguro, PayPal e muito mais!
            </p>
          </div>
        </div>
        <div class="d-flex col-xl px-0 mt-xs-3 mt-sm-3 mt-xl-0 ml-xl-3 row mx-auto">
          <div class="col-md border shadow border-radius-10 py-20">
            <div class="d-flex justify-content-center">
              <ion-icon class="fs-55 mr-2" name="earth-outline" />
            </div>
            <h6 class="text-center mt-10 mb-1 text-uppercase fw-600">
              Facilidade de estudo
            </h6>
            <p class="mb-0 text-center fw-500 fs-13">
              Estude nos seus horários sem sair de casa com nosso material.
              Seja qual for sua necessidade iremos lhe atender
            </p>
          </div>
          <div class="col-md border mt-xs-3 mt-sm-3 mt-md-0 shadow border-radius-10 ml-md-3 py-20">
            <div class="d-flex justify-content-center">
              <ion-icon class="fs-55 mr-2" name="star-outline" />
            </div>
            <h6 class="text-center mt-10 mb-1 text-uppercase fw-600">
              O melhor material
            </h6>
            <p class="mb-0 text-center fw-500 fs-13">
              Nosso material foi elaborado por detectives experientes com mais de 25 anos de experiência
              na área de investigação
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex mt-50 justify-content-center">
        <a v-smooth-scroll="{ duration: 500, offset: -70 }" href="#contato" class="btn btn-azul text-white border-radius-25 px-30 fs-20">
          Faça sua inscrição
        </a>
      </div>
    </div>
    <div id="buttonVoltar">
      <btn-voltar-servicos />
    </div>
  </div>
</template>
<script>
import Vue from '../../../node_modules/vue'
import btnAzulFaleNoWhatsapp from '../../../components/buttons/btn-azul-fale-no-whatsapp.vue'
import BtnAzulLigueAgora from '../../../components/buttons/btn-azul-ligue-agora.vue'
import BtnVoltarServicos from '../../../components/buttons/btn-voltar-servicos.vue'
import { CollapsePlugin } from '../../../node_modules/bootstrap-vue'
Vue.use(CollapsePlugin)
export default {
  components: { btnAzulFaleNoWhatsapp, BtnAzulLigueAgora, BtnVoltarServicos },
  layout: 'LayoutServicos',
  data () {
    return {
      DisabledConcordoComTermos: true
    }
  },
  head: {
    link: [
      { rel: 'alternate', href: 'https://iundep.com.br/servicos/curso-de-detetive-particular', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://iundep.com.br/servicos/curso-de-detetive-particular', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://iundepdetectives.pt/servicos/curso-de-detetive-particular', hreflang: 'pt' }
    ]
  },
  mounted () {
    this.$smoothScroll({
      scrollTo: document.getElementById('servicos'),
      duration: 500,
      offset: -70
    })
  }

}
</script>
<style scoped>
  .bg-card{
    background: linear-gradient(0deg, #000000c4, #00000067), url(../../../assets/img/livro-curso.webp) center center no-repeat;
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
  .bg-cinza{
    background-color: #e2e2e2;
  }
  p.fs-15{
    line-height: 20px;
  }
</style>
