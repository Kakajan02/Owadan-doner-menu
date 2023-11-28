<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResourceAll extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $food_query = $this->foods()->whereIsActive(true);

        return [
            'id' => $this->id,
            'name' => $this->getTranslations('name'),
            'foods' => FoodResource::collection($food_query->orderBy('order')->get()),
        ]; 
    }
}
