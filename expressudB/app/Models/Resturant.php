<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resturant extends Model
{
    use HasFactory;
   
    protected $table = 'restaurants';
    protected $fillable = [
        'restaurantName', 'categoryName', 'openingHours', 'photoUrl', 'availability'
    ];

}
