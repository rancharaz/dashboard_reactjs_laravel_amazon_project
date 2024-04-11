<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserProductController extends Controller
{
    //
    function showProduct(){
        $result =  DB::table('users')
        ->join('products', 'users.auth_user', "=", "products.id" )
        ->get();
        return $result;
    }
}
