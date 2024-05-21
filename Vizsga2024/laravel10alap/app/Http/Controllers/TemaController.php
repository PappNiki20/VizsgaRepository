<?php

namespace App\Http\Controllers;

use App\Models\tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    public function temak(){
        return tema::all();
       }
}
