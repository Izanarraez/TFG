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
        $usuarios = Usuarios::all();
        return response()->json($usuarios,200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       /* $datos['nombre'] = $request['nombre']; 
        $datos['correo'] = $request['correo']; 
        $datos['tipo'] = $request['tipo']; 
        $datos['foto'] = $request['foto']; 

        Usuarios::create($datos);

        return response()->json(['message' => "Successfully created",'success' => true], 200);*/
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
        $usuarios = Usuarios::findOrFail($id);
        $usuarios->update($request->all());
        return response()->json($usuarios);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $usuarios = Usuarios::findOrFail($id);
        $usuarios->delete();
        return response()->json(null,204);
    }
}
