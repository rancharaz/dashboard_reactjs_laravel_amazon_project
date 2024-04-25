<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserProductController;
use App\Http\Controllers\ProductModelsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's

    });

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/get-user', [UserController::class, 'getUser']);


Route::post('/add-product', [ProductController::class, 'addProduct']);
Route::get('/', [ProductController::class, 'list']);
Route::delete('/delete-product/{id}', [ProductController::class, 'delete']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);
Route::put('/product/{id}', [ProductController::class, 'update']);
Route::get('/search-product/{key}', [ProductController::class, 'search']);
Route::get('/product-list', [ProductController::class, 'list']);

/* testing */
Route::get('/show-join', [UserProductController::class, 'showProduct']);
Route::get('/show-id/{id}', [UserController::class, 'show_id']);
Route::get('/add-user-products', [UserController::class, 'addUserproduct']);
Route::get('/data-user', [UserController::class, 'getUserJoinData']);
