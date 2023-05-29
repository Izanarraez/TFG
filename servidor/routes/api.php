<?php

use App\Http\Controllers\Acceder;
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

Route::prefix('usuarios')->group(function (){
    Route::get('/', [UsuarioController::class, 'index']);
    Route::post('/', [UsuarioController::class, 'create']);
    Route::get('/{id}',[UsuarioController::class, 'get']);
    Route::put('/{id}', [UsuarioController::class], 'update');
    Route::delete('/{id}', [UsuarioController::class], 'destroy');
});

Route::post('/registro', [RegistroController::class, 'store']);
Route::post('/acceder', [AccesoController::class, 'store']);

/*Route::middleware('auth:sanctum')->get('/usuarios', function (Request $request) {
    return $request->Us();
});*/
