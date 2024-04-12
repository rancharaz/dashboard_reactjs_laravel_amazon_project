<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductModelsController extends Controller
{
    //

    public function show_id($id){
        return User::find($id);


    }
}
