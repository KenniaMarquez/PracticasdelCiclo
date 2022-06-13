@extends('layout.app')

@section('content')

<h2> Editar registro de mascota </h2>

<form action= "{{ url('/pet/'.$pet->id )}} " method="POST">

@csrf 
{{ method_field('PUT') }}
@include('pets.form')
</form>

@endsection