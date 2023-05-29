<?php

use App\Http\Controllers\RegistroController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/registrarse', [RegistroController::class, 'create']);
Route::post('/registrarse', [RegistroController::class, 'store']);

/*Route::get('/', function () {
    return view('welcome');
});*/
