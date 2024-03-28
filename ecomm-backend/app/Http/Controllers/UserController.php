<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //
    function register(Request $req){
        $user = new User;
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));

        $user->save();
        return $user;
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
}
