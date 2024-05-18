<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class FoodCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Disable foreign key checks to avoid issues during seeding
        Schema::disableForeignKeyConstraints();
        
        // Optionally, truncate the table before seeding
        DB::table('food_categories')->truncate();

        DB::table('food_categories')->insert([
            [
                'categoryName' => 'Italian',
                'photoUrl' => 'assets/img/food/menu.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'categoryName' => 'Chinese',
                'photoUrl' => 'assets/img/food/meat.webp',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'categoryName' => 'Mexican',
                'photoUrl' => 'assets/img/food/burger.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'categoryName' => 'Sudanese',
                'photoUrl' => 'assets/img/food/Molokhia.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'categoryName' => 'American',
                'photoUrl' => 'assets/img/food/pizza.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more categories as needed
        ]);

        // Re-enable foreign key checks after seeding
        Schema::enableForeignKeyConstraints();
    }
}
