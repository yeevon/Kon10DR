<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Potential columns needed for the future:
     *  {Stripe Customer ID, Free Plans, Paid Plans, }
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->boolean('verified')->default(false);
            $table->string('member_redirect')->unique();
            $table->timestamp('last_login')->nullable();
            $table->string('username')->nullable()->unique();
            $table->string('password');
            $table->string('member_id')->nullable()->unique();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
