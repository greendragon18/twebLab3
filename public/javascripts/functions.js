


function success(data, textStatus, jqXHR) {
    console.log(data);
}

function githubSearch() {
    var textField = document.getElementById('search-field').value;

    console.log(navigator.userAgent);
    $.getJSON("http://localhost:3000/github?search=" + textField, function (data, textStatus, jqXHR) {
        console.log(data);

        //var repo = JSON.parse(data);
        $("#repo_table").slideToggle;

        var source = $("#repo_table").html();
        var template = Handlebars.compile(source);
        //var repo = {repo: [data]};
        var repo = {repo: [{name: "tutu", owner: "tata", url: "lala", description: "titi", language: "toto", updated: "lili"}]};
        console.log(repo);
        $("#repo_table").html(template(repo));
    });

}

// Shorthand for $( document ).ready()
$(function () {
    console.log("jquery is ready!");
    $("#repo_table").slideToggle;
});