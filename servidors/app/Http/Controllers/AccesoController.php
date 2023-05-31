<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Usuarios;
use GuzzleHttp\Psr7\Request;

class AccesoController extends Controller
{
    public function acceso(Request $request){
        
    }

    public function registro(Request $request){

        /*$usuario = new User();

        $usuario->nombre = $request->nombre;*/

    }

    public function destroy(){
        auth()->logout();
        return redirect()->to('/');
    }
}
