<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModels extends Model
{
    use HasFactory;

    protected $table = 'car_models';
    protected $primaryKey = 'id';


    public function user(){
        return $this->belongsTo(User::class);
    }
}
