<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodItem extends Model
{
    use HasFactory;
    protected $table='food_items';

    protected $fillable = [
        'restaurant_id', 'category_id', 'name', 'description', 'price', 'photoUrl'
    ];

}
