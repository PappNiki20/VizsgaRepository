<?php

namespace App\Http\Controllers;

use App\Models\szavak;
use DB;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
   public function szavak(){
    return szavak::all();
   }
   public function adottSzavak($tema){
    $szavak = DB::table('szavaks')
            ->select(
                'szavaks.*', 'temas.temanev'
            )
            ->join('temas','temas.id','=','szavaks.temaId')
            ->where('temaId','=', $tema)
            ->get();
            return response()->json(['adottcsapatok'=>$szavak]);
   }
}
