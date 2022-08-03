<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    //public function authorize()
    //{
        //return false;
    //}


    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'review.title' => 'required|string|max:20', //requiredがあることにより入力が必須になる
            'review.body' => 'required|string|max:400',
            'review.seat' => 'required',
            'review.star1' => 'required',
            'review.star2' => 'required',
            'review.star3' => 'required',
            'review.visited_at' => 'required',
        ];
    }
}
