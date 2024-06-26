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

        if(User::where('email', $request->email)->first()){
            return response([
                'message' => 'Email already exists',
                'status' => 'failed'
            ], 200);
        }

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password']),


        ]);
        $token = $user->createToken($request->email)->plainTextToken;
        if(!$user){
            return response([
                'message' => 'Credentials are not correct.'
            ], 401);
        }


        return response([
            'user' => $user,
            'token'=>$token,
            'message' => 'Registration Success',
            'status'=>'success'
        ], 201);


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
            }
            $token = $user->createToken($request->email)->plainTextToken;

           $response = [
               'user' => $user,
               'token' => $token,
               'status' => 'success'
           ];

            return response($response, 201);
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
