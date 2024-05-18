<?php

namespace App\Http\Controllers;

use App\Models\Resturant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{   
    public function getAllRestaurants(): JsonResponse
    {
        $resturants = Resturant::all();
        return response()->json($resturants);
    }


    public function getRestaurantServingByCategoryId(int $categoryId): JsonResponse
    {
        $restaurants = Resturant::where('category_id', $categoryId)->get();
        return response()->json($restaurants);
    }

    public function getRestaurantByRestaurantId(int $id): JsonResponse
    {
        $resturant = Resturant::find($id);

        if (!$resturant) {
            return response()->json(['message' => 'Restaurant not found'], 404);
        }

        return response()->json($resturant);
    }




}
