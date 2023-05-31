<?php

use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\usuariosController;
use Illuminate\Support\Facades\Route;
Use Illuminate\Http\Request;

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

Route::get('/usuarios', [usuariosController::class, 'index']);
Route::post('/usuarios', [usuariosController::class, 'create']);
Route::get('/usuarios/{id}',[usuariosController::class, 'get']);
Route::put('/usuarios/{id}', [usuariosController::class, 'UpsateTipo_usuarios']);
Route::delete('/usuarios/{id}', [usuariosController::class, 'destroy']);

Route::post('/registro', [RegistroController::class, 'store']);
Route::post('/acceder', [AccesoController::class, 'store']);

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->Us();
});*/
