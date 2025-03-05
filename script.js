/************************************************
 * 1) CARRUSEL PRINCIPAL (.carousel)
 ***********************************************/

/**
 * Estructura HTML:
 * <section class="carousel">
 *   <div class="carousel-container">
 *     <div class="carousel-slide active"> ... </div>
 *     <div class="carousel-slide"> ... </div>
 *     <div class="carousel-slide"> ... </div>
 *   </div>
 *   <button class="nav-arrow prev">&#10094;</button>
 *   <button class="nav-arrow next">&#10095;</button>
 *   <div class="carousel-indicators">
 *     <span class="dot active" data-slide="0"></span>
 *     <span class="dot" data-slide="1"></span>
 *     <span class="dot" data-slide="2"></span>
 *   </div>
 * </section>
 */
// Diccionario: lugares -> URL concreta en Google Maps (latitud/longitud o un place ID)

const dpiOffices = {
  "tegucigalpa": "https://goo.gl/maps/TuURLExacta1",
  "san pedro sula": "https://goo.gl/maps/TuURLExacta2",
  "choluteca": "https://goo.gl/maps/TuURLExacta3"
  // Agrega todas las que necesites
};

function buscarDPI() {
  let userLocation = prompt("¿En qué departamento o municipio necesitas los servicios de la DPI?");
  if (!userLocation) return;

  // Convertimos a minúsculas para comparar fácilmente
  let locationLower = userLocation.toLowerCase().trim();

  if (dpiOffices[locationLower]) {
    // 1) Si encontramos una coincidencia exacta, abrimos la URL correspondiente
    window.open(dpiOffices[locationLower], '_blank');
  } else {
    // 2) Si no existe en la lista, hacemos una búsqueda genérica
    let query = `dpi ${userLocation} Honduras`;
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
  }
}
// Tomamos los elementos por su ID
const btnAccesibilidad = document.getElementById('btnAccesibilidad');
const btnLlamada911 = document.getElementById('btnLlamada911');

// Al hacer clic en “ACCESIBILIDAD”, alternamos modo oscuro/claro
btnAccesibilidad.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Al hacer clic en “📞 911”, abrimos la app de llamadas (en móviles)
btnLlamada911.addEventListener('click', () => {
  // Sólo funciona en móviles o dispositivos que soporten el protocolo tel:
  window.location.href = "tel:911";
});

//aqui
// 1. Diccionario de departamentos y municipios con sus URL de Google Maps
//    SUGERENCIA: Respeta mayúsculas/minúsculas, o conviértelo todo a minúsculas para normalizar.
const dpiLocations = {
  "Atlantida": [
    {
      name: "La Ceiba",
      url: "https://www.google.com/maps/place/Policia+Nacional+%E2%80%A2+La+Ceiba/@15.7754819,-86.8429321,13z/data=!4m10!1m2!2m1!1spolicia+nacional+l%C3%B1a+ceiba!3m6!1s0x8f69a9c207cf179f:0xd497fd84cd9131d9!8m2!3d15.7754819!4d-86.8017334!15sChlwb2xpY2lhIG5hY2lvbmFsIGxhIGNlaWJhkgEOcG9saWNlX3N0YXRpb27gAQA!16s%2Fg%2F126178lnn?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Tela",
      url: "https://www.google.com/maps/place/Policia+Nacional+Tela+Atlantida/@15.7829331,-87.4579874,15z/data=!4m6!3m5!1s0x8f687deee43cf4ad:0x206017b970ae1a99!8m2!3d15.7667875!4d-87.4671371!16s%2Fg%2F11cr_6d3kx?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
   
  ],

  "Colon": [
    {
      name: "Tocoa",
      url: "https://www.google.com/maps/place/Policia+Nacional/@15.6536833,-86.0012495,16z/data=!4m6!3m5!1s0x8f6bcbe2254373b7:0x38c9ae3c3b6e5258!8m2!3d15.6540861!4d-85.9973963!16s%2Fg%2F11c1tt7t0w?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Trujilo",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+Trujillo/@15.8118757,-86.1017824,12z/data=!4m6!3m5!1s0x8f6a37fc57e62a7b:0x8aad3bd571c55fd5!8m2!3d15.9203448!4d-85.9536868!16s%2Fg%2F11m84mwrsx?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "Comayagua": [
    {
      name: "Comayagua",
      url: "https://www.google.com/maps/place/Policia+Nacional+de+Honduras/@14.460569,-88.8846389,9z/data=!4m6!3m5!1s0x8f65857d86c67873:0xce7306716aa371fd!8m2!3d14.460569!4d-87.6651565!16s%2Fg%2F11gdw4mb5l?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Siguatepeque",
      url: "https://www.google.com/maps/place/Jefatura+Polic%C3%ADa+Siguatepeque/@14.5934141,-87.8502785,16z/data=!4m6!3m5!1s0x8f659540f9465501:0x5c226d57bae3e5de!8m2!3d14.5934141!4d-87.8407513!16s%2Fg%2F11kx243lwb?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "Copan": [
    {
      name: "Santa Rosa de Copán",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+de+Honduras/@14.7799885,-88.7799299,17z/data=!4m6!3m5!1s0x8f6409c4c3c08b2d:0x30195eb97108f1be!8m2!3d14.7799555!4d-88.7772675!16s%2Fg%2F11c5t00sgh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Copán Ruinas",
      url: "https://www.google.com/maps/place/Policia+Nacional/@14.8361337,-89.18018,13z/data=!4m6!3m5!1s0x8f63c30ae52b7bc5:0x5ce616a17f36ab75!8m2!3d14.837533!4d-89.1591724!16s%2Fg%2F11tdqdsnqp?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Entrada Copán",
      url: "https://www.google.com/maps/place/Policia+Nacional/@15.0650493,-88.750483,17z/data=!4m6!3m5!1s0x8f66aa574213e091:0x7fa9f2dd93756064!8m2!3d15.0650493!4d-88.7457194!16s%2Fg%2F11c60mc0db?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  
  "Cortés": [
    {
      name: "Choloma",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+Choloma/@15.6115209,-87.950669,17z/data=!4m6!3m5!1s0x8f664fd4da377c05:0x94d753a2bd1de696!8m2!3d15.6114033!4d-87.9506974!16s%2Fg%2F11nf_rpxll?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "San Pedro Sula",
      url: "https://www.google.com/maps/place/Direcci%C3%B3n+Policial+De+Investigaciones+-+DPI/@15.4771225,-87.9901568,13z/data=!4m6!3m5!1s0x8f66439ee06c8049:0x7066cd325fdfad2b!8m2!3d15.4708826!4d-87.9690645!16s%2Fg%2F11fzz84kmn?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Puerto Cortés",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+N.5+Puerto+Cort%C3%A9s+antecedentes+policiales/@15.8431615,-87.9582786,15z/data=!4m6!3m5!1s0x8f67b3544e938f29:0xfa7a474c0982b222!8m2!3d15.8431615!4d-87.9392242!16s%2Fg%2F11fmbx2_sc?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Villanueva",
      url: "https://www.google.com/maps/place/UMEP+%2312+Policia+Nacional+%E2%80%A2+Villanueva/@15.317624,-89.2132075,9z/data=!4m6!3m5!1s0x8f6668b84f55f81f:0x38c87c8788181c20!8m2!3d15.317624!4d-87.9937251!16s%2Fg%2F11c1pr922y?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Peña Blanca",
      url: "https://www.google.com/maps/place/Posta+Policial+Pe%C3%B1a+Blanca/@14.9680923,-88.031784,16z/data=!4m6!3m5!1s0x8f65d7722a635617:0x644d04686ae9e3ff!8m2!3d14.9680923!4d-88.0266342!16s%2Fg%2F11c70bvxvf?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    } 
  ],
  "Cholute": [
    {
      name: "Choluteca",
      url: "https://www.google.com/maps/place/Direcci%C3%B3n+Policial+De+Investigaciones+(DPI)+Choluteca/@13.3145345,-87.1809214,16z/data=!4m6!3m5!1s0x8f703dae02b700b7:0xca8ab5b110a412f7!8m2!3d13.3098016!4d-87.1796022!16s%2Fg%2F11t53j34_s?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "San Marcos de Colon",
      url: "https://www.google.com/maps/place/Policia+Nacional/@13.4323391,-86.814808,17z/data=!4m6!3m5!1s0x8f71d14cd020679d:0x156e98d5b2db70b7!8m2!3d13.4304533!4d-86.8088578!16s%2Fg%2F11c51mz7c3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "El Paraíso": [
    {
      name: "Trojes",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional/@14.0824758,-85.9978209,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6dc950de65a00d:0xf9ad2faa3d4a2ac3!8m2!3d14.0824758!4d-85.9978209!16s%2Fg%2F11j9kndsxl?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Danlí",
      url: "https://www.google.com/maps/place/Policia+Nacional+Danl%C3%AD/@14.0247914,-86.56828,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6e69cdceb64051:0x2c5b8c5cc10ed550!8m2!3d14.0247914!4d-86.56828!16s%2Fg%2F11b7lhrmj8?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "El Paraiso",
      url: "https://www.google.com/maps/place/Barrio+jasmin/@13.8593652,-86.5554407,18z/data=!4m6!3m5!1s0x8f6e15004724e27d:0x1e7fcc815b689319!8m2!3d13.859379!4d-86.553929!16s%2Fg%2F11y78gy0nj?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Yuscarán",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional,+Yuscar%C3%A1n,+El+Para%C3%ADso/@13.9434837,-86.851933,19z/data=!3m1!4b1!4m6!3m5!1s0x8f6e4bb27e27ae79:0x6a38101caf4777ca!8m2!3d13.9434837!4d-86.851933!16s%2Fg%2F11b6bqs9wr?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  "Francisco Morazan": [
    {
      name: "Tegucigalpa",
      url: "https://www.google.com/maps/search/Tegucigalpa+dpi/@14.0773441,-87.2068558,14z?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Sabana Grande",
      url: "https://www.google.com/maps/place/Posta+Policial+Sabanagrande/@13.8077335,-87.2565189,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6febcfd09a9dbb:0xd1b78ee324fffa1a!8m2!3d13.8077335!4d-87.2565189!16s%2Fg%2F11tmtk5r1n?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Talanga",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+de+Honduras/@14.4017098,-87.0807105,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6f0f7363993a2d:0x9bcf1dc2d69fba71!8m2!3d14.4017098!4d-87.0807105!16s%2Fg%2F1pp2wwcq7?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Guaimaca",
      url: "https://www.google.com/maps/place/Jefatura+Municipal/@14.5435946,-86.832475,17z/data=!4m6!3m5!1s0x8f6ee3b6f5dbcd75:0x211953d604230a86!8m2!3d14.543996!4d-86.830771!16s%2Fg%2F11fkyy22r8?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
 "Gracias a Dios": [
    {
      name: "Puerto lempira ",
      url: "https://www.google.com/maps/place/Estaci%C3%B3n+policial/@15.2606217,-83.7782823,15z/data=!4m6!3m5!1s0x8f14176de3d94d1d:0x45556ceb264c35d6!8m2!3d15.2609982!4d-83.778569!16s%2Fg%2F1hc6sl2cb?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
   
  ],
  "Intibuca": [
    {
      name: "La Esperanza",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional/@14.3087622,-88.1776101,17z/data=!3m1!4b1!4m6!3m5!1s0x8f645530a8da85d9:0x2e33024852d20385!8m2!3d14.3087622!4d-88.1776101!16s%2Fg%2F1hf463kdq?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "Islas de la Bahia": [
    {
      name: "Roatan",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+UDEP-11+Edificio+Antiguo/@16.3321321,-86.5599814,13z/data=!4m6!3m5!1s0x8f69e7d9222785fd:0x4622e04bd305293c!8m2!3d16.3284884!4d-86.5385157!16s%2Fg%2F11s3yfxh25?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "La Paz": [
    {
      name: "Marcala",
      url: "https://www.google.com/maps/place/Policia+Nacional+Marcala+La+Paz/@14.1562309,-88.037697,17z/data=!4m6!3m5!1s0x8f6505b960e4f9ed:0xf3194f2c70bc3900!8m2!3d14.1562309!4d-88.037697!16s%2Fg%2F11f4002_vm?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "La Paz",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+%E2%80%A2+La+Paz/@15.1795897,-87.7673409,9z/data=!4m6!3m5!1s0x8f658362e3982431:0x424620450ab26f1f!8m2!3d14.3242835!4d-87.6815425!16s%2Fg%2F11j_wszgt5?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "Lempira": [
    {
      name: "Gracias Lempira",
      url: "https://www.google.com/maps/place/UNIDAD+DEPARTAMENTAL+DE+LA+POLIC%C3%8DA+NACIONAL+DE+HONDURAS+No.+13/@14.5875592,-88.8879498,11z/data=!4m6!3m5!1s0x8f646d50fb71eef7:0xfff035aaac0adbab!8m2!3d14.5875592!4d-88.5830792!16s%2Fg%2F11j1svkdqt?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Lepaera",
      url: "https://www.google.com/maps/place/Lepaera+lempira/@14.7810094,-88.5896856,17z/data=!4m6!3m5!1s0x8f6411001564641b:0xb6ae71f39a39fe0a!8m2!3d14.7810088!4d-88.5896857!16s%2Fg%2F11w1lsd0js?coh=219816&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
    },
  ],
  "Ocotepeque": [
    {
      name: "Ocotepeque",
      url: "https://www.google.com/maps/place/Policia+Nacional/@14.4347806,-89.2678924,12z/data=!4m6!3m5!1s0x8f63a48de61a622b:0x28ae6f1802404992!8m2!3d14.4347806!4d-89.1854949!16s%2Fg%2F11g879p8qr?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
  ],
  "Olancho": [
    {
      name: "Juticalpa",
      url: "https://www.google.com/maps/place/Policia+Nacional,+Transito+y+DPI/@14.6687193,-86.2591821,14z/data=!4m6!3m5!1s0x8f6c1f3a3b4ee42b:0xc61871d36ee006ac!8m2!3d14.668718!4d-86.2210833!16s%2Fg%2F11f663cmp7?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Catacamas ",
      url: "https://www.google.com/maps/place/Policia+Nacional+%E2%80%A2+Catacamas/@14.8463755,-85.8881307,17z/data=!3m1!4b1!4m6!3m5!1s0x8f6c7257ca3a4ed9:0xf4012322567a23c3!8m2!3d14.8463755!4d-85.8881307!16s%2Fg%2F1hc7dw5sz?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Campamento",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+Campamento/@14.5533207,-86.6675756,17z/data=!4m6!3m5!1s0x8f6ee99df5b2daab:0xff27dc7c9339d126!8m2!3d14.5533342!4d-86.6675192!16s%2Fg%2F11px9nf81j?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "La Unión",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+La+Uni%C3%B3n/@15.0194521,-86.7089382,17z/data=!4m6!3m5!1s0x8f6933c19136582d:0x10170a0c72d93a!8m2!3d15.0194615!4d-86.7087992!16s%2Fg%2F11r9z8ch0d?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  "Santa Barbara": [
    {
      name: "Santa Bárbara ",
      url: "https://www.google.com/maps/place/UDEP+No.16+%E2%80%A2+Santa+B%C3%A1rbara+-+Polic%C3%ADa+Nacional/@14.9067852,-88.2523594,11z/data=!4m6!3m5!1s0x8f642fcbe961debd:0xf6bccc7dd95acf15!8m2!3d14.9067852!4d-88.2523594!16s%2Fg%2F11h38fqvm1?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Las Vegas",
      url: "https://www.google.com/maps/place/Posta+Policial+Las+Vegas/@14.8740735,-88.0779119,15z/data=!4m6!3m5!1s0x8f65d1980620d597:0xdda1559d449746d2!8m2!3d14.8733313!4d-88.0708316!16s%2Fg%2F11g73r1rfh?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Quimistan",
      url: "https://www.google.com/maps/place/Jefatura+de+Estacion+Policial+Quimistan/@15.3485251,-88.4026364,19z/data=!4m6!3m5!1s0x8f669344ea062eb1:0x960fdeaea9dfd815!8m2!3d15.3485251!4d-88.4014455!16s%2Fg%2F11qmbdld25?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  
  "Valle": [
    {
      name: "San Lorenzo",
      url: "https://www.google.com/maps/place/Policia+Nacional+de+San+Lorenzo/@13.4258659,-87.455298,15z/data=!4m6!3m5!1s0x8f7004121aa12973:0x79a5e8faf6e0a1fa!8m2!3d13.4259488!4d-87.444925!16s%2Fg%2F1hc3yb4nn?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Amapala",
      url: "https://www.google.com/maps/place/Amapala,+Valle/@13.2913907,-87.6541722,17z/data=!3m1!4b1!4m10!1m2!2m1!1samapala+policia+!3m6!1s0x8f7aa45cf25f9de5:0xc11336bfa34a9395!8m2!3d13.2916538!4d-87.6519473!15sCg9hbWFwYWxhIHBvbGljaWGSAQhsb2NhbGl0eeABAA!16zL20vMDc1Y2ps?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Nacaome",
      url: "https://www.google.com/maps/place/Jefatura+Policia+de+nacaome/@13.535868,-87.5075921,15z/data=!4m6!3m5!1s0x8f6ffe266eb0c213:0xaa937cfe17eb0ce!8m2!3d13.5359476!4d-87.4885082!16s%2Fg%2F1ptxbxz6t?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  "Yoro": [
    {
      name: "Olanchito",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+Preventiva/@15.4825299,-86.5674779,15z/data=!4m6!3m5!1s0x8f696ca39d9e2b29:0x5686ba823c1a1b50!8m2!3d15.4811123!4d-86.6085375!16s%2Fg%2F1pp2x6jhv?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Yoro ",
      url: "https://www.google.com/maps/place/UDEP+No.18+%E2%80%A2+Yoro+-+Polic%C3%ADa+Nacional/@15.1365143,-87.1255152,10z/data=!4m6!3m5!1s0x8f68cfbe7e34869d:0x34dff051e6eeaf3c!8m2!3d15.1365201!4d-87.1254273!16s%2Fg%2F11k_mns5wx?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "El Negrito",
      url: "https://www.google.com/maps/place/Polic%C3%ADa+Nacional+Preventiva/@15.3143284,-87.7009188,17z/data=!4m6!3m5!1s0x8f66172e1f43ef59:0xc8ec0b0af1107bb!8m2!3d15.3142442!4d-87.6986468!16s%2Fg%2F11jy109nwr?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      name: "Progreso",
      url: "https://www.google.com/maps/place/UMEP+No.11+%E2%80%A2+El+Progreso+-+Unidad+Metropolitana+de+Prevenci%C3%B3n+-+Polic%C3%ADa+Nacional/@15.3871546,-87.8127338,15z/data=!4m6!3m5!1s0x8f6615000a91b4d5:0xcb5ec75aa7bc65e1!8m2!3d15.3946392!4d-87.8083718!16s%2Fg%2F11vxykmszg?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
};

// Referencias a elementos del DOM
const btnSeleccionarDPI = document.getElementById('btnSeleccionarDPI');
const modalOverlay = document.getElementById('modalOverlay');
const selectDepartamento = document.getElementById('selectDepartamento');
const selectMunicipio = document.getElementById('selectMunicipio');
const btnVerMapa = document.getElementById('btnVerMapa');
const btnCerrarModal = document.getElementById('btnCerrarModal');

// 2. Mostrar el modal cuando se hace clic en "📍 DPI MÁS CERCANO"
btnSeleccionarDPI.addEventListener('click', () => {
  // Llenar el select de departamentos si no está lleno
  cargarDepartamentos();
  // Mostrar el modal
  modalOverlay.classList.add('show');
});

// 3. Función para cargar departamentos en el <select>
function cargarDepartamentos() {
  // Limpia el <selectDepartamento> (excepto la opción default)
  selectDepartamento.innerHTML = '<option value="">-- Selecciona --</option>';
  
  // Recorre las claves del objeto (nombres de departamentos)
  Object.keys(dpiLocations).forEach(depto => {
    const option = document.createElement('option');
    option.value = depto;
    option.textContent = depto; 
    selectDepartamento.appendChild(option);
  });

  // Deshabilita el select de municipio hasta que se seleccione un departamento
  selectMunicipio.innerHTML = '<option value="">-- Primero elige un departamento --</option>';
  selectMunicipio.disabled = true;
}

// 4. Cuando cambie el departamento, cargamos los municipios correspondientes
selectDepartamento.addEventListener('change', () => {
  const deptoSeleccionado = selectDepartamento.value;

  // Si no se ha elegido nada, vaciamos y deshabilitamos municipios
  if (!deptoSeleccionado) {
    selectMunicipio.innerHTML = '<option value="">-- Primero elige un departamento --</option>';
    selectMunicipio.disabled = true;
    return;
  }

  // Tenemos un departamento válido
  const municipios = dpiLocations[deptoSeleccionado]; // array de { name, url }

  // Llenamos el select de municipio
  selectMunicipio.innerHTML = '<option value="">-- Selecciona un municipio --</option>';
  municipios.forEach(mun => {
    const option = document.createElement('option');
    option.value = mun.url; // guardamos la URL
    option.textContent = mun.name;
    selectMunicipio.appendChild(option);
  });

  // Habilitamos el select de municipio
  selectMunicipio.disabled = false;
});

// 5. Botón "Ver en Google Maps"
btnVerMapa.addEventListener('click', () => {
  // Obtenemos la URL seleccionada
  const urlMapa = selectMunicipio.value;

  // Validamos que haya departamento y municipio seleccionados
  if (!selectDepartamento.value) {
    alert("Por favor, selecciona un departamento");
    return;
  }
  if (!urlMapa) {
    alert("Por favor, selecciona un municipio/localidad");
    return;
  }

  // Abrimos en una nueva pestaña
  window.open(urlMapa, '_blank');
});

// 6. Botón "Cerrar" modal
btnCerrarModal.addEventListener('click', () => {
  modalOverlay.classList.remove('show');
});

// 7. Opcional: Cerrar el modal si el usuario hace clic fuera del contenido
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) { 
    modalOverlay.classList.remove('show');
  }
});

//aqui

// Obtenemos todos los slides
const slides = document.querySelectorAll('.carousel-slide');
// Botones de navegación (prev/next)
const prevBtn = document.querySelector('.nav-arrow.prev');
const nextBtn = document.querySelector('.nav-arrow.next');
// Dots (indicadores)
const mainDots = document.querySelectorAll('.carousel-indicators .dot');

let currentSlide = 0;           // Índice de slide actual
let autoRotateInterval = null;  // Almacenará el setInterval de auto-rotación
const autoRotateDelay = 5000;   // Tiempo en milisegundos (5s) entre cada rotación

// Función para mostrar un slide particular
function showSlide(index) {
  // Ajustar índice si se sale de rango
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;

  // Ocultar todos los slides y desactivar dots
  slides.forEach((slide) => slide.classList.remove('active'));
  mainDots.forEach((dot) => dot.classList.remove('active'));

  // Activar el slide y dot correspondiente
  slides[currentSlide].classList.add('active');
  mainDots[currentSlide].classList.add('active');
}

// Manejadores de evento para las flechas
prevBtn.addEventListener('click', () => {
  showSlide(currentSlide - 1);
  // Reiniciar la auto-rotación para que no se solape
  restartAutoRotate();
});
nextBtn.addEventListener('click', () => {
  showSlide(currentSlide + 1);
  // Reiniciar la auto-rotación
  restartAutoRotate();
});

// Manejo de evento para dots (indicadores)
mainDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    // Reiniciar la auto-rotación
    restartAutoRotate();
  });
});

// Inicializamos mostrando el slide 0
showSlide(currentSlide);

/**
 * Auto-rotación:
 * Cada cierto tiempo (autoRotateDelay),
 * mostramos el siguiente slide.
 */
function startAutoRotate() {
  autoRotateInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, autoRotateDelay);
}

// Función para reiniciar la auto-rotación (si el usuario navega manualmente)
function restartAutoRotate() {
  if (autoRotateInterval) {
    clearInterval(autoRotateInterval);
  }
  startAutoRotate();
}

// Iniciar la auto-rotación al cargar
startAutoRotate();

/************************************************
 * 2) MINI “Carrusel” de Personas extraviadas
 ***********************************************/

/**
 * Tal como lo quieres, se muestran
 * las tres fotos a la vez, sin rotación,
 * por eso no ocultamos nada en JS.
 */

// Obtenemos el contenedor e imágenes
const extraviadasContainer = document.querySelector('.slider-extraviadas');
// Si deseas algo especial, podrías manejar
// un 'overflow-x: auto;' con CSS si no caben.

/************************************************
 * 3) PESTAÑAS (TABS) .tabs-container
 ***********************************************/

/**
 * HTML de ejemplo:
 * <ul class="tabs-header">
 *   <li class="tab-btn active" data-tab="campanias">Campañas</li>
 *   <li class="tab-btn" data-tab="podcast">Podcast</li>
 * </ul>
 * <div class="tabs-content">
 *   <div class="tab-panel active" id="campanias">...</div>
 *   <div class="tab-panel" id="podcast">...</div>
 * </div>
 */

// Botones de pestaña y paneles
const tabButtons = document.querySelectorAll('.tabs-header .tab-btn');
const tabPanels = document.querySelectorAll('.tabs-content .tab-panel');

// Función para mostrar un panel basado en su índice
function showTab(index) {
  // Desactivar todas las pestañas y paneles
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabPanels.forEach(panel => panel.classList.remove('active'));

  // Activar la pestaña y panel correspondientes
  tabButtons[index].classList.add('active');
  tabPanels[index].classList.add('active');
}

// Asignar evento a cada pestaña
tabButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    showTab(i);
  });
});

// Iniciar mostrando la pestaña que ya está en HTML con .active
// (o si quieres forzarlo en JS: showTab(0));

/************************************************
 * 4) MENÚ HAMBURGUESA (toggleMenu)
 ***********************************************/

/**
 * Estructura HTML:
 * <div class="menu-container">
 *   <div class="menu-button" onclick="toggleMenu()">☰ MÁS</div>
 *   <nav class="menu" id="menu">
 *     <ul> ... </ul>
 *   </nav>
 * </div>
 */

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

/* Cerrar menú si se hace click fuera de .menu-container */
document.addEventListener('click', (event) => {
  const menu = document.getElementById('menu');
  const menuContainer = document.querySelector('.menu-container');
  
  // Solo cierra si el menú está activo
  if (menu.classList.contains('active')) {
    // Si el click no está dentro de menuContainer => cierra
    if (!menuContainer.contains(event.target)) {
      menu.classList.remove('active');
    }
  }
});
/************************************************
 *  CERRAR BARRA FLOTANTE AL DAR CLIC A LA 'X'
 ***********************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Obtenemos el botón 'X' dentro de la barra flotante
  const closeBtn = document.querySelector('.floating-social-bar .close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar un posible enlace
      const socialBar = document.querySelector('.floating-social-bar');
      if (socialBar) {
        socialBar.style.display = 'none'; // Oculta la barra flotante
      }
    });
  }
});
