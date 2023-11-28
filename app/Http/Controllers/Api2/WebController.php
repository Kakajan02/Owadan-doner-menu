<?php

namespace App\Http\Controllers\Api2;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Food;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\FoodResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryResourceAll;


class WebController extends Controller
{ 
    public function categories(){
	    return CategoryResource::collection(Category::orderBy('order')->get());
    }

    public function foods(){
        return CategoryResourceAll::collection(Category::orderBy('order')->get()); 
    }
}
