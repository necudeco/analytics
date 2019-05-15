var prod_url = '/analytics/';//'/';

$(document).ready(function(){
    $('a.home').attr('href', prod_url);
    $('a.dashboard').attr('href', prod_url+'dashboard/visitas-dia.html');
    $('a.configuracion').attr('href', prod_url+'configuracion/form.html');
})