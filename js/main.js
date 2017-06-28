$(document).ready(function () {

    $('section.portfolio .skill-list .skill-name').on('click', function () {
        var hiddenEl = $(this).closest('.skill-single').find('.wrap_skill-info');
        $(hiddenEl).slideToggle();
    });
});