<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Usuarios;
use GuzzleHttp\Psr7\Request;

class AccesoController extends Controller
{
    /*public function store(){
        if(auth()->attempt(request(['correo','contraseña'])) == false){
            return back()->withErrors([
                'message' => 'El correo o la contraseña no son correctos'
            ]);
        }
        return redirect()->to('/');
    }*/

    public function registro(Request $request){

        /*$usuario = new User();

        $usuario->nombre = $request->nombre;*/

    }

    public function destroy(){
        auth()->logout();
        return redirect()->to('/');
    }
}
