<template>
  <div>
    <section id="home" class="height-100-vh min-height-600">
      <b-carousel
        id="carousel-2"
        ref="CarouselHome"
        fade
        :interval="10000"
        class="h-100 col-12 px-0"
      >
        <b-carousel-slide>
          <div class="h-100 bg-home-1 d-flex align-items-center justify-content-center col-12 position-relative px-0">
            <div class="h-100 bg-home-1 blur col-12 position-absolute" />
            <div class="container mt-xs-70 mt-sm-50 mt-xl-120 d-flex align-items-center row mx-auto justify-content-xs-center justify-content-sm-center justify-content-xl-between position-absolute">
              <div class="col-md-10 col-xl-5 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white text-xs-center text-sm-center text-xl-left fs-sm-45">
                  Investigação de casos de <span class="text-azul-light fw-600">infidelidade</span>
                </h1>
                <p class="text-white text-xs-center text-sm-center text-xl-left mt-3 mb-0">
                  Investigamos casos de <span class="text-azul-light fw-700">infidelidade conjugal</span> com total discrição e entregando
                  provas concretas
                </p>
              </div>
              <div class="col-xl-6 mt-xs-70 mt-sm-70 mt-md-100 mt-xl-0 d-flex justify-content-sm-center justify-content-xl-between row mx-0 px-0">
                <div class="col-md-5 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-1 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide1">
                    <div class="div-circulo-selections-1 animate-selection-1" />
                    <div class="div-circulo-selections-2 animate-selection-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação conjugal
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-heart-broken text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mt-xs-70 mt-sm-90 mt-md-0 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-2 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide2">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação empresarial
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-coins text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-3 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide3">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Programa de telemóvel
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-mobile-alt text-white fs-26" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-4 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide4">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Localização de pessoas
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-map-marker-alt text-white fs-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-2 d-flex align-items-center justify-content-center col-12 position-relative px-0">
            <div class="h-100 bg-home-2 blur col-12 position-absolute" />
            <div class="container mt-xs-70 mt-sm-50 mt-xl-120 d-flex align-items-center row mx-auto justify-content-xs-center justify-content-sm-center justify-content-xl-between position-absolute">
              <div class="col-md-10 col-xl-5 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white text-xs-center text-sm-center text-xl-left fs-sm-45">
                  Somos peritos em <span class="text-azul-light fw-600">investigação empresarial</span>
                </h1>
                <p class="text-white text-xs-center text-sm-center text-xl-left mt-3 mb-0">
                  Investigamos casos de <span class="text-azul-light fw-700">fraudes, corrupção, vazamento de informações</span> ou qualquer
                  outra irregularidade dentro da sua empresa.
                </p>
              </div>
              <div class="col-xl-6 mt-xs-70 mt-sm-70 mt-md-100 mt-xl-0 d-flex justify-content-sm-center justify-content-xl-between row mx-0 px-0">
                <div class="col-md-5 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-1 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide1">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação conjugal
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-heart-broken text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mt-xs-70 mt-sm-90 mt-md-0 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-2 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide2">
                    <div class="div-circulo-selections-1 animate-selection-1" />
                    <div class="div-circulo-selections-2 animate-selection-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação empresarial
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-coins text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-3 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide3">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Programa de telemóvel
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-mobile-alt text-white fs-26" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-4 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide4">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Localização de pessoas
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-map-marker-alt text-white fs-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-3 d-flex align-items-center justify-content-center col-12 position-relative px-0">
            <div class="h-100 bg-home-3 blur col-12 position-absolute" />
            <div class="container mt-xs-70 mt-sm-50 mt-xl-120 d-flex align-items-center row mx-auto justify-content-xs-center justify-content-sm-center justify-content-xl-between position-absolute">
              <div class="col-md-10 col-xl-5 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white text-xs-center text-sm-center text-xl-left fs-sm-45">
                  Monitore telemóveis por meio do <span class="text-azul-light fw-600">programa de telemóvel VIP</span>
                </h1>
                <p class="text-white text-xs-center text-sm-center text-xl-left mt-3 mb-0">
                  Monitore o telemóvel de seu(a) filho(a) e tenha acesso a: <span class="text-azul-light fw-700">conversas de WhatsApp,
                    Instagram, Skype, acesso a câmera do telemóvel</span> e muitas outras funcionalidades.
                </p>
              </div>
              <div class="col-xl-6 mt-xs-70 mt-sm-70 mt-md-100 mt-xl-0 d-flex justify-content-sm-center justify-content-xl-between row mx-0 px-0">
                <div class="col-md-5 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-1 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide1">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação conjugal
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-heart-broken text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mt-xs-70 mt-sm-90 mt-md-0 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-2 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide2">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação empresarial
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-coins text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-3 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide3">
                    <div class="div-circulo-selections-1 animate-selection-1" />
                    <div class="div-circulo-selections-2 animate-selection-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Programa de telemóvel
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-mobile-alt text-white fs-26" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-4 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide4">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Localização de pessoas
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-map-marker-alt text-white fs-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-home-4 d-flex align-items-center justify-content-center col-12 position-relative px-0">
            <div class="h-100 bg-home-4 col-12 position-absolute" />
            <div class="container mt-xs-70 mt-sm-50 mt-xl-120 d-flex align-items-center row mx-auto justify-content-xs-center justify-content-sm-center justify-content-xl-between position-absolute">
              <div class="col-md-10 col-xl-5 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white text-xs-center text-sm-center text-xl-left fs-sm-45">
                  <span class="text-azul-light fw-600">Localizamos pessoas</span> em qualquer parte de <span class="text-azul-light fw-600">Portugal</span>
                </h1>
                <p class="text-white text-xs-center text-sm-center text-xl-left mt-3 mb-0">
                  Com nosso serviço de <span class="text-azul-light fw-700">Localização de pessoas</span> conseguimos encontrar
                  <span class="text-azul-light fw-700">qualquer pessoa</span> em todo território português.
                </p>
              </div>
              <div class="col-xl-6 mt-xs-70 mt-sm-70 mt-md-100 mt-xl-0 d-flex justify-content-sm-center justify-content-xl-between row mx-0 px-0">
                <div class="col-md-5 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-1 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide1">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação conjugal
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-heart-broken text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mt-xs-70 mt-sm-90 mt-md-0 px-0 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-2 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide2">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Investigação empresarial
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-coins text-white fs-24 mt-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-3 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide3">
                    <div class="div-circulo-selections-1" />
                    <div class="div-circulo-selections-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Programa de telemóvel
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-mobile-alt text-white fs-26" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 px-0 mt-xs-70 mt-sm-90 d-flex justify-content-xs-center justify-content-sm-center justify-content-xl-end">
                  <div class="div-selection-home-4 cursor-pointer ml-xs-100 ml-sm-120 ml-md-70 ml-xl-0 shadow d-flex justify-content-center align-items-center position-relative" @click.prevent="GetSlide4">
                    <div class="div-circulo-selections-1 animate-selection-1" />
                    <div class="div-circulo-selections-2 animate-selection-2" />
                    <div class="description-select d-flex align-items-center justify-content-end">
                      <h6 class="text-white fs-18 text-right mr-2 mb-0">
                        Localização de pessoas
                      </h6>
                      <div class="bolinha-description-select d-flex justify-content-center align-items-center">
                        <i class="fas fa-map-marker-alt text-white fs-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </section>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import { CarouselPlugin } from '../node_modules/bootstrap-vue/src/components/carousel'
Vue.use(CarouselPlugin)
export default {
  methods: {
    GetSlide1 () {
      this.$refs.CarouselHome.setSlide(0)
      this.$smoothScroll({
        scrollTo: document.getElementById('home'),
        duration: 500,
        offset: -50
      })
    },
    GetSlide2 () {
      this.$refs.CarouselHome.setSlide(1)
      this.$smoothScroll({
        scrollTo: document.getElementById('home'),
        duration: 500,
        offset: -50
      })
    },
    GetSlide3 () {
      this.$refs.CarouselHome.setSlide(2)
      this.$smoothScroll({
        scrollTo: document.getElementById('home'),
        duration: 500,
        offset: -50
      })
    },
    GetSlide4 () {
      this.$refs.CarouselHome.setSlide(3)
      this.$smoothScroll({
        scrollTo: document.getElementById('home'),
        duration: 500,
        offset: -50
      })
    }
  }
}
</script>
<style scoped>
  @media (min-width: 1px) {
    .div-selection-home-1{
      background: url(../assets/img/adulterio.webp) center center no-repeat;
      background-size: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-2{
      background: url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
      background-size: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-3{
      background: url(../assets/img/software-espiao.webp) center center no-repeat;
      background-size: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-4{
      background: url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
      background-size: cover;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
  }
  @media (min-width: 576px) {
    .div-selection-home-1{
      background: url(../assets/img/adulterio.webp) center center no-repeat;
      background-size: cover;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-2{
      background: url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
      background-size: cover;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-3{
      background: url(../assets/img/software-espiao.webp) center center no-repeat;
      background-size: cover;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
    .div-selection-home-4{
      background: url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
      background-size: cover;
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 1px solid #c2c2c2b4;
    }
  }
  .div-circulo-selections-1{
    position: absolute;
    width: 130%;
    height: 130%;
    border: 3px solid var(--azul_light);
    border-radius: 50%;
  }
  .div-circulo-selections-2{
    position: absolute;
    width: 160%;
    height: 160%;
    border: 1px solid var(--azul_light);
    border-radius: 50%;
  }
  .description-select{
    position: absolute;
    left: -135px;
    bottom: -10px;
    width: 160px;
  }
  .bolinha-description-select{
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    background-color: var(--azul);
  }
  .bg-home-1{
    background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/adulterio.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/adulterio.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/adulterio.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/adulterio.webp) center center no-repeat;
    background-size: cover;
  }
  .bg-home-2{
    background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/investigacao-empresarial.webp) center center no-repeat;
    background-size: cover;
  }
  .bg-home-3{
    background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/software-espiao.webp) top center no-repeat;
    -o-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/software-espiao.webp) top center no-repeat;
    -moz-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/software-espiao.webp) top center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/software-espiao.webp) top center no-repeat;
    background-size: cover;
  }
  .bg-home-4{
    background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000a6, #000000a6), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    background-size: cover;
  }
  .blur{
    filter: blur(1px);
  }
  @keyframes AnimateSelectionActive1 {
    from{
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    50%{
      opacity: 1;
      width: 130%;
      height: 130%;
    }
    to{
      opacity: 0;
    }
  }
  @-o-keyframes AnimateSelectionActive1 {
    from{
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    50%{
      opacity: 1;
      width: 130%;
      height: 130%;
    }
    to{
      opacity: 0;
    }
  }
  @-moz-keyframes AnimateSelectionActive1 {
    from{
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    50%{
      opacity: 1;
      width: 130%;
      height: 130%;
    }
    to{
      opacity: 0;
    }
  }
  @-webkit-keyframes AnimateSelectionActive1 {
    from{
      opacity: 0;
      width: 100%;
      height: 100%;
    }
    50%{
      opacity: 1;
      width: 130%;
      height: 130%;
    }
    to{
      opacity: 0;
    }
  }
  @keyframes AnimateSelectionActive2 {
    from{
      opacity: 0;
      width: 130%;
      height: 130%;
    }
    50%{
      opacity: 1;
      width: 160%;
      height: 160%;
    }
    to{
      opacity: 0;
    }
  }
  @-o-keyframes AnimateSelectionActive2 {
    from{
      opacity: 0;
      width: 130%;
      height: 130%;
    }
    50%{
      opacity: 1;
      width: 160%;
      height: 160%;
    }
    to{
      opacity: 0;
    }
  }
  @-moz-keyframes AnimateSelectionActive2 {
    from{
      opacity: 0;
      width: 130%;
      height: 130%;
    }
    50%{
      opacity: 1;
      width: 160%;
      height: 160%;
    }
    to{
      opacity: 0;
    }
  }
  @-webkit-keyframes AnimateSelectionActive2 {
    from{
      opacity: 0;
      width: 130%;
      height: 130%;
    }
    50%{
      opacity: 1;
      width: 160%;
      height: 160%;
    }
    to{
      opacity: 0;
    }
  }
  .animate-selection-1{
    animation-name: AnimateSelectionActive1;
    -o-animation-name: AnimateSelectionActive1;
    -moz-animation-name: AnimateSelectionActive1;
    -webkit-animation-name: AnimateSelectionActive1;
    animation-duration: 1.1s;
    -o-animation-duration: 1.1s;
    -moz-animation-duration: 1.1s;
    -webkit-animation-duration: 1.1s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
  .animate-selection-2{
    animation-name: AnimateSelectionActive2;
    -o-animation-name: AnimateSelectionActive2;
    -moz-animation-name: AnimateSelectionActive2;
    -webkit-animation-name: AnimateSelectionActive2;
    animation-duration: 1.1s;
    -o-animation-duration: 1.1s;
    -moz-animation-duration: 1.1s;
    -webkit-animation-duration: 1.1s;
    animation-delay: .2s;
    -o-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -webkit-animation-delay: .2s;
    animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
</style>
