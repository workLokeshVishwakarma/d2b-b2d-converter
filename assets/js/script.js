$(document).ready(function() {
    $('[data-option="Decimal"]').click(() => {
        $('[data-inp="true"]').attr("placeholder", "Enter Decimal Value")
    })
    $('[data-option="Binary"]').click(() => {
        $('[data-inp="true"]').attr("placeholder", "Enter Binary Value")
    })
    $('[data-btn="Convert"]').click(() => {
        if ($('[data-inp="true"]').attr("placeholder") == "Enter Decimal Value") {
            $('[data-reslt="true"]').val(parseInt($('[data-inp="true"]').val()).toString(2))
            $('[data-inp="true"]').val("")
        } else if ($('[data-inp="true"]').attr("placeholder") == "Enter Binary Value") {
            $('[data-reslt="true"]').val(parseInt($('[data-inp="true"]').val(), 2))
            $('[data-inp="true"]').val("")
        }
    })
    $('[value="Reset"]').click(() => {
        $('[data-inp="true"]').val("")
        $('[data-reslt="true"]').val("")
    })
})

document.getElementById("copyTxtCon").addEventListener('click', function(e) {
    window.open('https://lexuscreations.herokuapp.com/', '_blank')
})