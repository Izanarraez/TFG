<?php

namespace App\Models;

use App\Http\Middleware\Authenticate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Usuarios extends Model
{
    use HasFactory, HasApiTokens;

    protected $table = "usuarios";

    protected $fillable = [
        'nombre',
        'correo',
        'tipo_usuario',
        'contrasena',
        'foto'
    ];

    protected $hidden = [
        'contrasena',
        'remember_token'
    ];
}
