<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <div class="card" style=" margin: auto; width: 520px;" >
    <H2 style = " text-align: center;  " >Registro de Estudiantes</H2>

        <div class="card-body">

            <form action="#">

                <div class="row">

                    <div class="col">
                        <input type="text" name = "codigo" class="form-control" placeholder="Escriba su Codigo" required>
                    </div>

                    <div class="col">
                        <input type="text" name =  "nombre" class="form-control" placeholder="Escriba su Nombre" required>
                    </div>

                </div>

                    <br>

                <div class="row">

                    <div class="col">
                        <input type="text" name = "direccion" class="form-control" placeholder="Escriba una Dirección" required>
                    </div>

                    <div class="col">
                        <input type="text" name =  "telefono" class="form-control" placeholder="Escriba su Telefono" required>
                    </div>

                </div>

                    <br>

                    <div class="col">
                        <input type="text" name =  "email" class="form-control" placeholder="Escriba su Correo" required>
                    </div>

                    <br>
                    <input class = "btn btn-success " type="submit" style = " width: 100px;">
            </form>
        </div>
    </div>

        <div class="card" style=" margin: auto; width: 520px;" >
            <div class="card-body">
                <form class = "was-validated" action="#">
                    <div class="row">
                        <h4 style = "text-align: center" >Segunda Forma de Validación</h4>

                        <div class="row mb-3">
                            <label for="celular"  class="col-sm-2 col-form-label"><b>Celular </b></label>
                            <div class="col-sm-10">
                                    <input type="text" name =  "celular" class="form-control is-invalid" placeholder="Escriba su Celular" pattern = "^503\ d{8}$" required>
                                        <div class="invalid-feedback" style = "text-align: center; color: green"><b>Formato Correcto es 503 11223344</b>
                                            </div>
                                <br>
                                    <input class = "btn btn-success " type="submit" style = " width: 100px;">
                            </div>
                        </div>
                    </div>
                    <h6 >
                        <p align = "right">
                            Trabajo: <br>
                            -Ludwing Hernandez 🙂<br>
                            - Kenia Marquez 🙂
                        </p>
                    </h6>
                </form>
            </div>
        </div>
