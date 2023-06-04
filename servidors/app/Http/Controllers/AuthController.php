<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(){
        $credenciales = request(['email','password']);

        if(! $token = auth()->attempt($credenciales)){
            return response()->json(['error' => 'unautorized'],401);
        }
    }
}
