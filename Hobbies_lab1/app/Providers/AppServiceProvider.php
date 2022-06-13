<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// Se usa esta referencia para agregar una mejor
//vizualizacion al paginador por bosstrap
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
                Paginator::useBootstrap();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
