<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Customer Panel: Logged In']);
    }
}
