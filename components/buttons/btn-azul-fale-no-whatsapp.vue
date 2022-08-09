<template>
  <div>
    <button class="btn d-flex align-items-center text-white justify-content-center border-radius-20 fs-17 btn-azul pt-1 px-20 fw-600" @click.prevent="$root.$emit('ShowModalWhatsapp')">
      <i class="fab fa-whatsapp fs-17 mr-2 fw-500" /> Mande uma mensagem
    </button>
  </div>
</template>
<style lang="css" scoped>
  .fa-whatsapp {
    margin-top: 1px;
  }
</style>
