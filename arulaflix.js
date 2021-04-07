var imgArcos = ["https://media.fstatic.com/BiSBGzp0D0YiB-nxB5AKteKVZ2w=/268x386/smart/media/movies/covers/2011/07/ac40542608f1ce6b2872abe76355ef92.jpg", 
"https://media.fstatic.com/_O0W1X3YEDe9LK5Bg3Gp8iB2JM8=/268x386/smart/media/movies/covers/2018/09/one_piece_alabasta.png", 
"https://media.fstatic.com/MborBvCc4rwdVtuA8LN4SJ7RfC8=/268x386/smart/media/movies/covers/2012/01/8e6145dd0320d062fbbab481d01c7a77.jpg", 
"https://media.fstatic.com/FaOWharNwDr2AqvAISrRTkJ9c9k=/268x386/smart/media/movies/covers/2012/01/e71ab99a3e2299c35075e2b6396ebc7b.jpg", 
"https://media.fstatic.com/WSINztNi1-DbO1wuSdSCFdIuduY=/268x386/smart/media/movies/covers/2012/01/4cac14aa01ff1a90d971abbfd5f4077c.jpg", 
"https://media.fstatic.com/77Sc5VDCoct979QhC8ms3OEedKs=/268x386/smart/media/movies/covers/2013/03/d539471f734f49d8d722764d0b244306_1.jpg", 
"https://i.pinimg.com/originals/f5/8d/7b/f58d7b44093b11b4e7af8f95840b019a.png" , 
"https://media.fstatic.com/HcJwzQGaEXhK_SHD0UIs92QI9Os=/268x386/smart/media/movies/covers/2012/01/f0f053497c0aea69e0f62e964fb8b135.jpg", 
"https://media.fstatic.com/oh9v1EtyOsrD4KYYPurjbZtTCns=/268x386/smart/media/movies/covers/2012/09/455c247b746ab1353466f4fca605e2ac.jpg", 
"https://media.fstatic.com/EwRuSeIaKu9LhNTE2rNSthRGxyE=/268x386/smart/media/movies/covers/2013/03/40df83f491c9ec52a76bd6d3c6fd1c7c.jpg", 
"https://media.fstatic.com/341V7QD0CVXQMhco-I9pfM6yvRI=/268x386/smart/media/movies/covers/2018/04/2.png", 
"https://media.fstatic.com/WMfuivdMy_3doX1gL6ZCA56Fp-I=/268x386/smart/media/movies/covers/2016/08/zou_arc.jpg", 
"https://media.fstatic.com/AwcrmM8HU2i1Xt5NwVoLyQ3mkJM=/268x386/smart/media/movies/covers/2018/04/3_53dvB44.jpg", 
"https://media.fstatic.com/ogLLlSUdob2j-xuFNwa2wf1JvHs=/268x386/smart/media/movies/covers/2019/11/mqupeeot6k731.jpg"]

var nomeArcos = ["East Blue", "Alabasta", "Skypea", "Ennies Lobby", "Thriller Bark", "Arquipélago de Sabaody", "Impel Down", "Marineford", 
"Ilha dos Tritões", "Punk Hazard", "Dressrosa", "Zou", "Whole Cake Island", "País de Wano"]

var linksArcos= ["https://onepieceex.net/episodios/t01/", "https://onepieceex.net/episodios/t02/", "https://onepieceex.net/episodios/t03/", 
"https://onepieceex.net/episodios/t04/", "https://onepieceex.net/episodios/t05/", 
"https://onepieceex.net/episodios/t06/", "https://onepieceex.net/episodios/t07/", 
"https://onepieceex.net/episodios/t08/", "https://onepieceex.net/episodios/t10/", 
"https://onepieceex.net/episodios/t11/", "https://onepieceex.net/episodios/t12/", "https://onepieceex.net/episodios/t13/", 
"https://onepieceex.net/episodios/t14/", "https://onepieceex.net/episodios/t15/"]

for (let i = 0; i < imgArcos.length; i++) {
  document.write("<div class='itens'>", "<a href=", linksArcos[i], " target='_blank' >", `<img class='${(i == 6)?"poster impel":"poster"}'  src=${imgArcos[i]}  >`, 
  "<h2 class='nomes'>", nomeArcos[i], "</h2>", "</a>", "</div>")
}










//function listarFilmesNaTela(filme) {
  //  var listaFilmes = document.querySelector('#listaFilmes')
    //var elementoFilme = "<img src=" + filme + ">"
   // listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  //}