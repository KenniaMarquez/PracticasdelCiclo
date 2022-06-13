@extends('Layout.app')

@section('content')

<h2> Nueva Mascota </h2>


<form action="{{ url('pet')}}" method= "POST">

@csrf
@include('pets.form')



</form>

@endsection