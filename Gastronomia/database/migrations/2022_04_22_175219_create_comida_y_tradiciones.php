<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comida_y_tradiciones', function (Blueprint $table) {
            $table->increments('id') ;
            $table->string('Pais');
             $table->string('Tradiciones');
              $table->string('Platillos');
              $table->integer('Precios');
               
              $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comida_y_tradiciones');
    }
};
