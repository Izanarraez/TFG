<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use GuzzleHttp\Psr7\Request;

class AccesoController extends Controller
{

    public function store(Request $request){

       /*$usuario = Usuarios::create($request->all());
       auth()->login($usuario);*/

    }

    public function destroy(){
        auth()->logout();
    }
}
