// Tableau de citations et d'auteurs
var quotes = [
	{quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", author: "Gandhi"},
	{quote: "La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius"},
	{quote: "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.", author: "Albert Schweitzer"},
	{quote: "La seule façon de faire du bon travail est d'aimer ce que vous faites. Si vous n'avez pas encore trouvé, continuez à chercher. N'abandonnez pas.", author: "Steve Jobs"},
	{quote: "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein"}
];

// Fonction pour générer une citation aléatoire
function generateQuote() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	var randomQuote = quotes[randomNumber];

	document.getElementById("text").innerHTML = randomQuote.quote;
	document.getElementById("author").innerHTML = "- " + randomQuote.author;
}
