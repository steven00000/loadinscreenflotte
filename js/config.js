/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    Tutoriel par MrPikou / Abonnez-Vous !
*/

/* Chemin d'accès à votre logo
NE PAS CHANGER */
var l_serverImage = "images/logo.png";

/* Nom de Votre serveur
Changez le nom de votre serveur en dessous :*/
var l_serverName = "La Flotte Delta Black";

/* Utiliser une vidéo en fond
NE PAS CHANGER */
var l_bgVideo = false;

/* Images de Fond
Placez 5 Images ! */
var l_bgImages = [
	"backgrounds/images/star-wars-the-clone-wars-utapau.png",
	"backgrounds/images/Clone-troopers.png",
	"backgrounds/images/star-wars-the-clone-wars.png",
	"backgrounds/images/clone_action_web.png"
];

/* Images dans le Désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_bgImagesRandom = true;

/* Delai ( millisecondes ) entre les images
NE PAS CHANGER */
var l_bgImageDuration = 3000;

/* Durée ( millisecondes ) de la transition entre les images*/
var l_bgImageFadeVelocity = 2000;

/* Mettre des images de fond ? ( "True" pour Oui / "False" pour Non )*/
var l_bgOverlay = true;

/* Pourcentage de "points noirs" sur les images de fond :*/
var l_bgDarkening = 80;

/* Musique
Activer la musique en fond ? ( "True" pour Oui / "False" pour Non )*/
var l_music = true;

/*Montrer le nom de la musique ? ( "True" pour Oui / "False" pour Non )*/
var l_musicDisplay = true;

/*Playlist musicale
Placez les musiques que vous souhaitez après "ogg:" et leur nom après "name:"*/
var l_musicPlaylist = [
	{ogg: "songs/awaken-136824.ogg", name: "Musique1"},
	// {ogg: "songs/song2.ogg", name: "Musique2"},
	// {ogg: "songs/song3.ogg", name: "Musique3"}
];

/*Musiques dans le désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_musicRandom = true;

/*Volume de la musiqe
Mettez un nombre entre 0 et 100*/
var l_musicVolume = 50;

/*Activer les messages personnalisés ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesEnabled = true;

/*Mettez vos messages pérsonnalisés en dessous
Remplacez le "Message #..." par votre message*/
var l_messages = [
	"Que la Force soit avec vous pendant le chargement...",
	"Préparez-vous à voyager vers une galaxie lointaine, très lointaine...",
	"Patience, jeune Padawan, votre aventure va commencer...",
	"Chargement hyperespace en cours...",
	"Les régions de la galaxie s'activent... Préparez-vous pour une aventure dans la Guerre des Clones.",
	"Les vaisseaux sont en préparation... Le combat approche.",
	"Les systèmes se synchronisent... Préparez-vous à rejoindre le champ de bataille.",
	"Les données de combat sont en cours de chargement... Votre mission va bientôt commencer."
];


/*Messages en désordre ? ( "True" pour Oui / "False" pour Non )*/
var l_messagesRandom = false;

/*Delai entre les changements de message ( millisecondes)
Il est conseillé de mettre la même valeur qu'à "Delai ( millisecondes ) entre les images"*/
var l_messagesDelay = 3000;

/*Durée de l'animation de changement d'image ( millisecondes ) */
var l_messagesFade = 1000;