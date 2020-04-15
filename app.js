   $('#send').click(function(e){
       e.preventDefault();
       let url = $('#url').val();
        const postData = {
            url: $('#url').val()!== ""? $('#url').val() : undefined,
            tienda: $('#tienda').val()!== ""? $('#tienda').val(): undefined,
            tipo: $('#tipo').val()!== ""? $('#tipo').val() : undefined,
            serie: $('#serie').val()!== ""? $('#serie').val() :  undefined
        };
        // let url = edit === false? 'task-add.php' : 'task-edit.php';
        $.post(url, postData, data => {
            let response =  JSON.parse(data);
            console.log(response);
            let template = '';
            response.forEach(value =>{
                if(value.error){
                    $('#result').html('<li> Favor completar todos los campos requeridos</li>');
                }else {
                    template += 
                    `
                    Respuesta:
                    <li>
                        nfc: ${value.nfc}
                    </li>
                    <li>
                        Error: ${value.error}
                    </li>
                    <li>
                        URL : ${url}
                    </li>
                    `
                    $('#result').html(template);
                }
            })
        }).fail(function(xhr, status, error) {
            let template = '';
            template += 
            `<li>
                Mensaje: Error al comunicarse con la url
            </li>
            <li>
                Error: ${error}
            </li>
            <li>
                URL : ${url}
            </li>
            `            
            $('#result').html(template);
            // error handling
            console.log('Error al comunicarse con la URL', 'Status: ' + error)
        });
    });
    //Send 2//
    $('#send2').click(function(e){
        e.preventDefault();
            let product = $('#product').val();
            let id =  $('#ID').val();
            let url =  $('#url2').val();

         $.post(`${url}/${product}/${id}`, data => {
             let response =  JSON.parse(data);
             console.log(response);
             let template = 
                `
                <li>Respuesta: Enviado</li>
                `
                $('#result').html(template);
         }).fail(function(xhr, status, error) {
             let template = 
                `
                <li>Error por Cors: ' Parametros ingresados [ ${url} , ${product} , ${id}] </li>
                `
                $('#result').html(template);
         });
     });