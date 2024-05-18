<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DriverController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'driver Panel: Logged In']);
    }
}
