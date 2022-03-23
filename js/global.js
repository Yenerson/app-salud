Vue.component('app-menu', {
    template: `
<div>
<nav class="caja-navegacion nav-horizontal sombra-1 flexi-just">
            <ul class="nav-ul">
                <li class="nav-titulo tema-pre tex-may"><a href="index.html"><i class="icon-home i-izq"></i></a></li>
            </ul>
            <ul class="nav-ul">
                <!--<li class="li-avatar">
                    <div class="bloq-linea">
                        <span class="bloq-avatar">
                            <img src="img/usuario-m.png" alt="imagen">
                        </span>
                        <a href="perfil.html">gobernación del vaupes</a>
                    </div>
                </li>-->
                <li><a href="#" class="tex-may tex-n tex-m">gobernación del vaupes</a></li>
                <li class="fondo-pre-s"><a href="#" id="botonToogle"><i class="icon-menu"></i></a></li>
            </ul>
        </nav>
        <div class="flexi-col sombra-3 menuToogle" id="menuToogle">
            <nav class="caja-navegacion nav-vertical">
                <div class="cart-avatar">
                    <div class="bloq-portada flexi-just">
                        <div class="bloq-avatar">
                            <img src="img/usuario-m.png" alt="imagen">
                        </div>
                        <a href="#" class="boton-cir"><i class="icss-derecha"></i></a>
                    </div>
                    <div class="bloq-cuerpo lista-ver">
                        <h5 class="bloq-titulo">Nombre de Usuario</h5>
                    </div>
                    <ul class="bloq-pie lista-hor sep-barr-ver">
                        <li>Nativo</li>
                        <li>12:30 am</li>
                    </ul>
                </div>
                <ul class="nav-ul li-relativo li-div">
                    <li class="nav-titulo tema-pre tex-may">YO!</li>
                    <li><a href="notificaciones.html">Notificaciones <span class="bloq-burbuja punta-izq tema-pre">7</span></a></li>
                    <li><a href="perfil.html">Mi perfil</a></li>
                    <li><a href="centros.html">Mas informacion</a></li>
                    <li><a href="directorio.html">Directorio salud</a></li>
                </ul>
            </nav>
        </div>
</div>
`,
});
Vue.component('app-emergency', {
    template: `
<div>
<div class="caja-fija-en pos-z3" style="right: 1rem; bottom: 1rem;">
    <a :href="whapp" class="boton-cir sombra-5 gra tema-pel"><i class="icon-phone"></i></a>
</div>
<div id="queso" class="caja-modal caja-fija-pant flexi-centro">
    <div class="cel-8 tabl-modal fondo-vidrio">
        <div class="cart-decor estilo-rell alin-cen sombra-3 fondo-clar">
            <div class="bloq">
                <span class="bloq-icono sombra-3">
                    <i class="icon-phone"></i>
                </span>
            </div>
            <div class="bloq-contenido">
                <h5 class="bloq-titulo">Comunicando con el centro de salud mas cercano</h5>
                <hr class="peq lin-2px">
                <p class="bloq-texto">Se ha enviado un mensaje con su estado de salud. Por favor sea paciente y espere.</p>
                <button type="" class="boton">Boton</button>
            </div>
        </div>
    </div>
    <a class="boton-cir boton-modal" href="#cerrar-modal"><i class="icss-equis"></i></a>
</div>
</div>
`,
data(){
    return {
        whapp: 'https://api.whatsapp.com/send?phone='+573136776570+'&text=Ayuda.'
    }
}
});

var app7 = new Vue({
    el: '#app',
    data: {
        notify: [
            {
                theme: 'tema-pel',
                title: 'Tomar Pastilla',
                text: 'Hora de tomar la pastilla Pastilla',
                time: 'Tiempo vencido'
            },
            {
                theme: '',
                title: 'Cita medica',
                text: 'Sacar cita medica para el dolor de gripa',
                time: 'Para el dia 12 feb'
            },
            {
                theme: '',
                title: 'Cita medica',
                text: 'Sacar cita medica para el dolor de gripa',
                time: 'Para el dia 12 feb'
            },
            {
                theme: 'tema-aci',
                title: 'Tomar Pastilla',
                text: 'Hora de tomar la pastilla Pastilla',
                time: 'Para el dia 12 feb'
            }
        ]
    }
})