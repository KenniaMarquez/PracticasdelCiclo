<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        //$pets = pet::all();
        //return view ('pets.index')-> with ('pets',$pets);

        $data ['pets'] = Pet::paginate(5);
        return view('pets.index', $data);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return view ('pets.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
            $petData = request()->except ('_token');
            Pet::insert($petData);

            //return response()->json($petData);

            return redirect('pet');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        //
        return view('pets.form');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */



    public function edit($id)
    {
        //
           $pet = Pet::findOrfail($id);
        return view ('pets.edit' , compact ('pet'));
       // return view('pets.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
            $petData = request ()-> except (['_token', '_method'] );
            Pet::where('id', '=', $id)->update($petData);
            return redirect ('pet');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        Pet::destroy($id);
        return redirect("pet");
    }
}
