<?php

namespace App\Http\Controllers;

use App\Models\Latihan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CobaController extends Controller
{
    public function index() {
        $coba = Latihan::all();
        return Inertia::render('Coba', [
            'data' => $coba,
        ]);
    }
}
