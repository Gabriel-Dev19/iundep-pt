<template>
  <div>
    <a v-smooth-scroll="{duration: 500, offset: -60}" href="#contato" class="btn btn-azul pt-1 px-20 d-xs-flex d-sm-flex d-lg-none text-white fs-17 border-radius-20 align-items-center justify-content-center fw-600">
      <i class="fa fa-phone-alt mr-2 fw-400" /> Fale conosco
    </a>
    <a v-smooth-scroll="{duration: 500, offset: -70}" href="#contato" class="btn btn-azul pt-1 px-20 d-xs-none d-sm-none d-lg-flex text-white fs-17 border-radius-20 align-items-center justify-content-center fw-600">
      <i class="fa fa-phone-alt mr-2 fw-400" /> Fale conosco
    </a>
  </div>
</template>
<style lang="css" scoped>
  .fa-phone-alt {
    margin-top: 2px;
  }
</style>
