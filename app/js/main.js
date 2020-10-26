$(function(){
    $('input[type="submit"]').on('click', function(event){
        const inputsToVerify=$('input[type="text"], [type="email"], [type="tel"]');
        
        inputsToVerify.each(function(){
            if($(this).val().trim()==''){
                event.preventDefault();
                let inputPlaceholder=$(this).attr('placeholder');
                $(this).attr('placeholder', 'Uzupełnij polę: '+inputPlaceholder);
                $(this).addClass('invalidValue');
            }
        })
    })

    
})