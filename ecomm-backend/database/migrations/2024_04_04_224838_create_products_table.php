<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("description")->nullable();
            $table->string("file_path");
<<<<<<< HEAD
            $table->decimal("price", 7,2);
            $table->decimal("buying_price", 7,2);
            $table->decimal("selling_price", 7,2);
=======
            $table->decimal("price", 5,2);
            $table->decimal("buying_price", 5,2);
            $table->decimal("selling_price", 5,2);
>>>>>>> 87206bd1498450efb60e7d939e8c87068951564a


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
