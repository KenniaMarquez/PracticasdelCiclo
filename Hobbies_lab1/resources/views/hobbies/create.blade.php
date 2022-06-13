    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous">


        <div style = "background-color: green; color: white;">
                <h2 style = "text-align:center"
                        class="animate__animated animate__rubberBand">Agregar un Hobbie</h2>
        </div>

<br>

<div class="card">
    <div class="card-body">

    <div class = "row">
        <div class = "col-lg-12 margin-tb">
            <div class = "pull-left">
                <a   class = "btn btn-danger btn-close" href = "{{ URL::to ('hobbie/') }}" title = "Volver"><i class = "fas fa-backward"></i></a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class = "alert alert-danger" >
            <strong>Whoops!</strong> There were some problems with your input. <br> <br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li> {{ $error }} </li>
                    @endforeach
                </ul>
        </div>
    @endif

    <form action = "{{ URL::to ('hobbie') }}" method = "post">
        @csrf
        @include('hobbies.form')
    </form>

    </div>
</div>
