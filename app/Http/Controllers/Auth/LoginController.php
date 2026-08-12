<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function store(Request $request)
    {
        // 1. Validate form data
        $validated = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // 2. Attempt login
        if (Auth::attempt([
            'email' => $validated['email'],
            'password' => $validated['password'],
        ])) {

            // 3. Regenerate session
            $request->session()->regenerate();

            // 4. Redirect to dashboard
            return redirect('/admin/dashboard');
        }

        // 5. Login failed
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}