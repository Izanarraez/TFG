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
        $data['contrasena'] = $request['contrasena'];
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
        $request->validate([
            'nombre' => 'required',
            'correo' => 'required|email|unique:users',
            'contrasena' => 'required',
            'foto' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $foto = $request->file('foto');
        $rutaFoto = $foto->store('public/fotos');

        $usuario = new Usuario();
        $usuario->nombre = $request->nombre;
        $usuario->correo = $request->correo;
        $usuario->tipo_usuario = 'Usuario';
        $usuario->contrasena = bcrypt($request->contrasena);
        $usuario->foto = $rutaFoto;
        $usuario->save();

        return response()->json(['message' => 'Usuario creado exitosamente'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = Usuarios::findOrFail($id);
        return response()->json($user);
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
        $user = Usuarios::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = Usuarios::findOrFail($id);
        $user->delete();
        return response()->json(null, 204);
    }

    public function get($id){
        $datos = Usuarios::find($id);
        return response()->json($datos, 200);
    }

    /*public function UpsateTipo_usuarios(Request $request, $id){
        $usuario = Usuarios::findOrFail($id);
        $tipoUsuario = Tipo_usuario::findOrFail($request->input('tipo_usuario'));

        $usuario->tipoUsuario()->associate($tipoUsuario);
        $usuario->save();

        return response()->json(['message' => 'Tipo de usuario modificado con éxito'], 200);
    }*/
}
