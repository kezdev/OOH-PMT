<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ProjectSeeder::class,
        ]);

        User::factory()->create([
            'name' => 'Kez H',
            'email' => 'user@example.com',
            'password' => bcrypt('password'),
        ]);
    }
}
