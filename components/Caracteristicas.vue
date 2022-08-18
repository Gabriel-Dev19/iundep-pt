<template>
  <div class="container d-flex align-items-center row mx-auto mt-xs-80 mt-sm-80 mt-lg-120">
    <div class="col-lg-5 pr-lg-70 px-0">
      <h2 class="text-azul text-xs-center fs-xs-36 fs-sm-40 fs-lg-32 text-sm-center fw-600 text-lg-left text-azul">
        Nossos valores favorecem você!
      </h2>
      <p class="mt-20 text-xs-center text-sm-center text-lg-left fw-600 fs-18">
        A IUNDEP Detectives tem valores que favorecem você na hora de procurar
        um profissional para resolver seu caso. Nós temos a missão entregar aos nossos
        clientes resultados precisos e realistas. Temos a visão de ser reconhecidos pelos
        clientes e parceiros como referência no ramo de investigação. E temos a
        ética, compromisso e profissionalismo como os principais pilares que norteiam
        nossas atividades.
      </p>
      <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
        <BtnAzulLigue class="mt-2" />
      </div>
    </div>
    <div class="col-lg mt-xs-60 mt-sm-60 px-0 mt-lg-0 ml-lg-3">
      <div class="d-flex row mx-auto">
        <div class="col-md pt-30 pb-35 d-flex align-items-center bg-cinza border-radius-15">
          <div>
            <h5 class="fw-700 text-xs-center text-sm-center text-md-left">
              Missão
            </h5>
            <p class="mb-0 fw-600 text-xs-center text-sm-center text-md-left fs-17">
              A IUNDEP Detectives, tem como missão entregar aos nossos clientes resultados
              precisos e realistas. Atuamos através de uma equipa especializada e do fornecimento
              de serviços de qualidade em investigação.
            </p>
          </div>
        </div>
        <div class="col-md pt-30 pb-35 mt-xs-3 mt-sm-3 mt-md-0 d-flex align-items-center ml-md-3 bg-cinza border-radius-15">
          <div>
            <h5 class="fw-700 text-xs-center text-sm-center text-md-left">
              Visão
            </h5>
            <p class="mb-0 fw-600 text-xs-center text-sm-center text-md-left fs-17">
              A IUNDEP Detectives, tem como visão ser reconhecida pelos clientes
              e parceiros como referência no ramo de investigação, por meio da ética,
              do compromisso e do profissionalismo.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex row mx-auto">
        <div class="col-md pt-30 pb-35 mt-3 d-flex align-items-center bg-cinza border-radius-15">
          <div>
            <h5 class="fw-700 text-xs-center text-sm-center text-md-left">
              Valores
            </h5>
            <p class="mb-0 fw-600 text-xs-center text-sm-center text-md-left fs-17">
              Para a IUNDEP Detectives, são valores a ética, compromisso e profissionalismo
              - esses são os três pilares que norteiam nossas atividades. Tudo para oferecer
              aos nossos clientes excelência no que fazemos.
            </p>
          </div>
        </div>
        <div class="col-md pt-30 pb-35 mt-3 d-flex ml-md-3 mt-3 align-items-center bg-azul border-radius-15">
          <div>
            <h5 class="fw-700 text-xs-center text-sm-center text-md-left text-white">
              Fale com a gente!
            </h5>
            <p class="mb-0 fw-600 text-xs-center text-sm-center text-md-left text-white fs-17">
              Teremos o prazer de atender você! Atuamos nos territórios de Santa Catarina,
              Paraná, Rio Grande do Sul, São Paulo, Rio de Janeiro, Minas Gerais, Distrito Federal,
              Mato Grosso do Sul e Goiás.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnAzulLigue from '../components/buttons/btn-azul-ligue-agora'
export default {
  components: {
    BtnAzulLigue
  }
}
</script>
<style scoped>
  .bg-cinza{
    background-color: #dadada;
  }
</style>
