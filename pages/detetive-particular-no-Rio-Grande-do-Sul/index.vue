<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular no Rio Grande do Sul.
          <br>
          Precisando de um detetive particular no Rio Grande do Sul?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está no Rio Grande do Sul e queremos ajudar você a solucionar suas dúvidas.
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
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <BtnAzulWhatsapp class="mt-2" />
        </div>
        <div class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start">
          <btn-azul-ligue-agora class="mt-10" />
        </div>
      </div>
      <div class="col-lg order-xs-1 d-xs-none d-sm-none d-lg-flex order-sm-1 order-lg-2 px-0 ml-lg-30">
        <card-sobre />
      </div>
    </div>
    <h2 class="text-azul fs-xs-36 fs-sm-40 fs-lg-32 mt-xs-70 mt-sm-70 mt-lg-100 text-center col-12 px-0 fw-600">
      Encontre um detetive particular na sua cidade
    </h2>
    <section class=" col-12 px-0">
      <div class="container px-xs-0">
        <!-- Cidades A -->
        <div class="position-relative overflow-hidden col-12 mt-30 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-1">
              A
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AltoFeliz">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Alto Feliz - RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Alvorada">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Alvorada - RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AmaralFerrador">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Amaral Ferrador – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AntaGorda">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Anta Gorda – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Arambare">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arambaré – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ararica">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Araricá – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ArroioDoMeio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arroio do Meio – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ArroioDoSal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arroio do Sal – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ArroioDoTigre">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arroio do Tigre – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ArroioDosRatos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arroio dos Ratos – RS
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Arvorezinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Arvorezinha – RS
            </a>
          </div>
        </div>
        <!-- Cidades B -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              B
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioPinhal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Pinhal - RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Barao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Barão - RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BaraoDoTriunfo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Barão do Triunfo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BomRetiroDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Bom Retiro do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BoqueirãoDoLeao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Boqueirão do Leão – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BomPrincipio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Bom Princípio – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Brochier">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Brochier – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Butiá">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Butiá – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BarraDoRibeiro">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Barra do Ribeiro – RS
            </a>
          </div>
        </div>
        <!-- Cidades C -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              C
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CachoeiraDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cachoeira do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cachoeirinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cachoeirinha – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Camaqua">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Camaquã – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampoBom">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campo Bom – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CerroBranco">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cerro Branco – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CerroGrandeDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cerro Grande do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Charqueadas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Charqueadas – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Candelaria">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Candelária – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Canoas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Canoas – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CanudosDoVale">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Canudos do Vale – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CapaoDaCanoa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Capão da Canoa – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Chuvisca">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Chuvisca – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cidreira">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cidreira – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Colinas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Colinas – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CapelaDeSantana">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Capela de Santana – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Capitao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Capitão – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CapivariDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Capivari do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Caraa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Caraá – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CoqueiroBaixo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Coqueiro Baixo – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cristal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cristal – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CruzeiroDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cruzeiro do Sul – RS
            </a>
          </div>
        </div>
        <!-- Cidades D -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              D
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg mt-4 px-0">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DoisIrmaos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Dois Irmãos – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DomFeliciano">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Dom Feliciano – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DomPedroDeAlcantara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Dom Pedro de Alcântara – RS
            </a>
          </div>
        </div>
        <!-- Cidades E -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              E
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="EldoradoDoSul">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Eldorado do Sul – RS
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Esteio">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Esteio – RS
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Estrela">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Estrela – RS
          </a>
        </div>
        <!-- Cidades F -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              F
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="FazendaVilanova">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Fazenda Vilanova – RS
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Feliz">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Feliz – RS
          </a>
        </div>
        <!-- Cidades G -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              G
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="GeneralCamara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> General Câmara – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Glorinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Glorinha – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Gravatai">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Gravataí – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Guaiba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Guaíba – RS
            </a>
          </div>
        </div>
        <!-- Cidades H -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              H
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Harmonia">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Harmonia – RS
          </a>
        </div>
        <!-- Cidades I -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              I
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ibirama">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ibirama – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Igrejinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Igrejinha – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ilopolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ilópolis – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Imigrante">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Imigrante – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itati">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Itati – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ivoti">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ivoti – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Imbe">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Imbé – RS
            </a>
          </div>
        </div>
        <!-- Cidades L -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              L
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lagoao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lagoão – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lajedo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lajedo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="LindolfoCollor">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lindolfo Collor – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="LinhaNova">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Linha Nova – RS
            </a>
          </div>
        </div>
        <!-- Cidades M -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              M
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Maquine">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Maquiné – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MarianaPimentel">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mariana Pimentel – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MarquesDeSouza">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Marques de Souza – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MatoLeitao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mato Leitão – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MinasDoLeao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Minas do Leão – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Montenegro">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Montenegro – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MorrinhosDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Morrinhos do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MorroReuter">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Morro Reuter – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Mostardas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mostardas – RS
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Mucum">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mucum – RS
            </a>
          </div>
        </div>
        <!-- Cidades N -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              N
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="NovaBrescia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Nova Bréscia – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="NovaHartz">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Nova Hartz – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="NovaSantaRita">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Nova Santa Rita – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="NovoHamburgo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Novo Hamburgo – RS
            </a>
          </div>
        </div>
        <!-- Cidades O -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              O
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Osorio">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Osório – RS
          </a>
        </div>
        <!-- Cidades P -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              P
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PalmaresDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Palmares do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PantanoGrande">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pantano Grande – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PareciNovo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pareci Novo – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Parobe">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Parobé – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PassoDoSobrado">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Passo do Sobrado – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Paverema">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Paverema – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PoçoDasAntas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Poço das Antas – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Portao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Portão – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PortoAlegre">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Porto Alegre – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PousoNovo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pouso Novo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PresidenteLucena">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Presidente Lucena – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Progresso">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Progresso – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Putinga">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Putinga – RS
            </a>
          </div>
        </div>
        <!-- Cidades R -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              R
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Relvado">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Relvado – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioPardo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio Pardo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RocaSales">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Roca Sales – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Rolante">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rolante – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Riozinho">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Riozinho – RS
            </a>
          </div>
        </div>
        <!-- Cidades S -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              S
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SalvadorDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Salvador do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaClaraDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Clara do Sul - RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaCruzDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Cruz do Sul - RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaMariaDoHerval">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Maria do Herval - RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantoAntonioDaPatrulha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santo Antônio da Patrulha - RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJeronimo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Jerônimo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoseDoHortencio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São José do Hortêncio – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoLeopoldo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Leopoldo – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoSebastiaoDoCai">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Sebastião do Cai – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoVendelino">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Vendelino – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sapiranga">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sapiranga – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SapucaiaDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sapucaia do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Segredo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Segredo – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SentinelaDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sentinela do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Serio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sério – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SertaoSantana">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sertão Santana – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sinimbu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sinimbu – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sobradinho">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sobradinho – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantanaDoLivramento">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santana do Livramento – RS
            </a>
          </div>
        </div>
        <!-- Cidades T -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              T
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tabai">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tabaí – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tapes">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tapes – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Taquara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Taquara – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Travesseiro">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Travesseiro – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tunas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tunas – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Taquari">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Taquari – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tavares">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tavares – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TerraDeAreia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Terra de Areia – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TresCachoeiras">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Três Cachoeiras – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TresCoroas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Três Coroas – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tupandi">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tupandi – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Teutonia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Teutônia – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Torres">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Torres – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tramandai">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tramandaí – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TresForquilhas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Três Forquilhas – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Triunfo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Triunfo – RS
            </a>
          </div>
        </div>
        <!-- Cidades U -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              U
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Uruguaiana">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Uruguaiana – RS
          </a>
        </div>
        <!-- Cidades V -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              V
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ValeDoSol">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Vale do Sol – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ValeReal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Vale Real – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Viamao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Viamão – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ValeVerde">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Vale Verde – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VenancioAires">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Venâncio Aires – RS
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VeraCruz">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Vera Cruz – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VespasianoCorreia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Vespasiano Correia – RS
            </a>
          </div>
        </div>
        <!-- Cidades X -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              X
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="XangriLa">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Xangri-Lá – RS
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BtnAzulWhatsapp from '../../components/buttons/btn-azul-fale-no-whatsapp'
import BtnAzulLigueAgora from '../../components/buttons/btn-azul-ligue-agora.vue'
import cardSobre from '../../components/components-minus/card-sobre.vue'
export default {
  components: {
    cardSobre,
    BtnAzulWhatsapp,
    BtnAzulLigueAgora
  },
  layout: 'LayoutSobre',
  head: {
    title: 'Detetive particular no Rio Grande do Sul | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  },
  methods: {
    AltoFeliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alto-Feliz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Alvorada () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alvorada-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AmaralFerrador () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Amaral-Ferrador-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AntaGorda () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Anta-Gorda-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Arambare () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arambare-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ararica () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ararica-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ArroioDoMeio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Meio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ArroioDoSal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Sal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ArroioDoTigre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Tigre-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ArroioDosRatos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-dos-Ratos-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Arvorezinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arvorezinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioPinhal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Balneario-Pinhal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Barao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BaraoDoTriunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-do-Triunfo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BomRetiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Retiro-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BoqueirãoDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Boqueirao-do-Leao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BomPrincipio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Principio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Brochier () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Brochier-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Butiá () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Butia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BarraDoRibeiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barra-do-Ribeiro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CachoeiraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeira-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cachoeirinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeirinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Camaqua () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Camaqua-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampoBom () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Campo-Bom-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CerroBranco () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Branco-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CerroGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Grande-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Charqueadas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Charqueadas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Candelaria () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Candelaria-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Canoas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canoas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CanudosDoVale () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canudos-do-Vale-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CapaoDaCanoa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capao-da-Canoa-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Chuvisca () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Chuvisca-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cidreira () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cidreira-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Colinas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Colinas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CapelaDeSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capela-de-Santana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Capitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capitao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CapivariDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capivari-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Caraa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Caraa-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CoqueiroBaixo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Coqueiro-Baixo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cristal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cristal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CruzeiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cruzeiro-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DoisIrmaos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dois-Irmaos-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DomFeliciano () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Feliciano-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DomPedroDeAlcantara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Pedro-de-Alcantara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    EldoradoDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Eldorado-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Esteio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Esteio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Estrela () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Estrela-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    FazendaVilanova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Fazenda-Vilanova-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Feliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Feliz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    GeneralCamara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-General-Camara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Glorinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Glorinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Gravatai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Gravatai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guaiba () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Guaiba-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Harmonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Harmonia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ibirama-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Igrejinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Igrejinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ilopolis () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ilopolis-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Imigrante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imigrante-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itati () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Itati-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ivoti () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ivoti-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Imbe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imbe-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lagoao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lagoao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lajedo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lajedo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LindolfoCollor () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lindolfo-Collor-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LinhaNova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Linha-Nova-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Maquine () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Maquine-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MarianaPimentel () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mariana-Pimentel-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MarquesDeSouza () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Marques-de-Souza-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MatoLeitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mato-Leitao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MinasDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Minas-do-Leao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Montenegro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Montenegro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MorrinhosDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morrinhos-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MorroReuter () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morro-Reuter-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Mostardas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mostardas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Mucum () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mucum-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    NovaBrescia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Brescia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    NovaHartz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Hartz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    NovaSantaRita () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Santa-Rita-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    NovoHamburgo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Novo-Hamburgo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Osorio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Osorio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PalmaresDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Palmares-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PantanoGrande () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pantano-Grande-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PareciNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pareci-Novo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Parobe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Parobe-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PassoDoSobrado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Passo-do-Sobrado-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Paverema () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Paverema-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PoçoDasAntas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Poço-das-Antas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Portao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Portao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PortoAlegre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Porto-Alegre-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PousoNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pouso-Novo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PresidenteLucena () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Presidente-Lucena-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Progresso () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Progresso-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Putinga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Putinga-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Relvado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Relvado-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioPardo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rio-Pardo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RocaSales () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Roca-Sales-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Rolante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rolante-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Riozinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Riozinho-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SalvadorDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Salvador-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaClaraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Clara-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaCruzDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Cruz-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaMariaDoHerval () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Maria-do-Herval-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantoAntonioDaPatrulha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santo-Antonio-da-Patrulha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJeronimo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jeronimo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoseDoHortencio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jose-do-Hortencio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoLeopoldo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Leopoldo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoSebastiaoDoCai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Sebastiao-do-Cai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoVendelino () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Vendelino-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sapiranga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapiranga-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SapucaiaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapucaia-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Segredo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Segredo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SentinelaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sentinela-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Serio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Serio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SertaoSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sertao-Santana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sinimbu () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sinimbu-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sobradinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sobradinho-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantanaDoLivramento () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santana-do-Livramento-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tabai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tabai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tapes () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tapes-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Taquara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Travesseiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Travesseiro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tunas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tunas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Taquari () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquari-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tavares () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tavares-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TerraDeAreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Terra-de-Areia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TresCachoeiras () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Cachoeiras-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TresCoroas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Coroas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tupandi () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tupandi-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Teutonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Teutonia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Torres () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Torres-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tramandai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tramandai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TresForquilhas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Forquilhas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Triunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Triunfo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Uruguaiana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Uruguaiana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ValeDoSol () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-do-Sol-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ValeReal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Real-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Viamao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Viamao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ValeVerde () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Verde-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VenancioAires () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Venancio-Aires-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VeraCruz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vera-Cruz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VespasianoCorreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vespasiano-Correia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    XangriLa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Xangri-La-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    }
  }
}
</script>
<style scoped>

</style>
