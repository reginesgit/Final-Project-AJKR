function initViz() {
    var containerDiv = document.getElementById("KDTableau"),
    url = "https://public.tableau.com/views/HeartDiseaseStudyAnalysis/Dashboard2",
    options = {
        hideTabs: true,
        onFirstInteractive: function () {
            console.log("Run this code when the viz has finished loading");
        }
    };

    var viz = new tableau.Viz(containerDiv, url, options);
}

initViz();