/**
 * Created by Mumriken on 2015-11-19.
 */
$(function() {

    $("#tooltip").hide();

    $("#beer1").click(function() {
        $("#tooltip").toggle("slow");
    });

    $("#searchField").hide();

    $("#searchButton").click(function() {
        $("#searchField").toggle("slow");
    });
});