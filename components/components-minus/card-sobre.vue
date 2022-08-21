<template>
  <div>
    <div class="col-12 shadow-lg pb-30 d-flex align-items-end px-0 bg-card-sobre border-radius-15">
      <div class="col-12 px-0">
        <h4 class="mx-3 text-white text-xs-center text-sm-center text-lg-left">
          Peritos em investigação
        </h4>
        <div class="col-10 mx-xs-auto mx-sm-auto mx-lg-0 bg-azul-claro h-3" />
        <p class="ml-3 text-white text-xs-center text-sm-center text-lg-left fs-16 fw-500 mt-1 mb-0">
          Ao longo destes anos temos centenas de casos resolvidos em todo o Portugal e e, alguns países
          do Mercosul, para nós nada é um mistério, lidamos com casos de investigação todos os dias e
          somos peritos no que fazemos. Caso você tenha que levar a situação para o lado judicial,
          fornecemos provas judicialmente aceitas.
        </p>
        <div class="mt-3 d-flex px-3 justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <a v-smooth-scroll="{duration: 500, offset: -70}" href="#servicos" class="btn btn-azul fs-17 px-20 pt-1 fw-600 text-white border-radius-20">
            Serviços de investigação
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .bg-card-sobre{
    background: linear-gradient(0deg, #000000e9, #00000067), url(../../assets/img/img-sobre.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000e9, #00000067), url(../../assets/img/img-sobre.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000e9, #00000067), url(../../assets/img/img-sobre.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000e9, #00000067), url(../../assets/img/img-sobre.webp) center center no-repeat;
    background-size: cover;
    height: 460px;
  }
</style>
