<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class UserController extends Controller
{
    //
    public function register(Request $request){
        /* register function with validation */
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'string',
            'product_id'=>'nullable',
            'user_id'=>'nullable'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),


        ]);
        if(!$user){
            return response([
                'message' => 'Credentials are not correct.'
            ], 401);
        } else {
          return  $user;
        }


    }

    function login(Request $request){
        /* register function with validation */
        $fields = $request->validate([
            'email' => 'required|string',
            'password'=> 'required|string',
            'product_id'=>'nullable'
        ]);
        /* search for the email that is first */
        $user = User::where('email', $fields['email'])->first();
               /* check password */
               if(!$user || !Hash::check($fields['password'], $user->password)){
                return response([
                    'message' => 'Credentials are not correct.'
                ], 401);
            } else {
              return  $user;
            }
    }

    public function getUser(){
        return User::all();
    }
    public function show_id($id){
        $products =  User::find($id);
        return $products;

    }


    public function addUserproduct(){


        $user = User::where('email')->first();
        return $user;
    }




    public function getUserJoinData(Request $request)
    {
        $user = User::with('product')->get();
        $products = Product::with('user')->get();

        return $user;


    }
}

