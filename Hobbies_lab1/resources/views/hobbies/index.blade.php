    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous">


<div style = 'background-color: green; color: white; text-align: center;'>

<h2 > Listado Hobbies</h2>

</div>

<div class="card">
    <div class="card-body">

    <table class = "table table-bordered table-responsive-sm table-striped" style = "text-align: center; ">
        <thead>
        <tr >
            <th>#</th>
            <th>Deportes</th>
            <th>Musica</th>
            <th>Juegos</th>
            <th>Lectura</th>
            <th>Escritura</th>
        </tr>
            </thead>
        @foreach ($hobbies as $hobbie)
            <tr>

                <td> {!! $hobbie->id !!}  </td>
                <td> {!! $hobbie->Deportes !!}  </td>
                <td> {!! $hobbie->Musica !!}  </td>
                 <td> {!! $hobbie->Juegos_de_Mesa !!}  </td>
                  <td> {!! $hobbie->Lectura !!}  </td>
                   <td> {!! $hobbie->Escritura !!}  </td>

                <td>

                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <div>
                             <a class = "btn btn-primary" href="{{ url ('/hobbie/' . $hobbie->id.'/edit' ) }}">editar</a>
                            </div>

                        <form action="{{ url ('/hobbie/'.$hobbie->id) }}" method = "POST">
                             @csrf
                              {{ method_field('DELETE') }}
                               <input type="submit" value="Eliminar"
                                 onclick=" return confirm('Desea eliminar el registro?' ) " class = "btn btn-danger">
                        </form>
                    </div>
                </td>
            </tr>
            @endforeach

    </table>

 {{  $hobbies->links()  }}

     <div class = "col-xs-12 col-sm-12 col-md-12 text-center" style = "width:1870px">
        <a class = "btn btn-success " href="{{ URL::to('hobbie/create/') }}">Crear un Hobbie</a>
    </div>

   </div>
     </div>


