<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\usersController;
use App\Http\Resources\UsersResource;
use App\Models\Users;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::group(['middleware' => 'api'], function (){

    
});

Route::get('/users', function(){
    return UsersResource::collection(Users::all());
});

/*Route::get('/users/{id}', function($id){
    return new UsersResource(Users::findOrFail($id));
});*/

Route::get('/users/{id}', [usersController::class, 'get']);

Route::put('/users/{id}', [usersController::class, 'update']);

Route::delete('/users/{id}', [usersController::class, 'destroy']);

Route::post('/signup', [AuthController::class, 'signup']);

Route::post('/login', [AuthController::class, 'login']);

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->Us();
});*/
