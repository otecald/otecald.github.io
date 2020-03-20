﻿var datosProgramación=[
	{
		título:"Chatovod Mod",
		descripción:"Extensión del Chrome que le da mejoras a Chatovod.",
		foto:"Javascript/Paginas/Chatovod/Chatovod_Mod/Thumb.png",
		enlace:"Javascript/Paginas/Chatovod/Chatovod_Mod/Chatovod_Mod.html"
	},{
		título:"Bot conversacional para Chatovod",
		descripción:"Bot para Chatovod, OtecaldBot (no funciona)",
		foto:"Javascript/Paginas/OtecaldBot/Thumb.png",
		enlace:"Javascript/Paginas/OtecaldBot/Bot.html"
	},{
		título:"Secuencia Binaria",
		descripción:"Javascript que genera una secuencia binaria irracional única, parecida a pi.",
		foto:"Javascript/Paginas/Secuencia Binaria/Thumb.png",
		enlace:"Javascript/Paginas/Secuencia Binaria/Secuencia Binaria.html"
	},{
		título:"Base 64 hacia palabras de Wikcionario y viceversa.",
		descripción:"Convierte código base 64 a palabras de Wikcionario y palabras a base 64.",
		foto:"Javascript/Paginas/Base64_Wikcionario/Thumb.png",
		enlace:"rawgit Base64_hacia_Palabras/HTML.html"
	},{
		título:"Diferencia de Fechas",
		descripción:"Javascript que obtiene la diferencia que hay entre dos fechas.",
		foto:"Javascript/Paginas/Diferencia%20de%20Fechas/Thumb.png",
		enlace:"Javascript/Paginas/Diferencia%20de%20Fechas/Diferencia%20de%20fechas.html"
	},{
		título:"Predictor de Quiniela",
		descripción:"Javascript que intenta mostrar una estadística de la Quiniela.",
		foto:"Javascript/Paginas/Quiniela/Thumb.png",
		enlace:"rawgit Quiniela/HTML.html"
	}
]

function rutaActual()
{
	var actual=location.href
	padre=actual.slice(0,actual.lastIndexOf("/")+1)
	return padre
}


function generarProgramación()
{
	var i
	var salida="",actual,título,texto,hospedaje,miniatura,foto,enlace,encuentraTexto
	var longitud=datosProgramación.length
	local=rutaActual()
	miniatura=local
	for(i=0;i<longitud;i++)
	{
		actual=datosProgramación[i]
		título=actual.título
		texto=actual.descripción
		enlace=actual.enlace
		encuentraTexto=enlace.search("rawgit")>=0
		if(encuentraTexto)
		{
			enlace=enlace.split("rawgit ")[1]
			hospedaje="https://rawgit.com/ArtEze/Otecald/master/Javascript/Proyectos/"
		}
		else
		{
			hospedaje=local
		}
		enlace=hospedaje+enlace
		foto=miniatura+actual.foto		
		salida+="<table width=\"300px\" border=\"1\" class=\"yt\"><tr><td>"+título+"</td></tr><tr><td>"+texto+"</td></tr><tr><td><a target=\"_blank\" href=\""+enlace+"\" ><img src=\""+foto+"\" ></img></a></td></tr></table>"
	}
	return salida
}