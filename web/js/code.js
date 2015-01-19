window.onload = function() {
	readTextFile("website/index.css", function(response) {

		var array = response.split(/\r?\n/);

		var container = document.getElementById('code');
		container.innerHTML = "";

		for (var i = 0; i < 4; i++) {

			var j = randomNumber(0, array.length - 50);
			var result = "";
			for (var k = j; k < j + 50; k++) {
				result += array[k] + "\n";
			}

			container.innerHTML += '<code>' + result + '</code>';
		}

		$('code').each(function(i, block) {
			hljs.highlightBlock(block);
		});

	});

}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				callback(allText);
			}
		}
	}
	rawFile.send(null);
}