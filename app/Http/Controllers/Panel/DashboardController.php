<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Food;
use App\Models\Hall;
use App\Models\Order;
use App\Models\Table;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $quantities = [
            'category' => Category::count(),
            'food' => Food::count(),
        ];
        return view('index', compact('quantities'));
    }

    public function profile()
    {
        $user = auth()->user();

        return view('profile', compact('user'));
    }

    public function profileUpdate(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required',
            'password' => 'required_with:password_confirmation|min:6|confirmed',
        ]);

        if ($request->has('password')) {
            $request->merge(['password' => bcrypt($request->get('password_confirmation'))]);
        }

        auth()->user()->update($request->all());

        return redirect()->route('profile')->with('success', trans('main.profile_updated'));
    }
}
