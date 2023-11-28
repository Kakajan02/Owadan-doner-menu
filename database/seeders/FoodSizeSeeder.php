<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\FoodSize;

class FoodSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FoodSize::factory(20)->create();
    }
}
