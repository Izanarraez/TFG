<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contraseña extends Model
{
    use HasFactory;

    protected $table = "contraseña";

    protected $fillable = [
        'id',
        'contraseña'
    ];
}
