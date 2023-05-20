<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->string('codigo')->primary();
            $table->string('nombre');
            $table->float('precio');
            $table->integer('stock');
            $table->string('descripcion');
            $table->string('caracteristicas');
            $table->unsignedBigInteger('tipo_producto');
            $table->string('foto');
            $table->timestamps();

            $table->foreign('tipo_producto')->references('id')->on('tipo_podructos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
