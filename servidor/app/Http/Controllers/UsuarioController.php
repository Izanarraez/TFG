<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;
class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Usuarios::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $data['nombre'] = $request['nombre'];
        $data['correo'] = $request['correo'];
        $data['tipo_usuario'] = $request['tipo_usuario'];
        $data['foto'] = $request['foto'];
        
        Usuarios::create($data);
            return response()->json([
            'message' => "Successfully created",
            'success' => true
      ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $usuarios = Usuarios::create($request->all());
        return response()->json($usuarios,201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $usuarios = Usuarios::findOrFail($id);
        return response()->json($usuarios);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuarios $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data['nombre'] = $request['nombre'];
        $data['correo'] = $request['correo'];
        $data['foto'] = $request['foto'];
        Usuarios::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        /*$res = Usuarios::find($id)->delete();
        return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);*/
        $user = Usuarios::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }

    public function get($id){
        $datos = Usuarios::find($id);
        return response()->json($datos, 200);
    }
}
