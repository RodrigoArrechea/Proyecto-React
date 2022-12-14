import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where, addDoc, orderBy, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7nPeJTJOyoINbnLj1uN3Uw2fLb0Q3k4Q",
  authDomain: "upmovil-784fe.firebaseapp.com",
  projectId: "upmovil-784fe",
  storageBucket: "upmovil-784fe.appspot.com",
  messagingSenderId: "647933542408",
  appId: "1:647933542408:web:70f0dda02518ffb4b251bd"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);


export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(30));
  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}


export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);
  const docSnapshot = await getDoc(docRef);
  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;

  return itemData;
}


export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");
  const queryCat = query(collectionRef, where("category", "==",categoryParams ))
  const documentSnapshot = await getDocs(queryCat);
  
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}


export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);

  return docOrder.id;
}

// async function exportArrayToFirestore() {
//   const products = [
//     {
//       id: 1,
//       title: "iPhone 11",
//       brand: "Apple",
//       category: "Apple",
//       price: 228749,
//       color: "Negro",
//       camera: "12 Mpx/12 Mpx",
//       frontalCamera: "12 Mpx",
//       screen: "6.1 in",
//       ram: "4 GB",
//       internalMemory: "128 GB",
//       operatingSystem: "iOS",
//       processor: "Apple A13 Bionic",
//       batery: "3110 mAh",
//       stock: 15,
//       imgurl: "https://http2.mlstatic.com/D_NQ_NP_865864-MLA46114990464_052021-O.webp",
//       description: "Graba videos 4K y captura retratos espectaculares y paisajes incre??bles con el sistema de dos c??maras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas. Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotograf??a con el chip A13 Bionic. Haz mucho m??s sin necesidad de volver a cargar el tel??fono gracias a su bater??a de larga duraci??n. Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad m??xima de 2 metros.",
//     },
//     {
//         id: 2,
//         title: "iPhone SE",
//         brand: "Apple",
//         category: "Apple",
//         price: 203602,
//         color: "Rojo",
//         camera: "12 Mpx",
//         frontalCamera: "7 Mpx",
//         screen: "4.7 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "iOS",
//         processor: "Apple A15 Bionic",
//         batery: "1821 mAh",
//         stock: 20,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_640700-MLA52132342408_102022-O.webp",
//         description: "Chip A15 Bionic superr??pido. Una incre??ble duraci??n de bater??a y una c??mara que es una superestrella. Y adem??s, el vidrio m??s resistente en un smartphone y bot??n de inicio con la seguridad de Touch ID.",
//       },
//       {
//         id: 3,
//         title: "iPhone 12",
//         brand: "Apple",
//         category: "Apple",
//         price: 260400,
//         color: "Verde",
//         camera: "12 Mpx/12 Mpx",
//         frontalCamera: "12 Mpx",
//         screen: "6.1 in",
//         ram: "4 GB",
//         internalMemory: "64 GB",
//         operatingSystem: "iOS",
//         processor: "Apple A14 Bionic",
//         batery: "2815 mAh",
//         stock: 22,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_756651-MLA45729915914_042021-O.webp",
//         description: "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas. Un frente de Ceramic Shield, cuatro veces m??s resistente a las ca??das. Modo Noche en todas las c??maras, para que puedas tomar fotos incre??bles con poca luz. Grabaci??n, edici??n y reproducci??n de video en Dolby Vision con calidad cinematogr??fica. Y el potente chip A14 Bionic. Adem??s, es compatible con los nuevos accesorios MagSafe, que se acoplan f??cilmente a tu iPhone y permiten una carga inal??mbrica m??s r??pida. Que comience la diversi??n.",
//       },
//       {
//         id: 4,
//         title: "iPhone 13 Pro Max",
//         brand: "Apple",
//         category: "Apple",
//         price: 534643,
//         color: "Grafito",
//         camera: "12 Mpx/12 Mpx/12 Mpx",
//         frontalCamera: "12 Mpx",
//         screen: "6.7 in",
//         ram: "6 GB",
//         internalMemory: "256 GB",
//         operatingSystem: "iOS",
//         processor: "Apple A15 Bionic",
//         batery: "3.227 mAh",
//         stock: 10,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_799027-MLA47776845273_102021-O.webp",
//         description: "iPhone 13 Pro Max. El mayor avance en el sistema de c??maras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta m??s r??pida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Dise??o resistente y la mayor duraci??n de bater??a jam??s vista en un iPhone.",
//       },
//       {
//         id: 5,
//         title: "iPhone 13 mini",
//         brand: "Apple",
//         category: "Apple",
//         price: 320999,
//         color: "Azul",
//         camera: "12 Mpx/12 Mpx",
//         frontalCamera: "12 Mpx",
//         screen: "5.4 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "iOS",
//         processor: "Apple A15 Bionic",
//         batery: "2.438 mAh",
//         stock: 8,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_984249-MLA47782359300_102021-O.webp",
//         description: "iPhone 13 mini. El sistema de dos c??maras m??s avanzado en un iPhone. El superr??pido chip A15 Bionic. Un salto en duraci??n de bater??a. Un dise??o resistente. Y una pantalla Super Retina XDR m??s brillante.",
//       },
//       {
//         id: 6,
//         title: "iPhone 13",
//         brand: "Apple",
//         category: "Apple",
//         price: 357799,
//         color: "Blanco estelar",
//         camera: "12 Mpx/12 Mpx",
//         frontalCamera: "12 Mpx",
//         screen: "6.1 in",
//         ram: "4 GB",
//         internalMemory: "256 GB",
//         operatingSystem: "iOS",
//         processor: "Apple A15 Bionic",
//         batery: "3.227 mAh",
//         stock: 12,
//         discount: "10%",
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_922588-MLA47781634791_102021-O.webp",
//         description: "iPhone 13. El sistema de dos c??maras m??s avanzado en un iPhone. El superr??pido chip A15 Bionic. Un gran salto en duraci??n de bater??a. Un dise??o resistente. Y una pantalla Super Retina XDR m??s brillante.",
//       },
//       {
//         id: 7,
//         title: "Galaxy S22+",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 312999,
//         color: "Pink gold",
//         camera: "50 Mpx/12 Mpx/10 Mpx",
//         frontalCamera: "10 Mpx",
//         screen: "6.6 in",
//         ram: "8 GB",
//         internalMemory: "256 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 8 Gen 1",
//         batery: "4500 mAh",
//         stock: 18,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_611057-MLA52143111192_102022-O.webp",
//         description: "Disfruta de un smartphone de pantalla espaciosa y equilibrada gracias a la fluidez de sus finos biseles hacia un marco pulido y sim??trico. Observa, adem??s, como la carcasa monocrom??tica de la c??mara rodea un sistema de c??mara lineal para dar paso a una belleza sin igual.",
//       },
//       {
//         id: 8,
//         title: "Galaxy A32",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 75999,
//         color: "Negro",
//         camera: "64 Mpx/8 Mpx/5 Mpx/5 Mpx",
//         frontalCamera: "20 Mpx",
//         screen: "6.4 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "MediaTek Helio G80",
//         batery: "5000 mAh",
//         stock: 25,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_922219-MLA48428094384_122021-O.webp",
//         description: "Actualiz?? el modelo de tu smartphone con el nuevo Samsung A32 y aceler?? tu experiencia m??vil. La velocidad del nuevo celular de Samsung de la L??nea A va a cambiar completamente la forma de navegar y compartir contenidos. Vas a lograr desde un juego o streaming m??s fluido, hasta compartir y bajar contenidos de forma s??per r??pida.",
//       },
//       {
//         id: 9,
//         title: "Galaxy A23",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 81999,
//         color: "Celeste",
//         camera: "50 Mpx/5 Mpx/2 Mpx/2 Mpx",
//         frontalCamera: "8 Mpx",
//         screen: "6.6 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 680",
//         batery: "5000 mAh",
//         stock: 30,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_910138-MLA50911770573_072022-O.webp",
//         description: "Una pantalla incre??ble para el scroll m??s fluido. Ampli?? tu perspectiva hasta 6,6'' con la pantalla Full HD+ de Samsung Galaxy A23 128GB. Vas a descubrir la mejor forma de disfrutar cada d??a de tu contenido: n??tido, claro e impresionante. Adem??s, preaparate para sacar las mejores fotos con su c??mara principal de 50 mpx con flash led y as?? poder subir contenido de calidad a tus redes sociales.",
//       },
//       {
//         id: 10,
//         title: "Galaxy S20 FE",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 159999,
//         color: "Azul marino",
//         camera: "12 Mpx/12 Mpx/8 Mpx",
//         frontalCamera: "32 Mpx",
//         screen: "6.5 in",
//         ram: "6 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 865",
//         batery: "4500 mAh",
//         stock: 17,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_716191-MLA44281674442_122020-O.webp",
//         description: "Fotograf??a profesional al alcance de tu mano con el nuevo Samsung Galaxy S20 Fan Edition 5G; con c??mara de 12+12+8 Mp para explorar tu creatividad. Obten?? los mejores resultados gracias a su procesador Octa-Core (2.8GHz,2.4GHz,1.8GHz), su memoria interna de 128 GB expandible a trav??s de una MicroSd hasta 1TB. Disfrut?? de jugar; ver series o trabajar en una pantalla de full vision de 6.5.",
//       },
//       {
//         id: 11,
//         title: "Galaxy S21 FE",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 194999,
//         color: "Gris Oscuro",
//         camera: "12 Mpx/12 Mpx/8 Mpx",
//         frontalCamera: "32 Mpx",
//         screen: "6.4 in",
//         ram: "6 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Exynos 2100",
//         batery: "4500 mAh",
//         stock: 12,
//         discount: "15%",
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_730981-MLA48800008115_012022-O.webp",
//         description: "Galaxy S21 FE ??pico y de 6,4''. El Galaxy S21 Fan Edition 128GB tiene todo lo que te gusta en 6,4 pulgadas, un tama??o dise??ado para conectarte con amigos, explorar nuevas pasiones, realizar una transmisi??n en vivo y disfrutar durante horas de tus programas favoritos.",
//       },
//       {
//         id: 12,
//         title: "Galaxy Z Flip3",
//         brand: "Samsung",
//         category: "Samsung",
//         price: 212870,
//         color: "Verde",
//         camera: "12 Mpx/12 Mpx",
//         frontalCamera: "10 Mpx",
//         screen: "6.7 in",
//         ram: "8 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 888",
//         batery: "3300 mAh",
//         stock: 8,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_992319-MLA47887379614_102021-O.webp",
//         description: "El Samsung Galaxy Z Flip3 lleg?? con un dise??o enfocado en brindar la mejor experiencia de uso tanto plegado como desplegado. Su nuevo sistema de biseles minimizado garantiza 6,7'' de visualizaci??n v??vida, brillante y fluida.",
//       },
//       {
//         id: 13,
//         title: "Redmi Note 11",
//         brand: "Xiaomi",
//         category: "Xiaomi",
//         price: 79999,
//         color: "Gris grafito",
//         camera: "50 Mpx/8 Mpx/2 Mpx/2 Mpx",
//         frontalCamera: "13 Mpx",
//         screen: "6.43 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 680",
//         batery: "5000 mAh",
//         stock: 30,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_970305-MLA52140435624_102022-O.webp",
//         description: "El Xiaomi Redmi Note 11 te sorprender?? con su gran pantalla de 6.43 pulgadas, con una gran resoluci??n de 2400 x 1080 p??xeles, no podr??as haber imaginado ver tan bien tus contenidos. Con su poderoso Procesador Octa-Core de 2.4 incrementar?? su velocidad en todas las operaciones, juegos, etc., no importa si est??s utilizando multi tareas tu equipo responder?? a la altura de tus necesidades. El Redmi Note 11 cuenta con 4 c??maras traseras, como principal de 50MP PDAF, 8MP ultra gran angular, 2MP en su c??mara macro y una ??ltima de 2MP profundidad. Su c??mara frontal de 13MP con una ultra resoluci??n capaz de capturar peque??os detalles como puntas del pelo, pesta??as y detalles faciales. Gracias a su bater??a de 5000 mAh te dar?? un gran rendimiento de hasta dos d??as de uso y con su cargador de 33W que te permitir?? cargar el tel??fono r??pidamente.",
//       },
//       {
//         id: 14,
//         title: "Redmi Note 10",
//         brand: "Xiaomi",
//         category: "Xiaomi",
//         price: 79999,
//         color: "Azul nocturno",
//         camera: "48 Mpx/2 Mpx/2 Mpx",
//         frontalCamera: "8 Mpx",
//         screen: "6.5 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "MediaTek MT6853 Dimensity 700",
//         batery: "5000 mAh",
//         stock: 28,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_627579-MLA48579055364_122021-O.webp",
//         description: "El Xiaomi Redmi Note 10 5G es un celular de gama media con un precio accesible y con caracter??sticas de buen nivel como su conectividad 5G, la calidad de su pantalla y la potencia de su bater??a. Es un equipo que cumple y que por su valor entrega un desempe??o m??s que suficiente.",
//       },
//       {
//         id: 15,
//         title: "Redmi Note 11 Pro",
//         brand: "Xiaomi",
//         category: "Xiaomi",
//         price: 117999,
//         color: "Blanco polar",
//         camera: "108 Mpx/8 Mpx/2 Mpx",
//         frontalCamera: "16 Mpx",
//         screen: "6.67 in",
//         ram: "6 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 695",
//         batery: "5000 mAh",
//         stock: 20,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_970015-MLA52140435843_102022-O.webp",
//         description: "El Xiaomi Redmi Note 11 Pro captura fotos de la mejor calidad con su c??mara principal de 108MP, captura sorprendentes fotos con los lentes ultra gran angular y macro para brindarte tomas espectaculares en donde quiera que te encuentres. Captura selfies como nunca antes con la c??mara frontal de 16MP para que tus selfies y videollamadas te muestren con una claridad y nitidez espectacular. Disfruta su pantalla de 6.67 pulgadas (1080x2400 FHD+) AMOLED DotDisplay con 120Hz de tasa de actualizaci??n con la que podr??s visualizar de una forma c??moda y eficiente tus videos, series y pel??culas preferidas, ofreciendo la mejor fluidez en la experiencia de uso. Su potente procesador en conjunto con su memoria RAM te permitir??n trabajar con multitareas, videojuegos y tus aplicaciones preferidas de forma fluida y sin que tu equipo se ralentice f??cilmente. Su memoria interna de 128GB es perfecta para llevar contigo toda tu informaci??n importante en el dispositivo y tenerla a la mano en todo momento. Con el Redmi Note 11 Pro 5G tendr??s una bater??a de 5000 mAh, por lo que tendr??s energ??a de sobra con una sola carga completa del equipo, adem??s, con la carga r??pida de 67W, obtienes carga de 0 a 50% en solo 15 minutos.",
//       },
//       {
//         id: 16,
//         title: "Pocophone Poco X4",
//         brand: "Xiaomi",
//         category: "Xiaomi",
//         price: 126699,
//         color: "Azul laser",
//         camera: "108 Mpx/8 Mpx/2 Mpx",
//         frontalCamera: "16 Mpx",
//         screen: "6.67 in",
//         ram: "8 GB",
//         internalMemory: "256 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 695",
//         batery: "5000 mAh",
//         stock: 16,
//         discount: "15%",
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_788240-MLA52131921802_102022-O.webp",
//         description: "Lo m??s destacado de este dispositivo lo encontramos en su potente chip Mediatek, dise??ado para la gama media, pero que ya da buenos resultados: el Dimensity 8100. Aunque eso no es todo, ya que tambi??n incorpora una pantalla que, pese a su tecnolog??a, ofrece grandes caracter??sticas como una tasa de refresco de 144 Hz.",
//       },
//       {
//         id: 17,
//         title: "Pocophone Poco F4 GT",
//         brand: "Xiaomi",
//         category: "Xiaomi",
//         price: 269402,
//         color: "Negro",
//         camera: "64 Mpx/8 Mpx/2 Mpx",
//         frontalCamera: "20 Mpx",
//         screen: "6.67 in",
//         ram: "12 GB",
//         internalMemory: "256 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 8 Gen 1",
//         batery: "4700 mAh",
//         stock: 14,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_854754-MLA50405101286_062022-O.webp",
//         description: "Si te mueves en el mundo de los videojuegos y necesitas sustituir tu smartphone, el Xiaomi POCO F4 GT est?? dise??ado para que no te abandone en tus largas partidas y de lo m??ximo de s??. Para ello, est?? compuesto por las mejores caracter??sticas como un excelente procesador, una potente bater??a y una pantalla que te har?? adentrarte en el mundo de cada juego.",
//       },
//       {
//         id: 18,
//         title: "Edge 30",
//         brand: "Motorola",
//         category: "Motorola",
//         price: 119999,
//         color: "8 GB",
//         camera: "50 Mpx/50 Mpx/2 Mpx",
//         frontalCamera: "32 Mpx",
//         screen: "6.5 in",
//         ram: "8 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 778G+ 5G",
//         batery: "4020 mAh",
//         stock: 28,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_988597-MLA50693346006_072022-O.webp",
//         description: "Carg?? menos peso y realiz?? m??s tareas. El motorola edge 30, el smartphone 5G m??s delgado, se dise???? con este objetivo en mente. Con tecnolog??a de avanzada, est?? dise??ado para que sea f??cil de usar. La parte posterior est?? dise??ada con material PMMA liviano y resistente con un acabado mate cl??sico. Tiene una apariencia con patrones sutiles que cambian cuando inclin??s el tel??fono de lado a lado.",
//       },
//       {
//         id: 19,
//         title: "G52",
//         brand: "Motorola",
//         category: "Motorola",
//         price: 69999,
//         color: "Gris carb??n",
//         camera: "50 Mpx/8 Mpx/2 Mpx",
//         frontalCamera: "16 Mpx",
//         screen: "",
//         ram: "6 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 680",
//         batery: "5000 mAh",
//         stock: 24,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_698891-MLA50817265580_072022-O.webp",
//         description: "El Moto G52 se ajusta a tu ritmo de vida. Con el procesador Octa-Core Qualcomm?? Snapdragon?? 680 de 2.4 GHz y la memoria RAM de 6 GB, obten?? un desempe??o 25 % mejor que la versi??n anterior*. El resultado es m??s potencia para jugar, transmitir videos y usar las funciones avanzadas de c??mara, adem??s de un funcionamiento m??s eficiente que consume menos bater??a.",
//       },
//       {
//         id: 20,
//         title: "G82",
//         brand: "Motorola",
//         category: "Motorola",
//         price: 89999,
//         color: "Blanco",
//         camera: "50 Mpx/8 Mpx/2 Mpx",
//         frontalCamera: "16 Mpx",
//         screen: "6.6 in",
//         ram: "6 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 695 5G",
//         batery: "5000 mAh",
//         stock: 30,
//         discount: "20%",
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_869259-MLA51752031121_092022-O.webp",
//         description: "Dale vida a tus pel??culas y programas favoritos gracias a la pantalla pOLED FHD+ de 6.6 in. Experiment?? el contraste infinito que ofrece tonos oscuros m??s profundos y m??s de mil millones de colores reales. Viv?? una experiencia visual fluida y sin interrupciones con la incre??ble velocidad de actualizaci??n de 120 Hz. Disfrut?? esta pantalla ultra wide que pr??cticamente no presenta bordes.",
//       },
//       {
//         id: 21,
//         title: "G200",
//         brand: "Motorola",
//         category: "Motorola",
//         price: 124999,
//         color: "Azul glaciar",
//         camera: "108 Mpx/13 Mpx/2 Mpx",
//         frontalCamera: "16 Mpx",
//         screen: "6.8 in",
//         ram: "8 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 888+ 5G",
//         batery: "5000 mAh",
//         stock: 18,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_861432-MLA52131254230_102022-O.webp",
//         description: "Lleva tu telefono a la gran screen: Utiliza las aplicaciones, realiza videollamadas, juega y mucho m??s, todo en una pantalla de escritorio o televisi??n. Conecta el tel??fono de forma inal??mbrica a un dispositivo externo y observa todo su potencial. Potencia al m??ximo: Optimiza tus experiencias de entretenimiento, creatividad y conectividad con el procesador superpotente Qualcomm?? Snapdragon??? 888+. Disfruta de videojuegos con inteligencia artificial y obt??n una capacidad de respuesta de 20% m??s r??pida. Toma fotos y videos 35% m??s r??pido y captura m??s de mil millones de tonos de color. Aprovecha la red Wi-Fi m??vil m??s veloz de la industria. Y siente un sonido claro gracias a la antena doble Bluetooth?? y la tecnolog??a Qualcomm?? Snapdragon Sound???.",
//       },
//       {
//         id: 22,
//         title: "One Fusion",
//         brand: "Motorola",
//         category: "Motorola",
//         price: 169899,
//         color: "Azul oc??ano",
//         camera: "48 Mpx/8 Mpx/5 Mpx/2 Mpx",
//         frontalCamera: "8 Mpx",
//         screen: "6.5 in",
//         ram: "4 GB",
//         internalMemory: "128 GB",
//         operatingSystem: "Android",
//         processor: "Snapdragon 710",
//         batery: "5000 mAh",
//         stock: 21,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_939063-MLA43751372595_102020-O.webp",
//         description: "El nuevo lanzamiento de Motorola es el Moto One Fusion y lleg?? al mercado con un ??nico objetivo: destacarse. Este equipo presenta un dise??o que re??ne todas las caracter??sticas que un smartphone tiene que tener: promete una bater??a insuperable y, para todos los fan??ticos de la fotograf??a, una c??mara que captura recuerdos en alta resoluci??n.        ",
//       },
//       {
//         id: 23,
//         title: "Cable Cargador Usb Lightning iPhone",
//         brand: "Apple",
//         category: "Accesorios",
//         price: 7333,
//         color: "Blanco",
//         stock: 30,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_942098-MLA47876022378_102021-O.webp",
//         description: "Compatible con todos los modelos iPhone a partir del iPhone 5. Tiene 1 metro de largo.",
//       },
//       {
//         id: 24,
//         title: "Cargador Turbo Power 15 Motorola Tipo C",
//         brand: "Motorola",
//         category: "Accesorios",
//         price: 3200,
//         color: "Negro",
//         stock: 20,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_645659-MLA31536641645_072019-O.webp",
//         description: "Compatible con G6 G7 G8 G9 G10 G20 G30 G60s. No incluye cable.",
//       },
//       {
//         id: 25,
//         title: "Power Bank 22.5w 10000mah",
//         brand: "Mcdodo",
//         category: "Accesorios",
//         price: 9598,
//         color: "Negro",
//         stock: 15,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_985487-MLA50511790373_062022-O.webp",
//         description: "Con display digital, con salidas 2USB A de carga r??pida. De excelente terminaci??n negro texturado. Apto para tel??fonos Apple, Samsung, Huawei y Xiaomi.",
//       },
//       {
//         id: 26,
//         title: "Auriculares in-ear inal??mbricos",
//         brand: "Xiaomi",
//         category: "Accesorios",
//         price: 3830,
//         color: "Negro",
//         stock: 35,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_656991-MLA40756758814_022020-O.webp",
//         description: "Con un dise??o inspirado en la simplicidad, los Redmi AirDots tienen un estilo ??nico. Cuentan con Bluetooth 5.0 que te permite conectarte a distancias largas y mantener una conexi??n s??lida en todo momento. Su tecnolog??a TWS (True Wireless Stereo) elimina los cables y te hace disfrutar plenamente de ritmos y melod??as que fluyen libremente.",
//       },
//       {
//         id: 27,
//         title: "Soporte para auto universal",
//         brand: "Skyway",
//         category: "Accesorios",
//         price: 2199,
//         color: "Negro",
//         stock: 50,
//         discount: "15%",
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_834367-MLA50058701102_052022-O.webp",
//         description: "Con este exclusivo soporte podes poner tu celular de una manera muy facil para usarlo sin problemas. Se engancha facilmente en el espejo retrovisor. El celular queda bien agarrado y se puede rotar para una mejor vision. La manera mas comoda de usar tu celular en el auto.",
//       },
//       {
//         id: 28,
//         title: "Tarjeta de memoria",
//         brand: "SanDisk",
//         category: "Accesorios",
//         price: 11319,
//         color: "Negro",
//         stock: 30,
//         imgurl: "https://http2.mlstatic.com/D_NQ_NP_675205-MLA40168752387_122019-O.webp",
//         description: "Ahorr?? tiempo gracias a su velocidad clase 30, que posibilita la transferencia de datos de forma r??pida y efectiva.",
//       },
//   ];
//   const collectionRef = collection(DB, "products");

//   for (let item of products) {
//     item.index = item.id;
//     delete item.id;
//     let docOrder = await addDoc(collectionRef, item);
//     console.log("Documento creado, id:", docOrder.id);
//   }
// }