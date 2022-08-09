<template>
  <div>
    <button class="btn btn-azul text-white fw-600 shadow px-20 fs-17 pt-1 d-xs-flex d-sm-flex d-lg-none align-items-center" @click.prevent="VoltarServicosMobile">
      <i class="fa fa-angle-left mr-2" /> Voltar
    </button>
    <button class="btn btn-azul text-white fw-600 shadow px-20 fs-17 pt-1 d-xs-none d-sm-none d-lg-flex align-items-center" @click.prevent="VoltarServicos">
      <i class="fa fa-angle-left mr-2" /> Voltar
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    VoltarServicos () {
      this.$router.push('/')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -70
      })
    },
    VoltarServicosMobile () {
      this.$router.push('/')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -60
      })
    }
  }
}
</script>
<style scoped>
  .fa-angle-left{
    margin-top: 1px;
  }
</style>
