<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'file_path',
        'description',
        'price',
        'user_id',
        'product_id',
        'buying_price',
        'selling_price'

    ];

    public function user()
    {
        return $this->hasMany(User::class, 'product_id', 'id');
    }
}
