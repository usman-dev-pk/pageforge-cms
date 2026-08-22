<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\PageController;


Route::get('/', function () {
    return view('home');
});

Route::get('/signup', function () {
    return view('signup');
});

Route::get('/login', function () {
    return view('login');
})->name('login');

Route::post('/register', [RegisterController::class, 'store'])
    ->name('register.store');

Route::post('/login', [LoginController::class, 'store'])
    ->name('login.store');

Route::get('/admin/dashboard', function () {
    return view('admin.dashboard');
})->middleware('auth')->name('admin.dashboard');

Route::post('/logout', function () {
    Auth::logout();
    return redirect('/login');
})->middleware('auth')->name('logout');

Route::get('/forgot-password', function () {
    return view('auth.forgot-password');
})->name('password.request');

Route::post('/forgot-password', [ForgotPasswordController::class, 'sendResetLink'])
    ->name('password.email');

Route::get('/reset-password/{token}', [ResetPasswordController::class, 'create'])
    ->name('password.reset');

Route::post('/reset-password', [ResetPasswordController::class, 'store'])
    ->name('password.update');

Route::middleware('auth')->group(function () {
    Route::get('/page-builder/{page?}', [PageController::class, 'builder'])
        ->name('page.builder');

    Route::get('/pages', [PageController::class, 'index'])
        ->name('pages.index');
    Route::post('/pages', [PageController::class, 'store'])
        ->name('pages.store');
    Route::get('/pages/{page}', [PageController::class, 'show'])
        ->name('pages.show');
    Route::put('/pages/{page}', [PageController::class, 'update'])
        ->name('pages.update');
    Route::get('/pages/{page}/children', [PageController::class, 'children'])
        ->name('pages.children');
});