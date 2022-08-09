<template>
  <div class="container d-flex row mx-auto pt-xs-70 pt-sm-70 pt-lg-100">
    <div class="col-12 d-flex row mx-auto px-0">
      <div class="col-lg-7 px-0">
        <h2 class="text-azul fs-xs-28 fs-sm-30 fs-lg-32 text-xs-center text-sm-center text-lg-left fw-600">
          Detetive particular em Santa Catarina.
          <br>
          Precisando de um detetive particular em Santa Catarina?
        </h2>
        <p class="fw-600 text-xs-center text-sm-center text-lg-left mt-20 fs-18">
          A IUNDEP DETETIVES está em Santa Catarina e queremos ajudar você a solucionar suas dúvidas.
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
    <section class="col-12 px-0">
      <div class="container px-xs-0">
        <!-- Cidades A -->
        <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-1">
              A
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Agrolandia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Agrolândia - SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Agronomica">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Agronômica - SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Apiuna">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Apiúna – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Araquari">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Araquari – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ascurra">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ascurra – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Atalanta">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Atalanta – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Aurora">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Aurora – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AguasMornas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Águas Mornas – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AlfredoWagner">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Alfredo Wagner – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Angelina">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Angelina – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Anitapolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Anitápolis – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="AntonioCarlos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Antônio Carlos – SC
            </a>
            <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ararangua">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Araranguá – SC
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
            <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioBarraDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Barra do Sul - SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioCamboriu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Camboriú - SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioPicarras">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Piçarras – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BarraVelha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Barra Velha – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BelaVistaDoToldo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Bela Vista do Toldo – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BeneditoNovo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Benedito Novo – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Blumenau">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Blumenau – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Bombinhas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Bombinhas – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Botuvera">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Botuverá – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BracoDoTrombudo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Braço do Trombudo – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Brusque">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Brusque – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioArroioDoSilva">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Arroio do Silva – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioGaivota">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Gaivota – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BalnearioRincao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Balneário Rincão – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Biguacu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Biguaçu – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="BracoDoNorte">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Braço do Norte – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Camboriu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Camboriú – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Cacador">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Caçador – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CamposNovos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campos Novos – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Chapeco">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Chapecó – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Concordia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Concórdia – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CampoAlegre">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Campo Alegre – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Canoinhas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Canoinhas – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="ChapadaoDoLageado">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Chapadão do Lageado – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Corupa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Corupá – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Canelinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Canelinha – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CapivariDeBaixo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Capivari de Baixo – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="CocalDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Cocal do Sul – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Criciuma">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Criciúma – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DonaEmma">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Dona Emma – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DoutorPedrinho">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Doutor Pedrinho – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="DionisioCerqueira">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Dionísio Cerqueira – SC
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ermo">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Ermo – SC
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Florianopolis">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Florianópolis – SC
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Forquilhinha">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Forquilhinha – SC
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Fraiburgo">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Fraiburgo – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Garuva">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Garuva – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Gaspar">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Gaspar – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Guabiruba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Guabiruba – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Guanamirim">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Guanamirim – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="GovernadorCelsoRamos">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Gov. Celso Ramos – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="GraoPara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Grão Pará – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Gravatal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Gravatal – SC
            </a>
          </div>
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
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ibirama – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ilhota">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ilhota – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Imbuia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Imbuia – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Indaial">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Indaial – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Irineopolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Irineópolis – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itaiopolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Itaiópolis – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itajai">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Itajaí – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itapema">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Itapema – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Itapoa">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Itapoá – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Ituporanga">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Ituporanga – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Icara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Içara – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Imarui">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Imaruí – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Imbituba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Imbituba – SC
            </a>
          </div>
        </div>
        <!-- Cidades J -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              J
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <div class="col-lg px-0 mt-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Joinville">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Joinville – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="JaraguaDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Jaraguá do Sul – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="JoseBoiteux">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> José Boiteux – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="JacintoMachado">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Jacinto Machado – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Jaguaruna">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Jaguaruna – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Joacaba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Joaçaba – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Laurentino">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Laurentino – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lages">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lages – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Laguna">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Laguna – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="LauroMuller">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lauro Muller – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="LeobertoLeal">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Leoberto Leal – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Lontras">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Lontras – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="LuisAlves">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Luís Alves – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Mafra">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mafra – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MajorVieira">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Major Vieira – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Massaranduba">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Massaranduba – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MajorGercino">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Major Gercino – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Maracaja">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Maracajá – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MorroDaFumaca">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Morro da Fumaça – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MirimDoce">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Mirim Doce – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MonteCastelo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Monte Castelo – SC
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="MorroGrande">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Morro Grande – SC
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Navegantes">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Navegantes – SC
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="NovaTrento">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Nova Trento – SC
          </a>
        </div>
        <!-- Cidades O -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              O
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Orleans">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Orleans – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Papanduva">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Papanduva – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Penha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Penha – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Petrolandia">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Petrolândia – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Picarras">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Piçarras – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Pomerode">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pomerode – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PortoBelo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Porto Belo – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PousoRedondo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pouso Redondo – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PresidenteGetulio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Presidente Getúlio – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PresidenteNereu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Presidente Nereu – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Palhoca">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Palhoça – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PassoDeTorres">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Passo de Torres – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PauloLopes">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Paulo Lopes – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PedrasGrandes">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pedras Grandes – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="PescariaBrava">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Pescaria Brava – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioDoCampo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio do Campo – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioDoOeste">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio do Oeste – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioFortuna">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio Fortuna – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioNegrinho">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio Negrinho – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Rodeio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rodeio – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RanchoQueimado">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rancho Queimado – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio do Sul – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="RioDosCedros">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Rio dos Cedros – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Salete">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Salete – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaTerezinha">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Terezinha - SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoBentoDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Bento do Sul - SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoFranciscoDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Francisco do Sul - SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoaquim">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Joaquim - SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoaoDoItaperiu">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São João do Itaperiú – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Shroeder">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Shroeder – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sangao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sangão – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantaRosaDeLima">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santa Rosa de Lima – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SantoAmaroDaImperatriz">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Santo Amaro da Imperatriz – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoBonifacio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Bonifácio – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoaoBatista">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Jõao Batista – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJoaoDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Jõao do Sul – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoJose">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São José – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoLudgero">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Ludgero – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoMartinho">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Martinho – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="SaoPedroDeAlcantara">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> São Pedro de Alcântara – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sideropolis">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Siderópolis – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Sombrio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Sombrio – SC
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
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Taio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Taió – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Timbo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Timbó – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TrombudoCentral">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Trombudo Central – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Treviso">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Treviso – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TrezeDeMaio">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Treze de Maio – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tubarao">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tubarão – SC
            </a>
          </div>
          <div class="col-lg px-0 mt-lg-4">
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Tijucas">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Tijucas – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="TimbeDoSul">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Timbé do Sul – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Turvo">
              <span class="text-azul fw-700 fs-20 mr-1">#</span> Turvo – SC
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
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Urussanga">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Urussanga – SC
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Urubici">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Urubici – SC
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
          <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VidalRamos">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Vidal Ramos – SC
          </a>
          <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="VitorMeireles">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Vitor Meireles – SC
          </a>
        </div>
        <!-- Cidades W -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              W
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Witmarsum">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Witmarsum – SC
          </a>
        </div>
        <!-- Cidades X -->
        <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
          <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
            <h5 class="text-dark fw-700 mb-0">
              X
            </h5>
          </div>
          <div class="borda-top-preto-separation" />
          <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-18 fw-700 btn align-items-center" @click.prevent="Xanxere">
            <span class="text-azul fw-700 fs-20 mr-1">#</span> Xanxerê – SC
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
    title: 'Detetive particular em Santa Catarina | Balneário Camboriú | Florianópolis | Blumenau | Criciúma | Caçador | Porto Alegre | Maringá'
  },
  methods: {
    Agrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agrolandia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Agronomica () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agronomica-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Apiuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Apiuna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Araquari () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Araquari-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ascurra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ascurra-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Atalanta () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Atalanta-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Aurora () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aurora-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AguasMornas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aguas-Mornas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AlfredoWagner () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Alfredo-Wagner-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Angelina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Angelina-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Anitapolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Anitapolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AntonioCarlos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Antonio-Carlos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ararangua () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ararangua-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioBarraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Barra-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioCamboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Camboriu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioPicarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Picarras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BarraVelha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Barra-Velha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BelaVistaDoToldo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bela-Vista-do-Toldo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BeneditoNovo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Benedito-Novo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Blumenau () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Blumenau-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Bombinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bombinhas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Botuvera () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Botuvera-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BracoDoTrombudo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Trombudo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Brusque () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Brusque-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioArroioDoSilva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Arroio-do-Silva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioGaivota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Gaivota-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BalnearioRincao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Rincao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Biguacu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Biguacu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BracoDoNorte () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Norte-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Camboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Camboriu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Cacador () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cacador-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CamposNovos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campos-Novos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Chapeco () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapeco-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Concordia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Concordia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CampoAlegre () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campo-Alegre-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Canoinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canoinhas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    ChapadaoDoLageado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapadao-do-Lageado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Corupa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Corupa-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Canelinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canelinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CapivariDeBaixo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Capivari-de-Baixo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    CocalDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cocal-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Criciuma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Criciuma-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DonaEmma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dona-Emma-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DoutorPedrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Doutor-Pedrinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    DionisioCerqueira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dionisio-Cerqueira-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ermo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ermo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Florianopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Florianopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Forquilhinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Forquilhinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Fraiburgo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Fraiburgo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Garuva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Garuva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Gaspar () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gaspar-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guabiruba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guabiruba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Guanamirim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guanamirim-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    GovernadorCelsoRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Governador-Celso-Ramos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    GraoPara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Grao-Para-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Gravatal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gravatal-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ibirama-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ilhota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ilhota-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Imbuia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbuia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Indaial () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Indaial-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Irineopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Irineopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itaiopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itaiopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itajai () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itajai-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itapema () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapema-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Itapoa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapoa-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Ituporanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ituporanga-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Icara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Icara-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Imarui () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imarui-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Imbituba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbituba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Joinville () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joinville-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    JaraguaDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaragua-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    JoseBoiteux () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jose-Boiteux-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    JacintoMachado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jacinto-Machado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Jaguaruna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguaruna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Joacaba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joacaba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Laurentino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laurentino-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lages () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lages-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Laguna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laguna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LauroMuller () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lauro-Muller-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LeobertoLeal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Leoberto-Leal-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Lontras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lontras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LuisAlves () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Luis-Alves-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mafra-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MajorVieira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Vieira-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Massaranduba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Massaranduba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MajorGercino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Gercino-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Maracaja () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Maracaja-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MorroDaFumaca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-da-Fumaca-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MirimDoce () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mirim-Doce-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MonteCastelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Monte-Castelo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    MorroGrande () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-Grande-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Navegantes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Navegantes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    NovaTrento () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Nova-Trento-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Orleans () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Orleans-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Papanduva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Papanduva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Penha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Penha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Petrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Petrolandia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Picarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Picarras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Pomerode () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pomerode-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PortoBelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Porto-Belo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PousoRedondo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pouso-Redondo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PresidenteGetulio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Getulio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PresidenteNereu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Nereu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Palhoca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Palhoca-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PassoDeTorres () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Passo-de-Torres-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PauloLopes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Paulo-Lopes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PedrasGrandes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pedras-Grandes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PescariaBrava () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pescaria-Brava-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioDoCampo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Campo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioDoOeste () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Oeste-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioFortuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Fortuna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioNegrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Negrinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Rodeio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rodeio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RanchoQueimado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rancho-Queimado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    RioDosCedros () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-dos-Cedros-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Salete () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Salete-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaTerezinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Terezinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoBentoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bento-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoFranciscoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Francisco-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoaquim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joaquim-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoaoDoItaperiu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Itaperiu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Shroeder () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Shroeder-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sangao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sangao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaRosaDeLima () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Rosa-de-Lima-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantoAmaroDaImperatriz () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santo-Amaro-da-Imperatriz-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoBonifacio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bonifacio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoaoBatista () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-Batista-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJoaoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoJose () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Jose-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoLudgero () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Ludgero-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoMartinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Martinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SaoPedroDeAlcantara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Pedro-de-Alcantara-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sideropolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sideropolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Sombrio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sombrio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Taio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Taio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Timbo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TrombudoCentral () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Trombudo-Central-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Treviso () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treviso-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TrezeDeMaio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treze-de-Maio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tubarao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tubarao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Tijucas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tijucas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TimbeDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbe-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Turvo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Turvo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Urussanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urussanga-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Urubici () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urubici-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VidalRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vidal-Ramos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    VitorMeireles () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vitor-Meireles-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Witmarsum () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Witmarsum-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    Xanxere () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Xanxere-SC#sobre')
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
