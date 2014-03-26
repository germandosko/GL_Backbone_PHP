<html>
<head>
	<title>Grafica Leon Online</title>
	<script type="text/javascript" src="resources/js/libs/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="resources/js/libs/underscore-min.js"></script>
	<script type="text/javascript" src="resources/js/libs/backbone-min.js"></script>
	<script type="text/javascript" src="resources/js/libs/bootstrap.min.js"></script>
	<script type="text/javascript" src="resources/js/libs/handlebars.js"></script>
	<!--
		<script type="text/javascript" src="js/lib/handlebars.runtime.js"></script>
	-->
	<?php
		require "Views/home_head.tmpl";
		require "Views/home.tmpl";
		require "Views/login.tmpl";
		require "Views/contact.tmpl";
		require "Views/admin.tmpl";
		require "Views/customer.tmpl";
	?>
	<!--
	<script type="text/template" src="templates/contact.tmpl"></script>
	-->
	<script type="text/javascript" src="resources/js/views/home.js"></script>	
	<script type="text/javascript" src="resources/js/views/contact.js"></script>
	<script type="text/javascript" src="resources/js/views/login.js"></script>
	<script type="text/javascript" src="resources/js/views/admin.js"></script>
	<script type="text/javascript" src="resources/js/views/customer.js"></script>
	<script type="text/javascript" src="resources/js/models/user.js"></script>
	<script type="text/javascript" src="resources/js/models/customer.js"></script>
	<script type="text/javascript" src="resources/js/app.js"></script>

	<link rel="stylesheet" type="text/css" href="resources/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="resources/css/style.css" />
</head>
<body>
	<div id="header">
		<a id="contacto" href="#contact">Contacto</a>
		<div id="content_block">
			<div id="block_logo"></div>
			<div id="block_menu">
				<div class="clearfix"></div>
				<nav>
					<ul id="menu">
						<li><a style="border-top-left-radius:25px" href="#">Tarjetas</a>
							<ul>
								<li><a href="#/contact">Personales</a></li>
								<li><a href="showGallery.php?type=15anios&name=TARJETAS&nbsp;15&nbsp;A&Ntilde;OS">15 A&ntilde;os</a></li>
								<li><a href="showGallery.php?type=bautismo&name=TARJETAS&nbsp;BAUTISMO">Bautismo</a></li>
								<li><a href="showGallery.php?type=casamiento&name=TARJETAS&nbsp;CASAMIENTO">Casamiento</a></li>
								<li><a href="showGallery.php?type=comunion&name=TARJETAS&nbsp;COMUNION">Comunion</a></li>
							</ul>
						</li>
						<li><a href="#">Folletos</a>
							<ul>
								<li><a href="showGallery_folletonegro.php?type=tintanegra&name=FOLLETOS&nbsp;TINTA&nbsp;NEGRA">Tinta Negra</a></li>
								<li><a href="showGallery_folleto1color.php?type=1color&name=FOLLETOS&nbsp;1&nbsp;COLOR">1 Color</a></li>
								<li><a href="showGallery_fullcolor.php?type=fullcolor&name=FOLLETOS&nbsp;FULL&nbsp;COLOR">Full Color</a></li>	
							</ul>
						</li>
						<li><a href="#">Talonarios</a>
							<ul>
								<li><a href="#">Facturas</a></li>
								<li><a href="#">Presupuestos</a></li>
								<li><a href="#">Anotadores</a></li>
								<li><a href="#">Recibos</a></li>
							</ul>
						</li>
						<li><a href="#">Otros</a>
							<ul>
								<li><a href="showGallery_stickers.php?type=etiquetas&name=ETIQUETAS">Etiquetas</a></li>
								<li><a href="showGallery_imanes.php?type=imanes&name=IMANES">Imanes</a></li>
								<li><a href="showGallery.php?type=sobres&name=SOBRES">Sobres</a></li>
								<li><a href="showGallery.php?type=membretados&name=MEMBRETADOS">Membretada</a></li>
								<li><a href="showGallery.php?type=rifas&name=RIFAS">Rifas</a></li>
								<li><a href="showGallery.php?type=carpetas&name=CARPETAS">Carpetas</a></li>
							</ul>
						</li>
						<li class="last"><a href="#" style="border-top-right-radius:25px; border-right:none">Dise&ntilde;os</a>
							<ul>
								<li><a href="showGallery.php?type=catalogo1&name=CATALOGO&nbsp;DE&nbsp;DISE&Ntilde;OS&nbsp;1">Dise&ntilde;os 1</a></li>
								<li><a href="showGallery.php?type=catalogo2&name=CATALOGO&nbsp;DE&nbsp;DISE&Ntilde;OS&nbsp;2">Dise&ntilde;os 2</a></li>
								<li><a href="showGallery.php?type=catalogo3&name=CATALOGO&nbsp;DE&nbsp;DISE&Ntilde;OS&nbsp;3">Dise&ntilde;os 3</a></li>
								<li><a href="showGallery.php?type=catalogo4&name=CATALOGO&nbsp;DE&nbsp;DISE&Ntilde;OS&nbsp;4">Dise&ntilde;os 4</a></li>
								<li><a href="showGallery.php?type=catalogo5&name=CATALOGO&nbsp;DE&nbsp;DISE&Ntilde;OS&nbsp;1">Dise&ntilde;os 5</a></li>		
							</ul>
						</li>
						<div class="clearfix"></div>
					</ul>
				</nav>		
			</div>
			<div class="clearfix"></div>
		</div>
		<div id="content" style="border:none">
		</div>
	</div>		
	<div class="clearfix"></div>
	<div id="footer">			
		<div id="info">
			<p id="footer_info_small">Tel.: (0341) 4925877 - graficaleon@gmail.com - Face:Grafika Leon</p>
			<div class='footer_info'>
				<div id='phone_image' class='footer_image'></div>
				<div class='footer_text'>
					<span>Tel.: (0341) 4925877</span>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class='footer_info'>
				<div id='email_image' class='footer_image'></div>
				<div class='footer_text'>
					<span>graficaleon@gmail.com</span>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class='footer_info'>
				<div id='face_image' class='footer_image'></div>
				<div class='footer_text'>
					<span><a  href="https://www.facebook.com/grafika.leon">Grafika Leon</a></span>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>		
</body>
</html>