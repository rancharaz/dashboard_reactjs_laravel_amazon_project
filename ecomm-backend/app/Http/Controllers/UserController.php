<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Response;

class UserController extends Controller
{
    //
    public function register(Request $req){
        /* register function with validation */
        $fields = $req->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'auth_user' => 'required|string|unique:users,auth_user',
            'password' => 'required|string'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'auth_user' => $fields['auth_user'],
            'password' => bcrypt($fields['password'])

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
            'password'=> 'required|string'
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

}

