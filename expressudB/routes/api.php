<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Authcontroller;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\FoodCatergoryController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\RestaurantController;
use App\Http\Controllers\VendorController;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;
use Illuminate\Support\Facades\Route;


Route::middleware(['api', EnsureFrontendRequestsAreStateful::class])->group(function () {
   

// Authentication routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Authenticated routes
// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('user', [AuthController::class, 'user']);
//     Route::post('logout', [AuthController::class, 'logout']);
// });

//rolebased
Route::post('/login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum', 'role:admin'])->get('/admin', [AdminController::class, 'index']);
Route::middleware(['auth:sanctum', 'role:vendor'])->get('/vendor', [VendorController::class, 'index']);
Route::middleware(['auth:sanctum', 'role:customer'])->get('/customer', [CustomerController::class, 'index']);
Route::middleware(['auth:sanctum', 'role:driver'])->get('/driver', [DriverController::class, 'index']);


//Resturants
Route::get('/restaurants', [RestaurantController::class, 'getAllRestaurants']);
Route::get('/restaurants/{id}', [RestaurantController::class, 'getRestaurantByRestaurantId']);
Route::get('/restaurants/category/{categoryId}', [RestaurantController::class, 'getRestaurantServingByCategoryId']);

//foodcatergory
Route::get('/foods', [FoodCatergoryController::class, 'getAllFoodCategory']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/categories', [FoodCatergoryController::class, 'index']);
    Route::post('/categories', [FoodCatergoryController::class, 'store']);
    Route::get('/categories/{id}', [FoodCatergoryController::class, 'show']);
    Route::put('/categories/{id}', [FoodCatergoryController::class, 'update']);
    Route::delete('/categories/{id}', [FoodCatergoryController::class, 'destroy']);
});

//menu
Route::get('menu-items', [MenuItemController::class, 'index']);
Route::post('menu-items', [MenuItemController::class, 'store']);
Route::put('menu-items/{id}', [MenuItemController::class, 'update']);
Route::delete('menu-items/{id}', [MenuItemController::class, 'destroy']);

//carts
Route::post('/cart', [CartController::class, 'addToCart']);
Route::get('/cart/{customerId}/restaurant/{restaurantId}', [CartController::class, 'getCartItemsByCustomerIdForRestaurant']);

//order

Route::middleware('auth:api')->group(function () {
    Route::post('/orders/create', [OrderController::class, 'create']);
    Route::post('/orders/newOrderForCurrentUser', [OrderController::class, 'getNewOrderForCurrentUser']);
    Route::post('/orders/pay', [OrderController::class, 'pay']);
    Route::post('/orders/track/{id}', [OrderController::class, 'track']);
});
   

//feedback
Route::post('feedback', [FeedbackController::class, 'store']);

});