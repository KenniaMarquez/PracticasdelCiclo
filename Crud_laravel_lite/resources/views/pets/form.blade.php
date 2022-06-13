

    <div class="card">
    <div class="card-body">

        <div class = "row animate__animated animate__backInLeft">
            <div class = "col-xs-12 col-sm-12 col-md-12">
                <div class = "form-group">

                    <strong >Nombre:</strong><br>
                        <div class="form-floating mb-3 animate__animated animate__backInLeft">
                             <input type="text" name = "name" class="form-control" id="floatingName" placeholder="Escriba un Nombre"
                             value = "{{ isset($pet->name)? $pet->name: ' ' }}">
                                <label for="name"></label>
                        </div>

                    <strong >Edad:</strong>
                        <div class="form-floating">
                            <input type="text" name = "age" class="form-control" id="floatingAge" placeholder="Escriba la Edad"
                            value = "{{ isset($pet->age)? $pet->age: ' ' }}">
                                <label for="age"></label>
                        </div>
                </div>
<hr>
                    <div class = "col-xs-12 col-sm-12 col-md-12 text-center">
                        <button style =  "background-color: green; color: white; width: 500px; " type = "submit" class = "btn" >Crear</button>
                    </div>

            </div>
        </div>
    </div>


