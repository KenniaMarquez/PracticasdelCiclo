    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous">


<div class="card">
    <div class="card-body animate__animated animate__backInLeft">

            <div class="row">

                <div class="col">
                    <strong >Nombre del Deporte:</strong><br>
                    <input type="text" name = "Deportes" class="form-control" id="floatingDeporte" placeholder="Escriba un Deporte"
                             value = "{{ isset($hobbie->Deportes)? $hobbie->Deportes: ' ' }}" required>
                        <label for="Deportes"></label>
                </div>

                <div class="col">
                    <strong >Tipo de Musica:</strong>
                    <input type="text" name = "Musica" class="form-control" id="floatingMusica" placeholder="Escriba la Musica"
                            value = "{{ isset($hobbie->Musica)? $hobbie->Musica: ' ' }}" required>
                        <label for="Musica"></label>
                </div>
            </div>

            <div class="row">

                <div class="col">
                    <strong >Tipos de Juegos :</strong>
                    <input type="text" name = "Juegos_de_Mesa" class="form-control" id="floatingJuegos" placeholder="Escriba un Juego"
                            value = "{{ isset($hobbie->Juegos_de_Mesa)? $hobbie->Juegos_de_Mesa: ' ' }}" required>
                        <label for="Juegos_de_Mesa"></label>
                </div>

                <div class="col">
                    <strong >Tipo de Libros :</strong>
                    <input type="text" name = "Lectura" class="form-control" id="floatingLectura" placeholder="Escriba un Libro"
                            value = "{{ isset($hobbie->Lectura)? $hobbie->Lectura: ' ' }}" required>
                        <label for="Lectura"></label>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <strong >Tipo de Escritura :</strong>
                    <input type="text" name = "Escritura" class="form-control" id="floatingEscribir" placeholder="Escriba un tipo de Escritura"
                            value = "{{ isset($hobbie->Escritura)? $hobbie->Escritura: ' ' }}" required>
                        <label for="Escritura"></label>
                </div>
            </div>

                    <div class = "col-xs-12 col-sm-12 col-md-12 text-center">
                        <br>
                        <button style =  "background-color: green; color: white; width: 500px; " type = "submit" class = "btn" >Crear</button>
                    </div>
        </div>
    </div>

