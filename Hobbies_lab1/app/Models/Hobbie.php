<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hobbie extends Model
{
     protected $table = 'hobbies';
     public $timestamps = true ;

    use HasFactory;

    protected $fillable = [
        'Deportes',
        'Musica',
        'Juegos_de_Mesa',
        'Lectura',
        'Escritura'
    ];
}
