<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function get()
    {
        $data = User::latest()->get();
        return response()->json($data);
    }

    public function post(Request $request)
    {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        return response()->json('success', 200);
    }

    public function edit($id)
    {
        $data = User::where('id', $id)->first();
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $user = User::whereId($id)->first();

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return response()->json("update success", 200);
    }

    public function delete($id)
    {
        User::whereId($id)->first()->delete();
        return response()->json("delete success", 200);
    }
}
