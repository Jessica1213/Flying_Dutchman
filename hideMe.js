/**
 * Created by Mumriken on 2015-11-19.
 */
$(function() {

    $("#tooltip").hide();

    $("#demo").click(function() {
        $("#tooltip").toggle("slow");
    });

    $("#searchField").hide();

    $("#searchButton").click(function() {
        $("#searchField").toggle("slow");
    });
});