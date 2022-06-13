<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsuariosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::resource('usuario', UsuariosController::class);

//Yo Juan Marcelino Garcia Trabaje esta sección

//Primera Forma
/*Route::get('/usuario/{id}/{codigo}/{nombre}/{direccion}/{telefono}/{email?}', function ($id=0, $codigo = ' ', $nombre = ' ', $direccion = ' ', $telefono = ' ', $email = ' ' ) {
    return 'ID Usuario: ' . $id . '; Codigo: '. $codigo . '; Nombre: ' . $nombre . '; Direccion: ' . $direccion . '; Telefono: ' . $telefono . '; E-mail: ' . $email;
})->where('id', '[0-9] + ');*/

//Segunda Forma
Route::get('/usuario/{accion}/{id}/{codigo}/{nombre}/{direccion}/{telefono}/{email?}', function ($accion = '', $id=0, $codigo = ' ', $nombre = ' ', $direccion = ' ', $telefono = ' ', $email = ' ' ) {
    return 'ID Usuario: ' . $id . '; Codigo: '. $codigo . '; Nombre: ' . $nombre . '; Direccion: ' . $direccion . '; Telefono: ' . $telefono . '; E-mail: ' . $email . '; ACCION: ' .$accion;
})->where([ 'id', '[0-9] + ', 'accion' => ' create|update|delete', 'nombre' => '[a-zA-ZñÑ ]+' ]);


