(this.webpackJsonpcasetaselalamo=this.webpackJsonpcasetaselalamo||[]).push([[0],{57:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),i=c(16),r=c.n(i),l=c(5),n={portada:c.p+"static/media/img_4.aa7cb2e9.jpg",Logotipo:c.p+"static/media/logo2.c35ad3bb.svg",Logotipo1:c.p+"static/media/logosvg.5b5a3b66.png",AccesoriosIcon:c.p+"static/media/accesorios.32dfeec2.svg",CarroceriaIcon:c.p+"static/media/carroceria.7efeba84.svg",nosotros:c.p+"static/media/nosotros.296b259b.jpg",servicioCarroceria:c.p+"static/media/carroceria.d5641f49.png",servicioFibra:c.p+"static/media/fibra.eeceded5.jpg",servicioLamina:c.p+"static/media/lamina.d6c01a90.jpg",servicioAccesorios:c.p+"static/media/accesorios.b466a5f9.jpg",amortiguador:c.p+"static/media/amortiguadores.a9f5714c.png",ventana:c.p+"static/media/ventanas.8732f43f.png",cerradura:c.p+"static/media/cerradura.b466a5f9.jpg",mantenimiento:c.p+"static/media/mantenimiento.2fa2c6a5.jpg",certificate:c.p+"static/media/certificate.c26671f0.svg"},o=c(32),d=c.n(o),j=c(3),m=c(2),x=c(0),b=s.a.createContext();var u=function(e){var a=Object(t.useState)(""),c=Object(l.a)(a,2),s=c[0],i=c[1],r=Object(t.useState)(""),n=Object(l.a)(r,2),o=n[0],d=n[1],j=Object(t.useState)(),m=Object(l.a)(j,2),u=m[0],h=m[1];return Object(x.jsx)(b.Provider,{value:{titulo:s,setTitulo:i,description:o,setDescription:d,imagenTarjeta:u,setImg:h},children:e.children})},h=c(9),p=c(36);function O(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),c=a[0],s=a[1];return Object(x.jsx)("div",{children:c?Object(x.jsx)("div",{className:"absolute z-50 ",children:Object(x.jsx)("div",{className:"bg-blue-600 pt-8 xl:bg-transparent xl:pt-40 pb-8 w-screen",children:Object(x.jsx)("div",{className:"text-center w-5/6 rounded-2xl text-white bg-blue-600 border-2 border-blue-600 m-auto p-4 shadow-2xl xl:w-4/12 xl:py-6 ",children:Object(x.jsx)("b",{children:"Mensaje enviado"})})})}):function(){var e="outline-none text-black border-b-2 border-blue-600 rounded-lg w-full h-12 my-5 px-4";return Object(x.jsx)(h.d,{initialValues:{correoCliente:"",nombreCliente:"",telefonoCliente:"",mensajeCliente:""},validate:function(e){var a={};return e.nombreCliente?/^[a-zA-Z\xc0-\xff\s]{1,40}$/.test(e.nombreCliente)||(a.nombreCliente="El nombre solo puede tener letras y espacios"):a.nombreCliente="ingresa un nombre",e.telefonoCliente?/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/.test(e.telefonoCliente)||(a.telefonoCliente="Favor de ingresar solo numeros del 0 al 9"):a.telefonoCliente="ingresa un numero de telefono para poder contactarte",e.correoCliente?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e.correoCliente)||(a.correoCliente="ingresa un correo valido"):a.correoCliente="ingresa un correo",a},onSubmit:function(e){p.a.send("default_service","template_66kpzfw",e,"user_ucId8avWN9exPvasqK726").then((function(){s(!0)}),(function(e){console.log("FAILED...",e)}))},children:function(a){var c=a.errors;return Object(x.jsx)("div",{className:"relative z-40 ",children:Object(x.jsx)("div",{className:"bg-black bg-opacity-50 pt-12 xl:pt-40 pb-8 w-screen ",children:Object(x.jsxs)("div",{"data-aos":"fade-down","data-aos-duration":"800",className:"w-full rounded-2xl text-white m-auto p-4  xl:w-4/12 xl:bg-black xl:py-12 sm:w-9/12 ",children:[Object(x.jsxs)("div",{className:"text-center text-2xl",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Envianos un mensaje"})}),Object(x.jsx)("hr",{className:"w-8/12 m-auto"})]}),Object(x.jsxs)(h.c,{children:[Object(x.jsx)(h.b,{name:"correoCliente",id:"correoCliente",type:"text",placeholder:"Correo electronico",className:e}),Object(x.jsx)(h.a,{name:"correoCliente",component:function(){return Object(x.jsx)("div",{className:"text-red-500",children:c.correoCliente})}}),Object(x.jsx)(h.b,{name:"nombreCliente",id:"nombreCliente",type:"text",placeholder:"Nombre completo",className:e}),Object(x.jsx)(h.a,{name:"nombreCliente",component:function(){return Object(x.jsx)("div",{className:"text-red-500",children:c.nombreCliente})}}),Object(x.jsx)(h.b,{name:"telefonoCliente",id:"telefonoCliente",type:"text",placeholder:"Numero de telefono",className:e}),Object(x.jsx)(h.a,{name:"telefonoCliente",component:function(){return Object(x.jsx)("div",{className:"text-red-500",children:c.telefonoCliente})}}),Object(x.jsx)(h.b,{name:"mensajeCliente",id:"mensajeCliente",as:"textarea",placeholder:"Mensaje",className:"outline-none text-black border-b-2 border-blue-600 rounded-lg w-full my-5 py-2 px-4"}),Object(x.jsx)("center",{children:Object(x.jsx)("button",{type:"submit",className:"py-1 w-full rounded-xl px-8 bg-gradient-to-r from-blue-800 to-blue-600",children:"Enviar mensaje"})})]})]})})})}})}()})}var g=c(26);function f(e){window.open("https://api.whatsapp.com/send?phone=52".concat(e,"&text=Hola,%20requiero%20un%20servicio"))}var v=function(e){window.open("tel:+52".concat(e),"_blank")},N=function(){return Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"bg-black bg-opacity-50 relative text-white text-2xl h-screen pt-32 sm:pt-12 md:pt-48 xl:pt-32 xl:py-56 xl:h-auto ",children:[Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("img",{"data-aos":"zoom-in",src:n.Logotipo1,alt:"",className:"w-60 m-auto mb-8 sm:w-48 sm:mb-2 md:w-80 md:mb-8"}),Object(x.jsx)("div",{className:"font-bold px-2 md:text-3xl xl:my-8",children:"Dise\xf1o y Fabricaci\xf3n de Carrocerias , Desde Motocarros Hasta Cami\xf3n de Mudanzas"}),Object(x.jsx)(g.Link,{to:"formulario",spy:!0,smooth:!0,offset:0,duration:750,className:"",children:Object(x.jsxs)("button",{className:"px-4 bg-blue-900 text-lg py-2 rounded-lg mt-12 sm:mt-4 md:mt-12 md:text-4xl xl:text-2xl",children:[Object(x.jsx)("i",{className:"fas fa-comment-alt float-left mt-2 mr-4"}),"Contactanos"]})})]}),Object(x.jsx)("div",{className:" w-screen absolute bottom-0 text-center",children:Object(x.jsx)(g.Link,{to:"segundaSeccion",spy:!0,smooth:!0,offset:-40,duration:750,children:Object(x.jsx)("div",{className:" mb-4 w-2/12 m-auto rounded-full",children:Object(x.jsx)("i",{className:"fas fa-arrow-down animate-bounce md:text-4xl"})})})})]})})},w=function(){var e=function(e,c,t){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{"data-aos":"zoom-in",className:a,children:[Object(x.jsx)("img",{src:e,alt:"imagen_servicio",className:"rounded-t-lg bg-blue-600 object-cover h-48 w-full sm:h-60 xl:h-60"}),Object(x.jsxs)("div",{className:"p-2",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:c})}),Object(x.jsx)("h1",{children:t})]})]})})},a="text-white border bg-blue-600 shadow-xl rounded-xl xl:shadow-lg xl:hover:shadow-2xl xl:duration-300 cursor-pointer";return Object(x.jsx)("div",{className:"relative",children:Object(x.jsxs)("div",{className:" bg-white text-black p-4",children:[Object(x.jsxs)("div",{className:" p-2 rounded-xl shadow-xl text-white border bg-blue-600 xl:w-9/12 xl:px-4 xl:m-auto xl:grid xl:grid-cols-2 xl:p-0",children:[Object(x.jsx)("div",{className:"xl:px-6 pt-8",children:Object(x.jsx)("img",{src:n.certificate,className:"fas fa-wrench mb-4 w-7/12 pl-24 xl:pl-20 xl:py-20 xl:w-6/12"})}),Object(x.jsxs)("div",{className:"xl:py-16 md:text-xl",children:[Object(x.jsx)("b",{children:"Nosotros"}),Object(x.jsx)("h1",{children:"Nos especializamos en todo tipo de carrocer\xedas seca, refrigeradas, plataformas, fibra de vidrio, lamina y acondicionamiento de unidades van. Contamos con m\xe1s de 30 a\xf1os de experiencia, somos el principal comercializador e impulsamos a nuestros clientes a mejorar la eficiciencia en su trabajo, adquiere con nosotros tu servicio tenemos trabajos garantizados."})]})]}),Object(x.jsxs)("div",{id:"servicios",className:"mt-12",children:[Object(x.jsxs)("h1",{className:"text-black text-center text-2xl mb-4 md:text-3xl md:pb-8",children:[Object(x.jsx)("b",{children:"Servicios"}),Object(x.jsx)("hr",{className:"w-5/12 m-auto "})]}),Object(x.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:w-11/12 xl:m-auto md:text-xl",children:[Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/",children:e(n.servicioCarroceria,"Carrocerias","Somos especialistas en fabricaci\xf3n, instalaci\xf3n y dise\xf1o de carrocerias, de forma urgente las 24 horas para no detener sus operaciones.")}),Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/fibra",children:e(n.servicioFibra,"Casetas de fibra de vidrio","Servicio de casetas en fibra de vidrio, las m\xe1s resistentes fabricada con los mejores materiales brindando un buen funcionamiento.")}),Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/lamina",children:e(n.servicioLamina,"Casetas de lamina","Camper o caseta de lamina para tus camionetas pick up protege de la mejor forma tu unidad y sus pertenencias, contamos con diferentes medidas")}),Object(x.jsx)(j.b,{exact:!0,to:"/accesorios/",children:e(n.servicioAccesorios,"Accesorios","Venta accesorios para campers como son: Ventanas Cerraduras Amortiguadores")}),Object(x.jsxs)(j.b,{"data-aos":"zoom-in",exact:!0,to:"/carrocerias/mantenimiento",id:"carroceria",className:a,children:[Object(x.jsx)("div",{className:"rounded-t-lg bg-white object-cover h-48 w-full xl:h-60",children:Object(x.jsx)("div",{className:"text-center pt-16 xl:pt-24",children:Object(x.jsx)("i",{className:"fas fa-tools text-black text-6xl"})})}),Object(x.jsxs)("div",{className:"p-2",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Mantenimiento"})}),Object(x.jsx)("h1",{children:"Servicio de mantenimiento y reparaci\xf3n de camper, caja o carroceria."})]})]})]})]})]})})},C=function(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"relative w-full h-auto bg-blue-600 p-4",children:[Object(x.jsxs)("div",{className:"text-center text-2xl  text-white",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Redes sociales"})}),Object(x.jsx)("hr",{className:"w-5/12 m-auto"})]}),Object(x.jsxs)("div",{className:"flex justify-between text-white px-16 text-3xl mt-6 xl:text-4xl cursor-pointer xl:w-4/12 xl:m-auto xl:mt-12",children:[Object(x.jsx)("i",{onClick:function(){return window.open("https://m.youtube.com/channel/UCJuuQan9kM_8qIzm_wDMxvw?sub_confirmation=1","_blank")},className:"fab fa-youtube p-2 cursor-pointer"}),Object(x.jsx)("i",{onClick:function(){return window.open("https://www.facebook.com/carroceriasalamo","_blank")},className:"fab fa-facebook-square p-2 cursor-pointer"}),Object(x.jsx)("i",{onClick:function(){return window.open("https://www.instagram.com/carroceriasalamo/","_blank")},className:"fab fa-instagram p-2 cursor-pointer"})]}),Object(x.jsxs)("div",{id:"oficinas",className:"xl:px-8",children:[Object(x.jsxs)("div",{className:"text-center text-2xl text-white mt-12",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Nuestras oficinas"})}),Object(x.jsx)("hr",{className:"w-5/12 m-auto"})]}),Object(x.jsxs)("div",{className:"text-left text-lg text-white mt-4 md:text-xl xl:mt-12 xl:text-lg",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Oficina en tlaquepaque:"})}),Object(x.jsxs)("div",{className:"grid grid-cols-1 gap-8 xl:grid-cols-2 ",children:[Object(x.jsxs)("div",{className:"text-sm grid grid-cols-1 gap-4 md:text-lg xl:h-60 xl:gap-1",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-map-marker-alt"}),Object(x.jsx)("a",{className:"ml-4",children:"Calz. Jes\xfas Gonz\xe1lez Gallo 3097, El Alamo, 45560 San Pedro Tlaquepaque, Jal."})]}),Object(x.jsxs)("div",{onClick:function(){return v(3313685791)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-phone-alt"}),Object(x.jsx)("a",{className:"ml-4",children:"Tel\xe9fono: 3313685791"})]}),Object(x.jsxs)("div",{onClick:function(){return v(3313685790)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-phone-alt"}),Object(x.jsx)("a",{className:"ml-4",children:"Tel\xe9fono: 3313685790"})]}),Object(x.jsxs)("div",{onClick:function(){return f(3317222567)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fab fa-whatsapp"}),Object(x.jsx)("a",{className:"ml-4",children:"WhatsApp: 3317222567"})]}),Object(x.jsxs)("div",{onClick:function(){return f(3319733043)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fab fa-whatsapp"}),Object(x.jsx)("a",{className:"ml-4",children:"WhatsApp: 3319733043"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-envelope"}),Object(x.jsx)("a",{className:"ml-4",children:"Correo: casetasalamo@gmail.com"})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0100343507647!2d-103.32381178518493!3d20.628447806699494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3a194729db9%3A0x5c52b22a13826601!2sCasetas%20el%20Alamo!5e0!3m2!1ses!2smx!4v1635658411928!5m2!1ses!2smx",allowFullScreen:"",loading:"lazy",className:"w-full h-48 rounded-xl xl:w-11/12"})})]})]}),Object(x.jsxs)("div",{className:"text-left text-lg text-white mt-4 md:text-lg xl:mt-24",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Oficina en el salto:"})}),Object(x.jsxs)("div",{className:"grid grid-cols-1 gap-8 xl:grid-cols-2",children:[Object(x.jsxs)("div",{className:"text-sm grid grid-cols-1 gap-4 md:text-lg",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-map-marker-alt"}),Object(x.jsx)("a",{className:"ml-4",children:"Guadalajara - El Salto 840, Minerales, El Verde, 45693 Guadalajara, Jal."})]}),Object(x.jsxs)("div",{onClick:function(){return v(3336587525)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-phone-alt"}),Object(x.jsx)("a",{className:"ml-4",children:"Tel\xe9fono: 3336587525"})]}),Object(x.jsxs)("div",{onClick:function(){return f(3317222567)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fab fa-whatsapp"}),Object(x.jsx)("a",{className:"ml-4",children:"WhatsApp: 3317222567"})]}),Object(x.jsxs)("div",{onClick:function(){return f(3319733043)},children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fab fa-whatsapp"}),Object(x.jsx)("a",{className:"ml-4",children:"WhatsApp: 3319733043"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fas fa-envelope"}),Object(x.jsx)("a",{className:"ml-4",children:"Correo: casetasalamo@gmail.com"})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d762.9304178463585!2d-103.30317366852613!3d20.56882349823568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d4a3b62444b%3A0x373188579941dee7!2sCarrocer%C3%ADas%20el%20%C3%81lamo!5e0!3m2!1ses!2smx!4v1635658738574!5m2!1ses!2smx",allowFullScreen:"",loading:"lazy",className:"w-full h-48 rounded-xl xl:w-11/12"})})]})]})]})]})})};var y=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:n.portada,alt:"portada",className:"h-screen object-cover fixed sm:w-screen xl:w-screen "}),Object(x.jsx)(N,{}),Object(x.jsxs)("div",{id:"segundaSeccion",children:[Object(x.jsx)(w,{})," "]}),Object(x.jsx)(C,{}),Object(x.jsx)("div",{id:"formulario",children:Object(x.jsx)(O,{})})]})};c(56);var k=function(){var e=Object(t.useContext)(b),a=e.titulo,c=e.setTitulo,s=Object(t.useContext)(b),i=s.description,r=s.setDescription,o=Object(t.useContext)(b),d=o.imagenTarjeta,j=o.setImg,m=Object(t.useState)(!1),u=Object(l.a)(m,2),h=u[0],p=u[1],O=function(e,a,t){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{"data-aos":"zoom-in",onClick:function(){return j(e),p(!0),r(t),void c(a)},className:"z-10 bg-blue-600 border rounded-lg shadow-lg sm:w-full sm:h-full md:w-full md:h-full xl:w-8/12 xl:m-auto xl:cursor-pointer xl:shadow-sm xl:hover:shadow-xl",children:[Object(x.jsx)("img",{src:e,alt:"imagen",className:"rounded-t-lg object-cover h-24 w-full bg-white md:h-48 xl:h-48 "}),Object(x.jsx)("h1",{className:"m-2 text-white",children:Object(x.jsx)("b",{children:a})}),Object(x.jsx)("i",{className:"fab fa-whatsapp px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto",children:" Contactar"})]})})};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:" text-center text-2xl py-8 xl:pt-16",children:Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Accesorios para camper"})})}),h?Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"relative bg-blue-600 text-white w-9/12 m-auto p-2 rounded-xl xl:w-4/12",children:[Object(x.jsx)("div",{className:"w-auto",children:Object(x.jsx)("div",{onClick:function(){return p((function(e){return!e}))},children:Object(x.jsx)("b",{className:"cursor-pointer px-3 pb-1 rounded-full bg-red-500 ",children:"x"})})}),Object(x.jsx)("img",{src:d,alt:"ventana",className:"bg-white my-4"}),Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:a})}),Object(x.jsx)("h1",{children:i}),Object(x.jsxs)("button",{onClick:function(){return e=3317222567,void window.open("https://api.whatsapp.com/send?phone=52".concat(e,"&text=Hola,%20requiero%20un%20servicio"));var e},className:"bg-red-500 py-2 px-4 rounded-xl mt-4 w-full",children:[Object(x.jsx)("i",{id:"icons_contacto",className:"fab fa-whatsapp"})," ","Contactar"]})]})}):Object(x.jsxs)("div",{className:"grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 xl:p-8 xl:pt-28",children:[O(n.ventana,"Ventanas","Somos fabricantes de ventanas para campers, creamos todo el dise\xf1o a la medida con alto estandar de calidad"),O(n.cerradura,"Cerraduras","Equipa el camper de tu camioneta con nuestras cerraduras traseras, consigue los mejores accesorios solo con nosotros."),O(n.amortiguador,"Amortiguadores","Amortiguadores para campers, equipalo con los mejores accesorios le dar\xe1n un toque unico a tu camioneta.")]})]})};var _=function(){var e="text-left bg-blue-600 rounded-xl m-auto w-full sm:w-full sm:h-full xl:w-8/12",a="rounded-t-xl object-cover w-full h-32 md:h-48 xl:h-48";return Object(x.jsxs)("div",{className:"p-4",children:[Object(x.jsxs)("div",{className:" p-4 text-center text-2xl xl:py-8",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("b",{children:"Carrocerias"})}),Object(x.jsx)("div",{className:"text-lg mt-4",children:Object(x.jsx)("h1",{children:"Conoce nuestra amplia gama en todo tipo de cajas o carrocerias, manejamos la mejor calidad y lo mejor es que entregamos en tiempo record."})})]}),Object(x.jsxs)("div",{"data-aos":"zoom-in",className:"grid grid-cols-2 gap-4 xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2 xl:w-11/12 xl:m-auto xl:mt-20",children:[Object(x.jsxs)(j.b,{exact:!0,to:"/carrocerias/fibra",className:e,children:[Object(x.jsx)("img",{src:n.nosotros,alt:"",className:a}),Object(x.jsx)("h1",{className:"m-2 text-white",children:Object(x.jsx)("b",{children:"Casetas de fibra de vidrio"})}),Object(x.jsx)("i",{className:"fas fa-images px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto",children:" Ver fotos"})]}),Object(x.jsxs)(j.b,{exact:!0,to:"/carrocerias/lamina",className:e,children:[Object(x.jsx)("img",{src:n.servicioLamina,alt:"",className:a}),Object(x.jsx)("h1",{className:"m-2 text-white",children:Object(x.jsx)("b",{children:"Casetas de lamina"})}),Object(x.jsx)("i",{className:"fas fa-images px-2 py-1 m-2 mt-8 rounded-full bg-white text-blue-600 w-auto",children:" Ver fotos"})]}),Object(x.jsxs)(j.b,{exact:!0,to:"/carrocerias/mantenimiento",className:e,children:[Object(x.jsx)("img",{src:n.mantenimiento,alt:"",className:a}),Object(x.jsx)("h1",{className:"m-2 text-white",children:Object(x.jsx)("b",{children:"Reparacion de cajas"})}),Object(x.jsx)("i",{className:"fas fa-images px-2 py-1 m-2 rounded-full bg-white text-blue-600 w-auto sm:mt-8",children:" Ver fotos"})]})]})]})},z={img1:c.p+"static/media/galery_1.9fdd191f.jpg",img2:c.p+"static/media/galery_2.8f958285.jpg",img3:c.p+"static/media/galery_3.9f903329.jpg",img4:c.p+"static/media/galery_4.3afc5d6d.png",img5:c.p+"static/media/galery_5.8faa7cfe.png",img6:c.p+"static/media/galery_6.296b259b.jpg"};var S=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)(),r=Object(l.a)(i,2),n=r[0],o=r[1];return Object(x.jsx)("div",{className:"bg-blue-600 h-screen text-white sm:h-auto md:h-screen xl:h-auto",children:c?Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"bg-black h-screen w-screen z-40 absolute m-0 p-4 sm:h-auto md:h-screen md:pt-16 lg:h-auto xl:p-8 xl:fixed",children:[Object(x.jsx)("div",{onClick:function(){return s((function(e){return!e}))},children:Object(x.jsx)("b",{className:" px-3 pb-1 rounded-full bg-red-500 text-white ",children:"x"})}),Object(x.jsx)("img",{src:n,alt:"",className:"mt-32 xl:w-3/6 sm:mt-8 md:mt-32 lg:mt-8 xl:mt-8 xl:m-auto"})]})}):function(){var e="xl:w-full object-cover xl:h-full cursor-pointer md:h-full shadow-lg";return Object(x.jsxs)("div",{className:"",children:[Object(x.jsxs)("div",{className:"p-4 text-center ",children:[Object(x.jsx)("h1",{className:"text-2xl my-4",children:Object(x.jsx)("b",{children:"Casetas en fibra de vidrio"})}),Object(x.jsx)("h1",{children:"Contamos con casetas o camper para camionetas abiertas estas ayudaran a transportar cargas sin necesidad de cuidar las pertenencias."})]}),Object(x.jsxs)("div",{className:"p-4 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3",children:[Object(x.jsx)("img",{onClick:function(){o(z.img1),s(!0)},src:z.img1,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(z.img2),s(!0)},src:z.img2,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(z.img3),s(!0)},src:z.img3,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(z.img4),s(!0)},src:z.img4,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(z.img5),s(!0)},src:z.img5,alt:"",className:e})]})]})}()})},A={img1:c.p+"static/media/galery_1.357633a8.jpg",img2:c.p+"static/media/galery_2.156489f4.jpg",img3:c.p+"static/media/galery_3.761fe29a.jpg",img4:c.p+"static/media/galery_4.d6c01a90.jpg",img5:c.p+"static/media/galery_5.6b92d015.jpg",img6:c.p+"static/media/galery_6.aa7cb2e9.jpg"};var q=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)(),r=Object(l.a)(i,2),n=r[0],o=r[1],d=function(){return Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"bg-black h-screen w-screen z-40 absolute m-0 p-4 sm:h-auto md:h-screen md:pt-16 xl:p-8 xl:fixed",children:[Object(x.jsx)("div",{onClick:function(){return s((function(e){return!e}))},children:Object(x.jsx)("b",{className:" px-3 pb-1 rounded-full bg-red-500 text-white ",children:"x"})}),Object(x.jsx)("img",{src:n,alt:"",className:"mt-32 xl:w-3/6 sm:mt-8 xl:mt-8 xl:m-auto"})]})})},j=function(){var e=" object-cover h-full xl:w-full xl:h-full xl:cursor-pointer sm:h-full sm:w-full md:h-full md:w-full xl:hover:shadow-xl";return Object(x.jsxs)("div",{className:"",children:[Object(x.jsxs)("div",{className:"p-4 text-center ",children:[Object(x.jsx)("h1",{className:"text-2xl my-4",children:Object(x.jsx)("b",{children:"Casetas en Lamina para Pick Up"})}),Object(x.jsx)("h1",{children:"Fabricaci\xf3n, dise\xf1o y venta de casetas en lamina estas son ideales para cubrir tu camioneta pick up, nuestras construcciones son muy ligeras y hacemos una r\xe1pida instalaci\xf3n"})]}),Object(x.jsxs)("div",{className:"p-4 grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-3",children:[Object(x.jsx)("img",{onClick:function(){o(A.img1),s(!0)},src:A.img1,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(A.img2),s(!0)},src:A.img2,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(A.img3),s(!0)},src:A.img3,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(A.img4),s(!0)},src:A.img4,alt:"",className:e}),Object(x.jsx)("img",{onClick:function(){o(A.img5),s(!0)},src:A.img5,alt:"",className:e})]})]})};return Object(x.jsx)("div",{className:"bg-blue-600 h-screen text-white sm:h-auto md:h-screen xl:h-auto",children:c?Object(x.jsx)(d,{}):Object(x.jsx)(j,{})})},L={img1:c.p+"static/media/mantenimiento_1.6eb991f7.jpg",img2:c.p+"static/media/mantenimiento_2.fb18bd30.jpg",img3:c.p+"static/media/mantenimiento_3.14b185d0.jpg",img4:c.p+"static/media/mantenimiento_4.2fa2c6a5.jpg"};var E=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)(),r=Object(l.a)(i,2),n=r[0],o=r[1];return Object(x.jsx)("div",{className:"bg-blue-600 h-screen text-white sm:h-auto md:h-screen xl:h-auto",children:c?Object(x.jsx)("div",{className:"",children:Object(x.jsxs)("div",{className:"bg-black h-screen w-screen z-40 absolute m-0 p-4 sm:h-auto md:h-screen md:py-12 lg:h-auto xl:p-8 xl:fixed",children:[Object(x.jsx)("div",{onClick:function(){return s((function(e){return!e}))},children:Object(x.jsx)("b",{className:" px-3 pb-1 rounded-full bg-red-500 text-white ",children:"x"})}),Object(x.jsx)("img",{src:n,alt:"",className:"mt-32 xl:w-3/6 sm:mt-8 xl:mt-8 xl:m-auto"})]})}):Object(x.jsxs)("div",{className:"",children:[Object(x.jsxs)("div",{className:"p-4 text-center ",children:[Object(x.jsx)("h1",{className:"text-2xl my-4",children:Object(x.jsx)("b",{children:"Reparaci\xf3n de Cajas y Fibra de Vidrio"})}),Object(x.jsx)("h1",{children:"Servicio de mantenimiento y reparaci\xf3n en camper, caja o carroceria, somos el mejor taller ya que usamos piezas de gran calidad y tenemos el personal capacitado, no dudes en adquirir tu reparaci\xf3n de cajas con nosotros, tenemos precios increibles todos los d\xedas."})]}),Object(x.jsxs)("div",{className:"p-4 grid grid-cols-2 gap-2 xl:grid-cols-3",children:[Object(x.jsx)("img",{onClick:function(){o(L.img1),s(!0)},src:L.img1,alt:"",className:"cursor-pointer"}),Object(x.jsx)("img",{onClick:function(){o(L.img2),s(!0)},src:L.img2,alt:"",className:"cursor-pointer"}),Object(x.jsx)("img",{onClick:function(){o(L.img3),s(!0)},src:L.img3,alt:"",className:"cursor-pointer"}),Object(x.jsx)("img",{onClick:function(){o(L.img4),s(!0)},src:L.img4,alt:"",className:"cursor-pointer"})]})]})})},M=function(){var e=Object(t.useState)(!1),a=Object(l.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)(!1),r=Object(l.a)(i,2),o=r[0],d=r[1],m=function(){return s((function(e){return!e}))},b="cursor-pointer my-2 ",u="border-b ",h="px-8 pt-4 flex justify-between";return Object(x.jsxs)("div",{className:"z-50 fixed w-screen",children:[Object(x.jsxs)("div",{className:"bg-blue-600 px-4 py-1 text-white flex justify-between md:py-2 xl:py-1",children:[Object(x.jsx)("img",{onClick:function(){return window.location.assign("/")},src:n.Logotipo,alt:"logo",className:"w-16 cursor-pointer md:w-24 xl:w-24"}),Object(x.jsx)("i",{onClick:m,className:"fas fa-bars text-2xl md:text-4xl md:p-1 xl:hidden"}),Object(x.jsxs)("div",{className:"hidden xl:flex pr-8",children:[Object(x.jsx)(j.b,{exact:!0,to:"/",activeClassName:u,className:h,children:Object(x.jsx)("h1",{children:"Inicio"})}),Object(x.jsx)(j.b,{exact:!0,to:"/accesorios",activeClassName:u,className:h,children:Object(x.jsx)("h1",{children:"Accesorios"})}),Object(x.jsx)(j.b,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},exact:!0,to:"/carrocerias",activeClassName:u,className:h,children:Object(x.jsx)("h1",{children:"Carrocerias"})})]})]}),o?Object(x.jsxs)("div",{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},"data-aos":"fade-left","data-aos-duration":"300",className:"bg-blue-600  w-2/12 float-right text-white text-center px-8 rounded-bl-xl py-2 grid grid-row-1",children:[Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/fibra",activeClassName:u,className:b,children:Object(x.jsx)("h1",{children:"Fibra de vidrio"})}),Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/lamina",activeClassName:u,className:b,children:Object(x.jsx)("h1",{children:"Lamina"})}),Object(x.jsx)(j.b,{exact:!0,to:"/carrocerias/mantenimiento",activeClassName:u,className:b,children:Object(x.jsx)("h1",{children:"Reparacion de cajas"})})]}):null,c?Object(x.jsxs)("div",{"data-aos":"fade-left",className:"z-50  shadow-lg xl:hidden text-white float-right py-4 w-6/12 bg-blue-600 grid grid-rows gap-y-2",children:[Object(x.jsxs)(j.b,{exact:!0,to:"/",onClick:m,className:"px-4 py-2 flex justify-between",children:[Object(x.jsx)("i",{className:"fas fa-home text-lg"}),Object(x.jsx)("h1",{children:"Inicio"})]}),Object(x.jsxs)(j.b,{exact:!0,to:"/accesorios",onClick:m,className:"px-4 py-2 flex justify-between",children:[Object(x.jsx)("img",{src:n.AccesoriosIcon,alt:"accesorios",className:"w-6"}),Object(x.jsx)("h1",{children:"Accesorios"})]}),Object(x.jsxs)(j.b,{exact:!0,to:"/carrocerias",onClick:m,className:"px-4 py-2 flex justify-between",children:[Object(x.jsx)("img",{src:n.CarroceriaIcon,alt:"accesorios",className:"w-8"}),Object(x.jsx)("h1",{children:"Carrocerias"})]})]}):null]})},I=function(){return Object(x.jsx)("div",{className:"bg-gray-900 h-screen pt-32 text-white",children:Object(x.jsxs)("div",{className:"m-auto text-center w-10/12 ",children:[Object(x.jsx)("h1",{className:"text-3xl my-8",children:"Error 404"}),Object(x.jsx)("img",{src:n.Logotipo,alt:"logo",className:"w-24 m-auto"}),Object(x.jsx)("h1",{className:"text-2xl my-4",children:"Lo sentimos no encontramos esta pagina"})]})})};var F=function(){return Object(t.useEffect)((function(){d.a.init({duration:550})}),[]),Object(x.jsx)("div",{className:"overflow-y-hidden",children:Object(x.jsx)(u,{children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(M,{}),Object(x.jsxs)(m.c,{children:[Object(x.jsx)(m.a,{exact:!0,path:"/carrocerias",children:Object(x.jsxs)("div",{className:"pt-9",children:[Object(x.jsx)(_,{})," "]})}),Object(x.jsx)(m.a,{exact:!0,path:"/carrocerias/fibra",children:Object(x.jsxs)("div",{className:"pt-9",children:[Object(x.jsx)(S,{})," "]})}),Object(x.jsx)(m.a,{exact:!0,path:"/carrocerias/lamina",children:Object(x.jsxs)("div",{className:"pt-9 ",children:[Object(x.jsx)(q,{})," "]})}),Object(x.jsx)(m.a,{exact:!0,path:"/carrocerias/mantenimiento",children:Object(x.jsxs)("div",{className:"pt-9",children:[Object(x.jsx)(E,{})," "]})}),Object(x.jsx)(m.a,{exact:!0,path:"/accesorios",children:Object(x.jsxs)("div",{className:"pt-9",children:[Object(x.jsx)(k,{})," "]})}),Object(x.jsx)(m.a,{exact:!0,path:"/",children:Object(x.jsxs)("div",{className:" xl:pt-12",children:[Object(x.jsx)(y,{})," "]})}),Object(x.jsx)(m.a,{path:"*",component:I})]})]})})})};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.be7e9f95.chunk.js.map