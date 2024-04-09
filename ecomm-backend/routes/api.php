<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/get-user', [UserController::class, 'getUser']);


Route::post('/add-product', [ProductController::class, 'addProduct']);
Route::get('/product-list', [ProductController::class, 'list']);
Route::delete('/delete-product/{id}', [ProductController::class, 'delete']);
Route::get('/product/{id}', [ProductController::class, 'getProduct']);
Route::put('/product/{id}', [ProductController::class, 'update']);
Route::get('/search-product/{key}', [ProductController::class, 'search']);
