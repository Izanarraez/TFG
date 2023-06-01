<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Usuario
 *
 * @property $id
 * @property $nombre
 * @property $correo
 * @property $tipo_usuario
 * @property $foto
 * @property $created_at
 * @property $updated_at
 * @property $remember_token
 *
 * @property Contraseña $contraseña
 * @property TipoUsuario $tipoUsuario
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Usuario extends Model
{
    
    static $rules = [
		'nombre' => 'required',
		'correo' => 'required',
		'tipo_usuario' => 'required',
		'foto' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['nombre','correo','tipo_usuario','foto'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function contraseña()
    {
        return $this->hasOne('App\Models\Contraseña', 'id', 'id');
    }
    
    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function tipoUsuario()
    {
        return $this->hasOne('App\Models\TipoUsuario', 'id', 'tipo_usuario');
    }
    

}
