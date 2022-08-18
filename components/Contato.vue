<template>
  <div id="contato" class="container pt-xs-80 pt-sm-80 pt-lg-120">
    <h1 class="text-azul text-center fs-xs-36 fw-600">
      Entre em contato
    </h1>
    <div class="d-flex row border shadow overflow-hidden mx-auto border-radius-15 mt-xs-40 mt-sm-40 mt-lg-60">
      <div class="col-lg-5 py-35 d-flex align-items-center bg-azul">
        <div>
          <h4 class="text-center col-10 bb-white pb-3 mx-auto text-white fw-600">
            Consulte um de nossos especialistas em sua região
          </h4>
          <h4 class="text-center col-10 pb-2 mb-0 mt-30 mx-auto text-white fw-600">
            Contacto
          </h4>
          <div class="col-xs-11 col-sm-9 mx-auto">
            <btn-telefone-contato />
            <!-- <btn-quatro-oito class="mt-15" />
            <btn-quatro-um class="mt-15" />
            <btn-quatro-nove class="mt-15" /> -->
          </div>
          <div class="d-flex justify-content-center align-items-center mx-auto" style="width:fit-content;">
            <div class="d-flex flex-column align-items-start justify-content-center mt-30 px-0 col-12">
              <a href="https://www.facebook.com/Detetives-Iundep-103095312037313" target="_blank" class="no-underline d-flex align-items-center text-white fw-600 fs-18" rel="noopener noreferrer">
                <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center col-auto mr-15">
                  <i class="fab fa-facebook-f text-dark fs-26" />
                </div> Facebook
              </a>
              <a href="https://twitter.com/iundepdetetives" target="_blank" class="no-underline d-flex mt-15 align-items-center text-white fw-600 fs-18" rel="noopener noreferrer">
                <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center mr-15">
                  <i class="fab fa-twitter text-dark fs-26" />
                </div> Twitter
              </a>
              <a href="https://www.youtube.com/channel/UCIRIGfLBfPF4GfcXNC9kEtQ" target="_blank" class="no-underline d-flex mt-15 align-items-center text-white fw-600 fs-18" rel="noopener noreferrer">
                <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center mr-15">
                  <i class="fab fa-youtube text-dark fs-26" />
                </div> Youtube
              </a>
              <a href="https://br.pinterest.com/iundepdetetives/_saved/" target="_blank" class="no-underline d-flex mt-15 align-items-center text-white fw-600 fs-18" rel="noopener noreferrer">
                <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center mr-15">
                  <i class="fab fa-pinterest text-dark fs-26" />
                </div> Pinterest
              </a>
              <a href="https://www.instagram.com/iundepdetetives/" target="_blank" class="no-underline d-flex mt-15 align-items-center text-white fw-600 fs-18" rel="noopener noreferrer">
                <div class="bolinha-redes-sociais btn-light d-flex justify-content-center align-items-center mr-15">
                  <i class="fab fa-instagram fw-700 text-dark fs-27" />
                </div> Instagram
              </a>
            </div>
          </div>
          <a href="mailto:contacto@iundepdetectives.pt" target="_blank" rel="nopenner noreferrer" class="no-underline text-light">
            <div class="d-flex mt-30 align-items-center fs-xs-15 fs-sm-18 fw-500 justify-content-center">
              <i class="fa fa-envelope mr-2 fs-25 fw-300" /> contacto@iundepdetectives.pt
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg d-flex align-items-center pt-45 pb-xs-3 pb-sm-3 pb-lg-50 px-lg-4">
        <div>
          <h4 class="text-azul text-xs-center text-sm-center text-lg-left fw-600 col-lg-10 px-0">
            Preencha o formulário abaixo para receber mais informações
          </h4>
          <div v-show="ShowMsgSuccessFloat" class="col-12 mensagem-flutuante">
            <div class="col-12 px-0 d-flex justify-content-center">
              <div class="py-1 bg-success d-flex align-items-center shadow fw-500 justify-content-between text-white col-xl-6 rounded">
                Mensagem enviada com sucesso, em breve entraremos em contato com você.
                <button class="btn pr-0 d-flex justify-content-center align-items-center pt-0 pb-0" @click.prevent="CloseMsgSuccess">
                  <i class="fa fa-times text-white fs-20 fw-400" />
                </button>
              </div>
            </div>
          </div>
          <form autocomplete="off" class="mt-30" @submit.prevent="submit">
            <div v-show="ShowMsgSuccess" class="rounded bg-success py-1 mb-3 px-2 text-white">
              Mensagem enviada com sucesso, em breve entraremos em contato
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-sm px-0">
                <input v-model="nome" type="text" class="form-control shadow-sm" placeholder="Seu nome" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.nome.$error" class="error text-left px-2">
                  Este campo é obrigatório, mínimo {{ $v.nome.$params.minLength.min }} letras.
                </div>
              </div>
              <div class="form-group col-sm px-0 ml-sm-3 mt-xs-3">
                <input v-model="email" type="text" class="form-control shadow-sm" placeholder="Seu E-mail" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.email.$error" class="error text-left px-2">
                  Preencha com um e-mail válido
                </div>
              </div>
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-sm px-0">
                <input
                  v-model="telefone"
                  v-mask="mask"
                  type="text"
                  class="form-control shadow-sm"
                  placeholder="Telefone para contato"
                  @focus="ShowMsgError = true"
                  @keypress="VerificaNumero()"
                  @keyup.backspace="VerificaNumeroDelete()"
                >
                <div v-show="ShowMsgError" v-if="$v.telefone.$error" class="error text-left px-2">
                  Coloque um telefone válido
                </div>
              </div>
              <div class="form-group col-sm px-0 ml-sm-3 mt-xs-3">
                <input v-model="cidade" type="text" class="form-control shadow-sm" placeholder="Cidade" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.cidade.$error" class="error text-left px-2">
                  Preencha com sua cidade
                </div>
              </div>
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-sm px-0">
                <input v-model="estado" type="text" class="form-control shadow-sm" placeholder="Estado" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.estado.$error" class="error text-left px-2">
                  Preencha com seu estado
                </div>
              </div>
              <div class="form-group col-sm px-0 ml-sm-3 mt-xs-3">
                <input v-model="data_contato" type="text" class="form-control shadow-sm" placeholder="Data para contato" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.data_contato.$error" class="error text-left px-2">
                  Coloque uma data para retorno
                </div>
              </div>
            </div>
            <div class="d-flex row mx-auto">
              <div class="form-group col-sm px-0">
                <input v-model="horario" type="text" class="form-control shadow-sm" placeholder="Horário para contato" @focus="ShowMsgError = true">
                <div v-show="ShowMsgError" v-if="$v.horario.$error" class="error text-left px-2">
                  Coloque um horário para retorno
                </div>
              </div>
              <div class="form-group col-sm px-0 ml-sm-3 mt-xs-3">
                <select v-model="tipo_servico" class="form-control shadow-sm" :class="{'select-bold': class_disabled_select}" @change="VerificaBoldSelect" @focus="ShowMsgError = true">
                  <option value="" disabled selected>
                    Tipo de serviço ...
                  </option>
                  <option value="Investigação conjugal">
                    Investigação conjugal
                  </option>
                  <option value="Investigação empresarial">
                    Investigação empresarial
                  </option>
                  <option value="Localização de pessoas">
                    Localização de pessoas
                  </option>
                  <option value="Acompanhamento de filhos">
                    Acompanhamento de filhos
                  </option>
                  <option value="Curso de detetive particular">
                    Curso de detetive particular
                  </option>
                  <option value="Programa Celular espião">
                    Programa Celular espião
                  </option>
                </select>
                <div v-show="ShowMsgError" v-if="$v.tipo_servico.$error" class="error text-left px-2">
                  Selecione o serviço desejado
                </div>
              </div>
            </div>
            <div class="form-group d-flex row mx-auto">
              <textarea v-model="mensagem" class="form-control shadow-sm" placeholder="Explique seu caso" @focus="ShowMsgError = true" />
              <div v-show="ShowMsgError" v-if="$v.mensagem.$error" class="error text-left px-2">
                Digite uma mensagem
              </div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-radio">
                <input id="pessoa_fisica" v-model="tipo_pessoa" type="radio" value="Pessoa física" class="custom-control-input">
                <label class="custom-control-label fs-17 fw-500" for="pessoa_fisica">Pessoa física</label>
              </div>
              <div class="custom-control mt-1 custom-radio">
                <input id="pessoa_juridica" v-model="tipo_pessoa" type="radio" value="Pessoa jurídica" class="custom-control-input">
                <label class="custom-control-label fs-17 fw-500" for="pessoa_juridica">Pessoa jurídica</label>
              </div>
              <div v-show="ShowMsgError" v-if="$v.tipo_pessoa.$error" class="error text-left px-2">
                Selecione o tipo de pessoa
              </div>
            </div>
            <button type="submit" class="btn btn-azul text-white fs-17 fw-600 pb-2 px-25">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import axios from '../node_modules/axios'
import { required, minLength, email } from '../node_modules/vuelidate/lib/validators'
import { VueMaskDirective } from '../node_modules/v-mask'
import BtnTelefoneContato from './buttons/BtnTelefoneContato.vue'
Vue.directive('mask', VueMaskDirective)
export default {
  components: { BtnTelefoneContato },
  data () {
    return {
      class_disabled_select: false,
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      tipo_servico: '',
      horario: '',
      data_contato: '',
      mensagem: '',
      tipo_pessoa: '',
      ShowMsgSuccess: false,
      ShowMsgSuccessFloat: false,
      ShowMsgError: true,
      mask: '(##) ####-####'
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(3)
    },
    email: {
      email,
      required
    },
    telefone: {
      required,
      minLength: minLength(14)
    },
    cidade: {
      required
    },
    estado: {
      required
    },
    tipo_servico: {
      required
    },
    horario: {
      required
    },
    data_contato: {
      required
    },
    mensagem: {
      required
    },
    tipo_pessoa: {
      required
    }
  },
  methods: {
    VerificaBoldSelect () {
      if (this.tipo_servico !== '') {
        this.class_disabled_select = true
      } else {
        this.class_disabled_select = false
      }
    },
    CloseMsgSuccess () {
      this.ShowMsgSuccess = true
      this.ShowMsgSuccessFloat = false
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid === false) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.post('https://iundep.com.br/envio.php', JSON.stringify({
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          cidade: this.cidade,
          estado: this.estado,
          tipo_servico: this.tipo_servico,
          horario: this.horario,
          data_contato: this.data_contato,
          mensagem: this.mensagem,
          tipo_pessoa: this.tipo_pessoa
        }))
          .then(
            setTimeout(() => {
              this.ShowMsgSuccessFloat = true
              setTimeout(() => {
                this.ShowMsgSuccess = true
                this.ShowMsgSuccessFloat = false
              }, 4000)
              this.ShowMsgError = false
              this.nome = ''
              this.email = ''
              this.telefone = ''
              this.cidade = ''
              this.estado = ''
              this.tipo_servico = ''
              this.horario = ''
              this.data_contato = ''
              this.mensagem = ''
              this.tipo_pessoa = ''
            }, 300)
          )
      }
    },
    VerificaNumero () {
      if (this.telefone.length === 14) {
        this.mask = '(##) # ####-####'
      }
      if (this.telefone.length <= 13) {
        this.mask = '(##) ####-####'
      }
    },
    VerificaNumeroDelete () {
      if (this.telefone.length <= 15) {
        this.mask = '(##) ####-####'
      }
    }
  }
}
</script>
<style scoped>
  input, textarea{
    font-weight: 600;
    font-size: 17px;
    border-color: #a9a9a9;
  }
  .select-bold{
    font-weight: 600;
    color: #2c3e50 !important;
  }
  select{
    font-size: 17px;
    color: #6f6f6f;
    border-color: #a9a9a9;
  }
  ::placeholder{
    font-weight: 400;
    font-size: 17px;
  }
  textarea{
    min-height: 120px;
    max-height: 120px;
  }
  input:focus, textarea:focus, select:focus{
    border-color: var(--azul) !important;
  }
  .bb-white{
    border-bottom: 1px solid #ffffff;
  }
  .bolinha-redes-sociais{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .mensagem-flutuante{
    position: fixed;
    top: 150px;
    left: 0;
    z-index: 1080;
  }
  .error{
      color: #ffffff;
      font-size: 13px;
      margin-top: 10px;
      background-color: #ff4d4d;
      display: inline-block;
      border-radius: 10px;
  }
</style>
