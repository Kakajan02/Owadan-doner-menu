<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FoodRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'name.*' => 'required',
            'discount' => 'nullable|numeric|min:1',
            'discount_unit' => 'nullable|in:manat,percent',
            'category_id' => 'required|exists:categories,id',
            // 'description.*' => 'nullable',
        ];


        return $rules;
    }
}
