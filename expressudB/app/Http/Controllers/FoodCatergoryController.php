<?php

namespace App\Http\Controllers;

use App\Models\FoodCatergory;
use Illuminate\Http\Request;

class FoodCatergoryController extends Controller
{
    public function getAllFoodCategory() {
        $foods = FoodCatergory::all();
        return response()->json(['data' => $foods]);
    }


    public function index()
    {
        $categories = FoodCatergory::all();
        return response()->json($categories);
    }

    public function store(Request $request)
    {
        $request->validate([
            'categoryName' => 'required|string|max:255',
            'photoUrl' => 'required|string|max:255',
        ]);

        $category = FoodCatergory::create($request->all());
        return response()->json($category, 201);
    }

    public function show($id)
    {
        $category = FoodCatergory::findOrFail($id);
        return response()->json($category);
    }

    public function update(Request $request, $id)
    {
        $category = FoodCatergory::findOrFail($id);
        $request->validate([
            'categoryName' => 'required|string|max:255',
            'photoUrl' => 'required|string|max:255',
        ]);

        $category->update($request->all());
        return response()->json($category);
    }

    public function destroy($id)
    {
        $category = FoodCatergory::findOrFail($id);
        $category->delete();
        return response()->json(null, 204);
    }
    
}

