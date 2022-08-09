<template>
  <div>
    <Navbar />
    <Home />
    <Nuxt id="sobre" />
    <ServicesGerais id="servicos" class="container pt-xs-80 pt-sm-80 pt-lg-120" />
    <Caracteristicas />
    <Contato />
    <Footer />
    <ModalWhatsapp />
    <BtnWhatsappFlutuante />
    <client-only>
      <Cookie />
    </client-only>
  </div>
</template>
<script>
import Vue from 'vue'
import '../assets/scss/index.css'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import VueSmoothScroll from '../node_modules/vue2-smooth-scroll'
import Caracteristicas from '../components/Caracteristicas.vue'
import Contato from '../components/Contato.vue'
import Vuelidate from '../node_modules/vuelidate'
import Footer from '../components/Footer.vue'
import ServicesGerais from '../pages/servicos/index.vue'
import ModalWhatsapp from '../components/ModalWhatsapp.vue'
import BtnWhatsappFlutuante from '../components/buttons/btn-whatsapp-flutuante.vue'
import { BootstrapVue } from '../node_modules/bootstrap-vue'
import Cookie from '~/components/Cookie.vue'
Vue.use(VueSmoothScroll)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
export default {
  components: { Navbar, Home, Caracteristicas, Contato, Footer, ServicesGerais, ModalWhatsapp, BtnWhatsappFlutuante, Cookie },
  mounted () {
    document.oncontextmenu = function () {
      return false
    }

    function EvitarSeleccion (target) {
      if (typeof target.onselectstart !== 'undefined') {
        target.onselectstart = function () {
          return false
        }
      } else if (typeof target.style.MozUserSelect !== 'undefined') {
        target.style.MozUserSelect = 'none'
      } else {
        target.style.cursor = 'default'
      }
    }

    EvitarSeleccion(document.body)
  }
}
</script>
<style>
</style>
