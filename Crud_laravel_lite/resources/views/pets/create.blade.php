@extends('layouts.app')

@section('content')

    <div style = "background-color: green ">
    <h2 style = "color: white; text-align: center"
                        class="animate__animated animate__rubberBand">Registrar una Mascota</h2>
    </div>

        <div class = "row" >
        <div class = "col-lg-12 margin-tb">
            <div class = "pull-left">
                <a   style = "background-color: red;" class = "btn btn-close" href = "{{ URL::to ('pet/') }}" title = "Volver"><i class = "fas fa-backward"></i></a>
            </div>
        </div>
    </div>


        <form action="{{ url ('pet') }}" method = "post">

            @csrf
                @include('pets.form')

        </form>
        

@endsection
