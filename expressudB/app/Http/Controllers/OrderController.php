<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function addNewOrder(Request $request) {
        // Your order placement logic here
    }
    
    public function addToCart(Request $request) {
        // Your add to cart logic here
    }

    // public function getCartItemsByCustomerIdForRestaurant($customerId, $restaurantId) {
    //     $cartItems = CartItem::where('customer_id', $customerId)
    //                           ->where('restaurant_id', $restaurantId)
    //                           ->get();
    //     return response()->json($cartItems);
    // }
        
}


