<?php
include_once 'consultas.php' ;
?>

<!DOCTYPE html>
<html lang="es">
    <head>
		<title>Sateclima S.L. - Alpedrete - Tel. <?php echo $telefono ?></title>
		<meta name="description" content="Sateclima. Servicio técnico oficial en Madrid.">

		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="language" content="ES">
		<meta name="copyright" content="Sateclima S.L.">
		<meta name="rating" content="General">
		<meta name="robots" content="all, index, follow">
		<meta name="distribution" content="Global">
		<meta name="cache-control" content="no-cache">
		<meta name="pragma" content="no-cache">
		<meta name="GOOGLEBOT" content="index follow">
		<meta name="revisit" content="1 days">
		<meta name="version" content="1.0">
		<meta name="author" content="Sateclima S.L.">
		<meta name="Owner" content="sateclima@sateclima.es">
		<meta name="geo.region" content="ES-MA">
		<meta name="geo.placename" content="Alpedrete">
		<meta name="geo.position" content="42.805919;-1.651125">
		<meta name="ICBM" content="42.805919, -1.651125">

		<link rel="apple-touch-icon" sizes="114x114" href="images/app-logo.png">
		<link rel="shortcut icon" href="images/ico-logo.png"> 

		<meta property="og:title" content="Sateclima S.L. - Alpedrete - Tel. 91 849 36 43">
		<meta property="og:description" content="Sateclima. Servicio técnico oficial en Madrid.">
		<meta property="og:image" content="http://sateclima.es/images/social.jpg">
		<meta property="og:url" content="http://sateclima.estudio447.com/">



		<meta property="twitter:card" content="summary">
		<meta property="twitter:title" content="Sateclima S.L. - Alpedrete - Tel. 91 849 36 43">
		<meta property="twitter:description" content="Sateclima. Servicio técnico oficial en Madrid.">
		<meta property="twitter:image" content="http://sateclima.es/images/social.jpg">
		<meta property="twitter:url" content="http://sateclima.estudio447.com/">


		<!-- FONTS -->
		<link href="css.css?family=Poppins:200,200i,300,300i,400,400i,600,600i,700,700i&display=swap" rel="stylesheet">
		<script defer="" src="releases/v5.6.1/js/all.js" integrity="sha384-R5JkiUweZpJjELPWqttAYmYM1P3SNEJRM6ecTQF05pFFtxmCO+Y1CiUhvuDzgSVZ" crossorigin="anonymous"></script>
		<link href="font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">	

		<!-- Bootstrap -->
		<link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="all">
		<link rel="stylesheet" href="css/bootstrap-reset.css" type="text/css" media="all">

		<!-- Efectos -->
		<link rel="stylesheet" href="css/effects.css">

		<!-- Slider -->
		<link href="css/flexslider.css" rel="stylesheet" type="text/css" media="all">
		<link href="css/slider.css" rel="stylesheet" type="text/css" media="all">


		<!-- Fancybox -->
		<link rel="stylesheet" href="css/fancybox.css">

		<!-- Menu -->
		<link rel="stylesheet" href="css/navik.menu.css" type="text/css" media="all">


		<!-- Scrollbar Custom CSS -->
		<link rel="stylesheet" href="ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css">

		<!-- Autocomplete -->
		<link rel="stylesheet" href="css/autocomplete.css">

		<!-- General -->
		<link rel="stylesheet" href="css/stylecss.css" type="text/css" media="all">

		<!--[if IE]>
			<link rel="stylesheet" href="/css/stylecss_ie.css" type="text/css" media="all" />
		<![endif]-->


		<link rel="stylesheet" href="css/cookies.css">

		<link rel="stylesheet" href="css/preloader.css">

				<!-- Analytics -->
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async="" src="gtag/js.js?id=UA-150283758-1"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-150283758-1');
		</script>
		<!-- Fin Analytics -->

		<!-- Jquery -->
		<script src="ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>

		<!-- Slider -->
		<script src="js/slider/jquery.flexslider.js"></script>
		<script src="js/slider/modernizr.js"></script>

		<!-- Año actual -->
		<script>
		var ano = (new Date).getFullYear();
		$(document).ready(function() {
		$("#fecha").text( ano );
		});
		</script>
    </head>
    <body class="back-home" style="background-image: url('<?php echo bdd_obtenerValor("Imagenes", "ruta", "id_imagen=4") ?>')">
		<header>
			<div class="navik-header-overlay header-bg-image overlay-center-menu">
				<div class="container">

		<!-- Navik header -->

			<!--Logo-->

<!-- Burger menu -->
						<div class="burger-menu">
							<div class="line-menu line-half first-line"></div>
							<div class="line-menu"></div>
							<div class="line-menu line-half last-line"></div>
						</div>

<!--Navigation menu-->

						<nav id="SideMenu" class="navik-menu-overlay submenu-vertical">
							<ul>
								<li class="current-menu">
									<a class="" href="es/index.htm">Inicio</a>
								</li>
								<li class="">
									<a class="" href="es/viesmann.html">Viesmann</a>
								</li>
								<li class="">
									<a class="" href="es/wolf.html">Wolf</a>
								</li>
								<li class="">
								<a class="" href="index.htm">Área cliente</a>
								<ul>
									<li class="">
										<a class="" href="main.php.html">GestNet</a>
									</li>
									<li class="">
										<a class="" href="index-1.htm">Correo Sateclima</a>
									</li>
								</ul>
								</li>
								<li class="">
									<a class="" href="es/contacto.html">Contacto</a>
								</li>
							</ul>
							<div class="menu-social-media">
								<a href="/es/" target="_blank"><img src="/images/icons/linkedin-in-dark.svg" alt="GENERAL_ALTS_ICO_LINKEDIN" title="GENERAL_TITLES_GO_LINKEDIN"/></a>
							</div>
						</nav>
	</div>
</div>

<script type="text/javascript">
(function( $ ){
	
	$(document).on("click", "#SideMenu a", function( event ){
		
		var $this = $(this).prev();
		
		if( $this.is("span") )
		{
			event.preventDefault();
			$this.click();
		}
		
	} );

})( this.jQuery );
</script>		
</header>
	<div class="navik-header">
		<div class="navik-header-container">
			<div class="logo">
				<a href="index.htm">
					<img src="<?php echo bdd_obtenerValor("Imagenes", "ruta", "id_imagen=7") ?>">
				</a>
			</div>
			<div class="navik-menu">
				<ul>
					<li><a href="#">Sateclima</a><hr></li>
					<li><a href="es/viesmann.html">Viesmann</a><hr></li>
					<li><a href="es/wolf.html">Wolf</a><hr></li>
					<li><a href="main.php.html">Área privada</a><hr></li>
					<li><a href="contacto.html">Contacto</a><hr></li>
					<li><a href="administracion.php">Administración</a><hr></li>
				</ul>
			</div>
		</div>
	</div>
<main>
    <section>
        <p>HOLAAAA</p>
    </section>
</main>
<footer id="footer">
	<div class="container-fluid info-footer">
		<div class="container">
			<div class="logo-footer effect effect-fade effect-delay-800"><img src="<?php echo bdd_obtenerValor("Imagenes", "ruta", "id_imagen=7") ?>" alt="Logotipo Sateclima"></div>
		</div>
	</div>
	<div class="container-fluid vert-offset-top-4 vert-offset-bottom-3">
		<div class="col-md-10 offset-md-1">
			<div class="row vert-offset-top-3" style="border-top: 1px solid #eaeaea;">
				<div class="col-lg-6 col-xl-4 vert-offset-top-2 effect effect-fade effect-delay-400">
					<h5>Localización</h5>
					<p>
						<?php echo $direccion ?> <br>
						<?php echo $cp_poblacion ?> 
					</p>
				</div>
				<div class="d-lg-none d-xl-block col-xl-1"></div>
				<div class="col-lg-6 col-xl-3 vert-offset-top-2 effect effect-fade effect-delay-600">
					<h5>Horario</h5>
					<p>
						<span style="text-transform: uppercase;">Lunes a Jueves</span><br>
						de 8:30 a 14:00 y de 16:00 a 18:30					</p>
					<p>
						<span style="text-transform: uppercase;">Viernes</span><br>
						de 8:30 a 15:00					</p>
				</div>
				<div class="d-lg-none d-xl-block col-xl-1"></div>
				<div class="col-lg-12 col-xl-3 vert-offset-top-2 effect effect-fade effect-delay-800">
					<h5>Contáctanos</h5>
					<p>
						<div>
							<a class="link-address-home" href="es/contacto.html">
								<div class="icon"><img src="images/icons/ico-mail.png" alt="Icono sobre"></div>
								<div class="txt-link" style="text-transform: none;">Cita y consultas</div>
							</a>
						</div>
						<div>
							<a class="link-address-home" href="tel:91 849 36 43">
								<div class="icon"><img src="images/icons/ico-phone.png" alt="Icono teléfono"></div>
								<div class="txt-link"><?php echo $telefono ?></div>
							</a>
						</div>
					
				</div>
			</div>
			<div class="row vert-offset-top-2 effect effect-fade effect-delay-900">
				<div class="col-md-6">
					<ul class="list-inline">
						<li><a href="es/aviso-legal.html">Aviso legal</a></li>
						<li><a href="es/politica-privacidad.html">Política privacidad</a></li>
						<li><a href="es/politica-cookies.html">Política cookies</a></li>
					</ul>
					<p><span id="fecha"></span> © Sateclima S.L.</p>
				</div>
				<div class="col-md-6 vert-offset-top-2 logo447">
					<a href="index-2.htm" target="_blank"><img src="images/footer/logo-estudio447.png" alt="Logo estudio447" title="Ir a estudio447"></a>
				</div>
			</div>
		</div>
	</div>
</footer>
<div id="barraaceptacion">
	<div class="innercook">
		Solicitamos su permiso para obtener datos estadísticos de su navegación en esta web, en cumplimiento del Real Decreto-ley 13/2012. Si continúa navegando consideramos que acepta el uso de cookies.		<a href="javascript:void(0);" class="ok" onclick="PonerCookie();"><b>OK</b></a> | 
		<a href="es/politica-cookies.html" class="info">Más información</a>
	</div>
</div>		<!-- Go to top -->
<a id="back-to-top" href="#" class="btn btn-lg back-to-top" role="button" title="Ir arriba" data-toggle="tooltip" data-placement="left"><span class="fas fa-angle-up"></span></a>

		
<!-- Bootstrap -->
<script src="js/bootstrap.min.js"></script>

<!-- Script general -->
<script type="text/javascript" src="js/main.js"></script>


<!-- Menu -->
<script src="js/navik.menu.js"></script>

<script type="text/javascript" src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" src="js/jquery.fancybox.js"></script>

<!-- Captcha -->
<script type="text/javascript" src="recaptcha/api.js"></script>


<!-- Efectos en pantalla -->
<script type="text/javascript" src="js/jquery.nysm.js"></script>
<script type="text/javascript" src="js/effects.js"></script>

<script type="text/javascript" src="js/jquery.reset.js"></script>

<!-- Gmaps -->
<script type="text/javascript" src="maps/api/js?key=AIzaSyB45EkI6qSrOX4t5e2b7e8bZLngl5ht6gY&callback=InitGoogleMaps"></script>


<!-- Slider home -->
<script src="js/jquery.touchSwipe.min.js"></script>
<script src="js/responsive_bootstrap_carousel.js"></script>

<!-- Accordion -->
<script type="text/javascript">
/*
Author       : Theme_ocean.
Template Name: Fury - Product Landing Page
Version      : 1.0
*/
(function($) {
	'use strict';
	return;
	jQuery(document).on('ready', function(){
	
			$('a.page-scroll').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		

	}); 	

				
})(jQuery);
</script>

<!-- Go to top -->
<script type="text/javascript">
$(document).ready(function(){
	 $(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		$('#back-to-top').tooltip('show');
});
</script> 

<!-- AnchorLink -->
<script type="text/javascript" src="js/ancla.js"></script>



<script type="text/javascript" src="js/step-carousel.js"></script>
<script type="text/javascript" src="js/cookies.js"></script>
    </body>
</html>
