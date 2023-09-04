<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //Get and organize former Kon10dr data
        $csvFilePath = storage_path('classic_data/member.csv');
        $csvData = File::get($csvFilePath);
        $rows = explode(PHP_EOL, $csvData);
        
        //Import csv data to user and userProfile tables
        foreach ($rows as $row) {
          $columns = str_getcsv($row);

          $isTrue = false;
          if ($columns[3] == 'TRUE') $isTrue = true;

          $formattedDate = null;
          if (!empty($columns[12])) {
            $dateComponents = explode('/', $columns[12]);

            if (count($dateComponents) === 3) {
              list($month, $day, $year) = $dateComponents;
              $month = str_pad($month, 2, '0', STR_PAD_LEFT);
              $day = str_pad($day, 2, '0', STR_PAD_LEFT);
            
              $carbonDate = \Carbon\Carbon::createFromFormat('m/d/Y', "$month/$day/$year");
              $formattedDate = $carbonDate->format('Y-m-d');

            }            
          }

          $emailAlreadyInstered = DB::table('users')->where('email', $columns[1])->first(); 

          if (!$emailAlreadyInstered) {
            DB::table('users')->insert([
              'email' => $columns[1] ?? '',
              'verified' => $isTrue,
              'username' => $columns[9] ?? '',
              'member_id' => $columns[0] ?? '',
            ]);

            DB::table('user_profile')->insert([
              'member_id' => $columns[0] ?? '',
              'email' => $columns[1] ?? '',
              'first_name' => $columns[10] ?? '',
              'last_name' => $columns[11] ?? '',
              'dob' => $formattedDate ?? '',
              'phone_no' => $columns['phone'] ?? '',
              'country' => $columns[15] ?? '',
            ]);
          }
          else {
            $this->command->info("Skipping record with email: {$columns[1]} (already exists)");
          }
        }
    }
}
