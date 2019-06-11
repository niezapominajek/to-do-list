//żeby nie wyskakiwał ten błąd XMLHtpp... można przepisać na ajax
// dodaje sobie zmiane
$.getJSON("./data.json", function (data) {
    var compl = [];
    var act = [];
    var done = "";
    $.each(data, function (index, obj) {
        if (obj.completed === false) {
            done="unchecked";
            act.push("<div class='form-check'><input class='form-check-input' type='checkbox' "+done+" value='' id='" + index + "' onchange='handleClick(this);' ><label class='form-check-label' for=" + index + ">"
                + obj.name + "</label></div>");
        } else {
            done = "checked";
            compl.push("<div class='form-check'><input class='form-check-input' type='checkbox'" + done + " value='' id='" + index + "'><label class='form-check-label' for=" + index + ">"
                + obj.name + "</label></div>");
        }
    });

    $("<ul/>", { html: compl.join("") }).appendTo("#compl, #all");
    $("<ul/>", { html: act.join("") }).appendTo("#act, #all");
});

function handleClick(cb) {
    console.log("Clicked, new value sr = " + cb.checked );
}
