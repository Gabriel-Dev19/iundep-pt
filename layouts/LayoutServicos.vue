<template>
  <div>
    <Navbar />
    <Home />
    <Sobre id="sobre" />
    <Nuxt id="servicos" class="container pt-xs-80 pt-sm-80 pt-lg-120" />
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
import Vue from '../node_modules/vue'
import '../assets/scss/index.css'
import Home from '../components/Home.vue'
import VueScrollTo from '../node_modules/vue-scrollto'
import Navbar from '../components/Navbar.vue'
import VueSmoothScroll from '../node_modules/vue2-smooth-scroll'
import Caracteristicas from '../components/Caracteristicas.vue'
import Contato from '../components/Contato.vue'
import Vuelidate from '../node_modules/vuelidate'
import Footer from '../components/Footer.vue'
import Sobre from '../pages/index'
import ModalWhatsapp from '../components/ModalWhatsapp.vue'
import BtnWhatsappFlutuante from '../components/buttons/btn-whatsapp-flutuante.vue'
import { BootstrapVue } from '../node_modules/bootstrap-vue'
import Cookie from '~/components/Cookie.vue'
Vue.use(VueSmoothScroll)
Vue.use(Vuelidate)
Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.directive('scroll', {
  inserted (el, binding) {
    const f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
export default {
  components: { Navbar, Home, Caracteristicas, Contato, Footer, Sobre, ModalWhatsapp, BtnWhatsappFlutuante, Cookie },
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
<style scoped>
</style>
