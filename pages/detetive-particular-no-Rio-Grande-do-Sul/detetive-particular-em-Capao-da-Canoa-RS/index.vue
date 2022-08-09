<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular em Capão da Canoa - RS.
          <br>
          Precisando de um detetive particular em Capão da Canoa - RS?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está em Capão da Canoa - RS e queremos ajudar você a solucionar suas dúvidas.
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
        <h4 class="text-azul text-xs-center mt-4 text-sm-center text-lg-left fw-600">
          Entre em contato com um de nossos detetives em Capão da Canoa - RS
        </h4>
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <btn-scroll-contato class="mt-10" />
        </div>
      </div>
      <div class="col-lg order-xs-1 d-xs-none d-sm-none d-lg-flex order-sm-1 order-lg-2 px-0 ml-lg-30">
        <card-sobre />
      </div>
    </div>
  </div>
</template>
<script>
import BtnScrollContato from '../../../components/buttons/BtnScrollContato.vue'
import cardSobre from '../../../components/components-minus/card-sobre.vue'
export default {
  components: {
    cardSobre,
    BtnScrollContato
  },
  layout: 'LayoutSobre',
  head: {
    title: 'Detetive particular em Capão da Canoa - RS | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  }
}
</script>
<style scoped>

</style>
