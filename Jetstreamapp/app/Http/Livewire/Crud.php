<?php

namespace App\Http\Livewire;


use Livewire\Component;
use App\Models\Pet;

class Crud extends Component
{
    //definir propiedades
    public $pets;

    public function render()
    {
        $this->pets = Pet::all();
        return view('livewire.crud');
    }
}
