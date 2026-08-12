@extends('layouts.app')

@section('title', 'Sign Up')

@section('content')

@if ($errors->any())
    <div class="alert alert-danger">
        <ul class="mb-0">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">

            <div class="card shadow-sm">
                <div class="card-body p-4">

                    <h2 class="text-center mb-4">Create Account</h2>

                    <form action="{{ route('register.store') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input
            type="text"
            class="form-control"
            id="fullName"
            name="name"
            placeholder="Enter your full name"
            value="{{ old('name') }}"
        >
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email Address</label>
                            <input
        type="email"
        class="form-control"
        id="email"
        name="email"
        placeholder="Enter your email"
        value="{{ old('email') }}"
    >
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        placeholder="Enter your password"
    >
                        </div>

                        <div class="mb-4">
                            <label for="confirmPassword" class="form-label">Confirm Password</label>
                            <input
        type="password"
        class="form-control"
        id="confirmPassword"
        name="password_confirmation"
        placeholder="Confirm your password"
    >
                        </div>

                        <button type="submit" class="btn btn-primary w-100">
                            Sign Up
                        </button>

                    </form>

                </div>
            </div>

        </div>
    </div>
</div>

@endsection