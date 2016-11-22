function aa002868(){

d3.csv("https://seg1.github.io/SEG1/DongYuhYang.csv", function(data) {
	console.log(data);
	      d3.wordcloud()
        .size([800, 400])
        .selector('#wordcloud')
        .words(data)
        .start();
});

}
