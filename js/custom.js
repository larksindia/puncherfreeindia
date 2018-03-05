$(document).ready(function() {;
    $('#acc-slider').liteAccordion({
        containerWidth: 960,
        containerHeight: 600,
        headerWidth: 48,
        responsive: true,
        autoScaleImages: false,
        activateOn: 'mouseover',
        pauseOnHover: true,
        theme: 'stitch',
        firstSlide: 1,
        linkable: false
    });

    $('#tablepress-1').DataTable();

});