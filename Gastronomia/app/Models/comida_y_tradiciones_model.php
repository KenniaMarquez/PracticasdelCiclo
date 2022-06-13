<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class comida_y_tradiciones_model extends Model
{
    protected $table = 'comida_y_tradiciones';
    public $timestamps = true ; 

    use HasFactory;

    protected $fillable = [
        'Pais',
        'Tradiciones',
        'Platillos',
        'Precio',
    ];
}
