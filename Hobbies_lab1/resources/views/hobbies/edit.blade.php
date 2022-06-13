    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous">


    <div style = "background-color: green ">
    <h2 style = "color: white; text-align: center"
                        class="animate__animated animate__rubberBand">Editar Hobbies</h2>
    </div>

        <div class = "row" >
        <div class = "col-lg-12 margin-tb">
            <div class = "pull-left">
                <a   style = "background-color: red;" class = "btn btn-close" href = "{{ URL::to ('hobbie/') }}" title = "Volver"><i class = "fas fa-backward"></i></a>
            </div>
        </div>
    </div>

        <form action="{{ url ( '/hobbie/' .$hobbie->id ) }}" method = "post">

            @csrf
            {{method_field('PUT') }}
                @include('hobbies.form')

        </form>
