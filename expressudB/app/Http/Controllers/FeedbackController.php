<?php

namespace App\Http\Controllers;

use App\Mail\FeedbackNotification;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required',
            'rating' => 'required|integer|min:1|max:5',
        ]);

        $feedback = Feedback::create([
            'comment' => $request->input('comment'),
            'rating' => $request->input('rating'),
        ]);

        // Send email notification
        Mail::to('expressud7@email.com')->send(new FeedbackNotification ($feedback));

        return response()->json(['message' => 'Feedback submitted successfully'], 201);
    }
}
