<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    public function create(){

    }

    public function store(){
        $usuario = Usuarios::create(request(['nombre','correo','contraseña']));
    }
}
