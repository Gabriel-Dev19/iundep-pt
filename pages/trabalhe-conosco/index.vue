<template>
  <div>
    <div class="col-12 px-0">
      <h1 class="text-azul fs-xs-36 text-center fw-600">
        Venha fazer parte da nossa equipa!
      </h1>
    </div>
    <div class="mt-30 border-none">
      <p class="fw-600 text-center mt-10 fs-17">
        Se você tem interesse em ingressar na carreira de detective privado, não perca mais tempo! Faça nosso
        curso de profissionalização e além de todo conhecimento que iremos lhe passar, ainda daremos a você a
        oportunidade de fazer parte da nossa equipa.
        Para saber mais clique no botão abaixo:
      </p>
      <div class="d-flex justify-content-center mt-20 mb-30">
        <button class="btn btn-azul px-20 text-white" @click.prevent="$root.$emit('ShowCursoDesktop')">
          Curso de detective privado
        </button>
      </div>
      <p class="fw-600 text-center fs-17">
        Oferecemos uma oportunidade de você se tornar um profissional de destaque na sua região.
      </p>
      <h2 class="text-azul fs-xs-25 mt-50 text-center fw-600">
        Requisitos
      </h2>
      <p class="fw-600 text-center fs-17">
        Ser idôneo;
      </p>
      <p class="fw-600 text-center fs-17">
        Ser habilitado viatura/moto em boas condições de uso;
      </p>
      <p class="fw-600 text-center fs-17">
        Raciocínio lógico;
      </p>
      <p class="fw-600 text-center fs-17">
        Agilidade;
      </p>
      <p class="fw-600 text-center fs-17">
        Boa relação interpessoal;
      </p>
      <p class="fw-600 text-center fs-17">
        Dedicação, pois é um trabalho complexo;
      </p>
      <p class="fw-600 text-center fs-17">
        Persistência e paciência;
      </p>
      <p class="fw-600 text-center fs-17">
        Saber trabalhar com discrição;
      </p>
      <p class="fw-600 text-center fs-17">
        Conhecimento básico das leis brasileiras.
      </p>
      <h2 class="text-azul fs-xs-25 mt-50 text-center fw-600">
        Vantagens
      </h2>
      <p class="fw-600 text-center fs-17">
        Ampliar consideravelmente o seu volume de negócios na região;
      </p>
      <p class="fw-600 text-center fs-17">
        Ter acesso a informações privilegiadas e técnicas de investigações avançadas;
      </p>
      <p class="fw-600 text-center fs-17">
        Treinamento desde o atendimento ao cliente até a confecção de relatórios;
      </p>
      <p class="fw-600 text-center fs-17">
        Excelente remuneração;
      </p>
      <p class="fw-600 text-center fs-17">
        Recompensa. O Detective auxilia pessoas físicas e jurídicas na resolução de seus problemas;
      </p>
      <p class="fw-600 text-center fs-17">
        Realização pelo cumprimento do dever;
      </p>
      <p class="fw-600 text-center fs-17">
        Um Detective Privado bem-sucedido destaca-se no meio;
      </p>
      <p class="fw-600 text-center fs-17">
        Um Detective favorece a história de muitas pessoas;
      </p>
      <p class="fw-600 text-center fs-17">
        Propicia na contribuição da resolução dos dramas pessoais.
      </p>
      <h2 class="text-azul fs-xs-25 mt-50 text-center fw-600">
        Por quê a IUNDEP Detectives?
      </h2>
      <p class="fw-600 text-center mt-10 fs-17">
        Temos uma vasta experiência profissional com mais de 20 anos de mercado, atuando com
        sucesso em todas as tarefas que recebemos. Nossos detectives são totalmente qualificados para exercer as
        funções delegadas aos mesmos. Temos profissionais atuando em 8 dos principais Estados brasileiros.
      </p>
    </div>
    <div id="buttonVoltar">
      <btn-voltar-servicos />
    </div>
  </div>
</template>
<script>
import BtnVoltarServicos from '../../components/buttons/btn-voltar-servicos.vue'
export default {
  components: { BtnVoltarServicos },
  layout: 'LayoutServicos',
  head: {
    link: [
      { rel: 'alternate', href: 'https://iundep.com.br/trabalhe-conosco', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://iundep.com.br/trabalhe-conosco', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://iundepdetectives.pt/trabalhe-conosco', hreflang: 'pt' }
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
