<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-lg-7 px-0">
      <h2 class="text-azul fs-xs-36 fs-sm-40 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
        Sobre nossa empresa
      </h2>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
        A IUNDEP DETECTIVES é uma agência de detectives privados especializada em investigações
        de caráter conjugal, industrial, empresarial, comercial, familiar, política e assuntos privados.
        Com experiência internacional e atuando no mercado há mais de 20 anos, nossa empresa conta com uma
        equipa altamente qualificada de profissionais preparados e reciclados periodicamente, com atendimento
        personalizado cada caso é analisado individualmente por nossa equipa, com o planejamento adequado para
        cada situação, visando resultados rápidos e esclarecedores, buscando assim, o êxito e satisfação plena
        de nossos clientes. Nossos detectives são especializados e capacitados, fizemos uso das mais variadas
        técnicas de investigação que garantem maior eficiência e produção de provas de qualidade.
      </p>
      <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
        Nosso principal trabalho é esclarecer as dúvidas de nossos clientes, antes de tomar uma atitude
        perante a situação em que você está vivenciando, é importante que você tenha plena certeza
        de tudo que está acontecendo. Através de nosso trabalho de coleta de provas você estará mais
        tranquilo para a tomada de decisão que certamente poderá mudar a sua vida, e caso você tenha
        que levar a situação para o lado judicial, nossas provas poderão ser utilizadas.
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
</template>
<script>
import BtnAzulWhatsapp from '../components/buttons/btn-azul-fale-no-whatsapp'
import BtnAzulLigueAgora from '../components/buttons/btn-azul-ligue-agora.vue'
import cardSobre from '../components/components-minus/card-sobre.vue'
export default {
  components: { cardSobre, BtnAzulWhatsapp, BtnAzulLigueAgora },
  layout: 'LayoutSobre',
  head: {
    link: [
      { rel: 'alternate', href: 'https://iundep.com.br/', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://iundep.com.br/', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://iundepdetectives.pt/', hreflang: 'pt' }
    ]
  }
}
</script>
<style scoped>

</style>
