@extends('layouts.app')

@section('title', 'Forgot Password')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">

            <div class="card shadow-sm">
                <div class="card-body p-4">

                    <h2 class="text-center mb-3">
                        Forgot Password?
                    </h2>

                    <p class="text-muted text-center mb-4">
                        Enter your email address and we will send you
                        a password reset link.
                    </p>

                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul class="mb-0">
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    <form action="{{ route('password.email') }}" method="POST">

                        @csrf

                        <div class="mb-4">
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
                                required
                            >
                        </div>

                        <button type="submit" class="btn btn-primary w-100">
                            Send Password Reset Link
                        </button>

                    </form>

                    <div class="text-center mt-3">
                        <a href="http://127.0.0.1:8000/login"
                           class="text-decoration-none">
                            Back to Login
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>

@endsection