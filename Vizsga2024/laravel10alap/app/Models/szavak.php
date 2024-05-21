<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class szavak extends Model
{
    protected $fillable = [
        'id',
        'angol',
        'magyar',
        'temaId'
        
       
    ];
    use HasFactory;
}
