<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FoodIngredient;


class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FoodIngredient::factory(40)->create();

    }
}
