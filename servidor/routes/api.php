<?php

use App\Http\Controllers\UsuarioController;
use Illuminate\Http\Request;
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

Route::get('/usuarios', 'UsuarioController@index');
Route::post('/usuarios', 'ItemController@store');
Route::get('/usuarios/{id}', 'ItemController@show');
Route::put('/usuarios/{id}', 'ItemController@update');
Route::delete('/usuarios/{id}', 'ItemController@destroy');

/*Route::middleware('auth:sanctum')->get('/usuarios', function (Request $request) {
    return $request->Us();
});*/
