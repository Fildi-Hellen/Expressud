<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function index()
    {
        return response()->json(['message' => 'Vendor Panel: Logged In']);
    }
}
