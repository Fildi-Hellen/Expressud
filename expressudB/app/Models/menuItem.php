<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class menuItem extends Model
{
    use HasFactory;
      
    protected $table='menu_items';

    protected $fillable = [
        'restaurantID', 'price', 'menuItemName', 'itemID', 'description', 'restaurantName', 'availability', 'photoUrl', 'categoryName'
    ];
}
