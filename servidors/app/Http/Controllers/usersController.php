<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Usuarios;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth;
use App\Models\Users;

class usersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Users::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['type_user'] = $request['type_user'];
        $data['password'] = $request['password'];
        $data['photo'] = $request['photo'];
        
        Users::create($data);
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
        return Users::create($request->all());
    }

    public function storeAccess(Request $request)
    {
        $usuario = Users::create($request->all());
        
        if(auth()->login($usuario)){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        /*$user = Usuarios::findOrFail($id);
        return response()->json($user);*/
        return Users::find($id);
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

        if(Users::where('id',$id)->exists()){
            $usuario = Users::find($id);
            $usuario->name = $request->name;
            $usuario->email = $request->email;
            $usuario->type_user = $request->type_user;
            $usuario->password = $request->password;
            $usuario->photo = $request->photo;

            $usuario->save();

            return response()->json([
                "message" => "record update successfully"
            ],200);
        }
        else{
            return response()->json([
                "message" => "usuario not found"
            ],404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        if(Users::where('id',$id)->exists()){
            $usuario = Users::find($id);
            $usuario->delete();

            return response()->json([
                "message" => "record delete"
            ],200);
        }
        else{
            return response()->json([
                "message" => "usuario not found"
            ],404);
        }
    }

    public function get($id){
        $datos = Users::find($id);
        return response()->json($datos, 200);
    }

    public function acceso(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (auth()->attempt($credentials)) {
        // El usuario ha sido autenticado correctamente

        // Obtener el usuario autenticado
        $user = auth()->user();

        // Verificar el tipo de usuario
        if ($user->tipo === 'admin') {
            // El usuario es un administrador
            return response()->json(['user' => $user, 'isAdmin' => true]);
        } else {
            // El usuario es un usuario registrado
            return response()->json(['user' => $user, 'isAdmin' => false]);
        }
    } else {
        // Las credenciales son inválidas
        return response()->json(['error' => 'Credenciales inválidas'], 401);
    }
}
}
