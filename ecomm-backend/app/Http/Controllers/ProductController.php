<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //
    public function addProduct(Request $req){
        $product = new Product;
        $product->name=$req->input('name');
        $product->price=$req->input('price');
        $product->description=$req->input('description');
        $product->file_path=$req->file('file')->store('products');
        $product->save();
        return $product;
    }

    public function list(){
        return Product::all();
    }

    public function delete($id) {
        $result = Product::where('id', $id)->delete();
        if($result){
            return ["result"=> "Product has been deleted"];
        }
        else {
            return ["result"=> "Operation failed"];
        }
    }

    public function getProduct($id){
            return Product::find($id);
        }

    public function update(Request $req, $id)
        {
            $product = Product::find($id);
            $product->update($req->all());
            return $product;
        }

    public function search($key){
        return Product::where('name', 'Like', "%$key%")->get();
    }
}
