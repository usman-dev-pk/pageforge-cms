@extends('layouts.app')

@section('title', 'Login')

@section('content')

@if ($errors->any())
    <div class="container mt-4">
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">

            <div class="card shadow-sm">
                <div class="card-body p-4">

                    <h2 class="text-center mb-4">Login</h2>

                    <form action="{{ route('login.store') }}" method="POST">

                        @csrf

                        {{-- Email --}}
                        <div class="mb-3">
                            <label for="email" class="form-label">
                                Email Address
                            </label>

                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value="{{ old('email') }}"
                            >
                        </div>

                        {{-- Password --}}
                        <div class="mb-3">
                            <label for="password" class="form-label">
                                Password
                            </label>

                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                            >
                        </div>

                        {{-- Forgot Password --}}
                        <div class="text-end mb-4">
                            <a href="{{ route('password.request') }}" class="text-decoration-none">
                                Forgot Password?
                            </a>
                        </div>

                        {{-- Login Button --}}
                        <button type="submit" class="btn btn-primary w-100">
                            Login
                        </button>

                    </form>

                    {{-- Register --}}
                    <div class="text-center mt-3">
                        <span>Don't have an account?</span>

                        <a
                            href="http://127.0.0.1:8000/signup"
                            class="text-decoration-none"
                        >
                            Register
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

@endsection