@extends('layouts.app')

@section('content')

<div style = 'background-color: green;'>

<h2 style = 'color: white; text-align: center; '  > Listado mascotas</h2>

</div>

    <table class = "table table-bordered table-responsive-sm table table-striped" style = "text-align: center; ">

        <tr >
            <th>id</th></th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <td></td>
        </tr>

        @foreach ($pets as $pet)
            <tr>

                <td> {!! $pet->id !!}  </td>
                <td> {!! $pet->name !!}  </td>
                <td> {!! $pet->age !!}  </td>

                <td>
                    <a class = "btn btn-primary" href="{{ url ('/pet/' . $pet->id.'/edit' ) }}">editar</a>
                </td>

                <td>

                <form action="{{ url ('/pet/'.$pet->id) }}" method = "POST">
                     @csrf
                         {{ method_field('DELETE') }}
                            <input type="submit" value="Eliminar"
                                 onclick=" return confirm('Desea eliminar el registro?' ) "
                                     class = "btn btn-danger">
            </form>

                </td>

            </tr>
            @endforeach

    </table>

 {{  $pets->links()  }}

    <div class = "col-xs-12 col-sm-12 col-md-12 text-center" style = "width:1710px">
        <a class = "btn btn-success " href="{{ URL::to('pet/create/') }}">Crear una Mascota</a>
    </div>



@endsection
