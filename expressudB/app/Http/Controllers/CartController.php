<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\CartItem;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CartController extends Controller
{
     /**
     * Add item to cart
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function addToCart(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'customer_id' => 'required|integer|exists:customers,id',
            'restaurant_id' => 'required|integer|exists:restaurants,id',
            'product_id' => 'required|integer|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $cart = Cart::firstOrCreate(
            [
                'customer_id' => $validatedData['customer_id'],
                'restaurant_id' => $validatedData['restaurant_id'],
            ]
        );

        $cartItem = CartItem::updateOrCreate(
            [
                'cart_id' => $cart->id,
                'product_id' => $validatedData['product_id'],
            ],
            [
                'quantity' => $validatedData['quantity'],
            ]
        );

        return response()->json(['message' => 'Item added to cart', 'cart_item' => $cartItem]);
    }

    /**
     * Get cart items by customer ID for a specific restaurant
     *
     * @param int $customerId
     * @param int $restaurantId
     * @return JsonResponse
     */
    public function getCartItemsByCustomerIdForRestaurant(int $customerId, int $restaurantId): JsonResponse
    {
        $cart = Cart::where('customer_id', $customerId)
                    ->where('restaurant_id', $restaurantId)
                    ->with('items')
                    ->first();

        if (!$cart) {
            return response()->json(['message' => 'Cart not found'], 404);
        }

        return response()->json($cart->items);
    }
}
