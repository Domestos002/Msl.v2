$(document).ready(function () {
    var forms = $('form');

    forms.each(function () {
        $(this).submit(function (e) {

            e.preventDefault();

            var form = e.target,
                formData = serializeForm(form);

            $.post('mail.php', formData, function (data) {
                if(data !== '1')
                    return;

                var $parent = $(form).closest('.popup-form');
                if($parent.length > 0) {
                    $parent.fadeOut(300, function () {
                        $parent.siblings('.notification').fadeIn(200).css({display: 'inline-block'});
                        setTimeout(function () {
                            $('.popup').fadeOut(300, function(){
                                $parent.siblings('.notification').removeAttr('style');
                                $parent.removeAttr('style');
                            })
                        }, 2000);
                    });

                    console.log('hi')

                } else {
                    $('.popup').fadeIn(200);
                    $('.popup-form').hide();
                    $('.popup .notification').css({display: 'inline-block'});
                    setTimeout(function () {
                        $('.popup').fadeOut(300, function(){
                            $parent.siblings('.notification').removeAttr('style');
                            $parent.removeAttr('style');
                        })
                    }, 2000);

                    console.log('hi');
                }
            });

            // setTimeout(function () {
            //     clearForm(form)
            // }, 2000);

            return false;
        });
    });

    forms.each(function (e) {
        clearForm(this);
    });
});


function serializeForm(formData) {
    var returnData = {};
    for(var i=0; i<formData.length; i++) {
        var currentData = formData[i],
            value = currentData.value,
            name = currentData.name;

        if(value) {
            if(currentData.type === 'radio' || currentData.type === 'checkbox'){
                if(currentData.checked === true) returnData[name] = value;
            } else {
                returnData[name] = value;
            }
        }
    }

    return returnData;
}

function clearForm(formData) {
    for(var i=0; i<formData.length; i++) {
        var currentData = formData[i],
            value = currentData.value,
            name = currentData.name;

        if(value) {
            if(currentData.type === 'radio' || currentData.type === 'checkbox'){
                if(currentData.checked === true) currentData.checked = false;
            } else {
                currentData.value = "";
            }
        }
    }
}