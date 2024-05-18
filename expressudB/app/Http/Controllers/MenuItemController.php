<?php

namespace App\Http\Controllers;

use App\Models\menuItem;
use Illuminate\Http\Request;

class MenuItemController extends Controller
{
     public function index()
    {
        $menuItems = MenuItem::all();
        return response()->json(['data' => $menuItems]);
    }

    public function store(Request $request)
    {
        $menuItem = MenuItem::create($request->all());
        return response()->json($menuItem, 201);
    }

    public function update(Request $request, $id)
    {
        $menuItem = MenuItem::findOrFail($id);
        $menuItem->update($request->all());
        return response()->json($menuItem);
    }

    public function destroy($id)
    {
        MenuItem::destroy($id);
        return response()->json(null, 204);
    }
}
