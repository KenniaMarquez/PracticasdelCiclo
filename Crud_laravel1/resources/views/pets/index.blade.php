@extends('Layout.app')

@section('content')

<h1 style = 'color:#ED33B9;' > Listado de mascota </h1>

<img src="https://i.pinimg.com/originals/a5/0e/9c/a50e9ccbf4558fd98376b12f8d4c121b.jpg" class="rounded float-end" alt="..." width="90" height="90"  >
 


<a href="{{ url('/pet/create')}} " > Nueva Mascota </a>

<table class= "table table-bordered table-responsive-sm table table-striped">
    <thead> 
        <tr style = "background-color: #C1BDDB" >
            <th>#</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <td></td>
        </tr>

    </thead>
    <tbody>
        @foreach($pets as $pet)
        
        <tr>
            <td style = "background-color: #B58DB6 ">{{ $pet->id }} </td>
            <td>{{ $pet->name }} </td>
            <td>{{ $pet->age }} </td>
            <td>
                <a class = "btn btn-primary" href="{{ url ('/pet/'.$pet->id.'/edit') }} ">Editar</a>

            </td>
            
            <td>

            <form action="{{ url('/pet/'.$pet->id) }}" method="POST">

            @csrf 
            {{ method_field('DELETE') }}
            <input class = "btn" style = "background-color: #F9627D; color: white" type="submit" value="Eliminar"
            onclick="return confirm('Desea eliminar el registro?')">

        
            </form>
           </td>

        </tr>
        @endforeach
    </tbody>
    
</table>

@endsection
