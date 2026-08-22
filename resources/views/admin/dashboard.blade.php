@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')

<div class="container mt-5">

    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h1>Dashboard</h1>
            <p class="text-muted mb-0">
                Welcome to your PageForge CMS dashboard.
            </p>
        </div>

        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <button type="submit" class="btn btn-danger">
                Logout
            </button>
        </form>
    </div>

    <div class="row g-4">

        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Pages</h5>
                    <p class="card-text">
                        Create and manage your website pages.
                    </p>

                    <a href="{{ route('page.builder') }}" class="btn btn-primary">
                        Manage Pages
                    </a>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Media</h5>
                    <p class="card-text">
                        Manage your images and other media files.
                    </p>

                    <a href="#" class="btn btn-primary">
                        Media Library
                    </a>
                </div>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">Profile</h5>
                    <p class="card-text">
                        Manage your account information.
                    </p>

                    <a href="#" class="btn btn-primary">
                        My Profile
                    </a>
                </div>
            </div>
        </div>

    </div>

</div>

@endsection