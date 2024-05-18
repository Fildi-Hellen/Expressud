<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodCatergory extends Model
{
    use HasFactory;
    protected $table = 'food_categories';
    protected $fillable = ['categoryName', 'photoUrl'];
}
