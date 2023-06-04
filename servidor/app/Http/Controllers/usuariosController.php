<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Tipo_usuario;
use App\Models\Usuario;
use App\Models\Usuarios;
use Illuminate\Http\Request;

class usuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Usuario::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuarios = Usuario::create($request->all());
        return response()->json($usuarios,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $usuarios = Usuarios::findOrFail($id);
        return response()->json($usuarios);  
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        /*$data['nombre'] = $request['nombre'];
        $data['correo'] = $request['correo'];
        $data['tipo_usuario'] = $request['tipo_usuario'];
        $data['foto'] = $request['foto'];
        Usuario::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);*/
        $user = Usuarios::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuarios::findOrFail($id);
        $usuario->delete();
    }

    /*public function get($id){
        $datos = Usuarios::find($id);
        return response()->json($datos, 200);
    }*/

}
